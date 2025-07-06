"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAccount, useReadContract, useChainId } from "wagmi";
import { formatEther } from "viem";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface GoodDollarIntegrationProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

// GoodDollar token addresses on different networks
const GOODDOLLAR_ADDRESSES = {
  1: "0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B", // Ethereum mainnet
  42220: "0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A", // Celo mainnet
  122: "0x495d133B938596C9984d462F007B676bDc57eCEC", // Fuse mainnet
  8453: "0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B", // Base mainnet (example)
};

// Simple ERC20 ABI for balance reading
const ERC20_ABI = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export function GoodDollarIntegration({
  onSuccess,
  onError,
}: GoodDollarIntegrationProps) {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [isClaimingUBI, setIsClaimingUBI] = useState(false);
  const [lastClaimTime, setLastClaimTime] = useState<number | null>(null);
  const [claimCooldown, setClaimCooldown] = useState(0);

  // Get the GoodDollar token contract address for current chain
  const goodDollarAddress =
    GOODDOLLAR_ADDRESSES[chainId as keyof typeof GOODDOLLAR_ADDRESSES];

  // Read G$ balance
  const { data: balance, refetch: refetchBalance } = useReadContract({
    address: goodDollarAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!goodDollarAddress,
    },
  });

  // Read token decimals
  const { data: decimals } = useReadContract({
    address: goodDollarAddress as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "decimals",
    query: {
      enabled: !!goodDollarAddress,
    },
  });

  // Format balance for display
  const formattedBalance =
    balance && decimals
      ? (Number(balance) / Math.pow(10, Number(decimals))).toFixed(2)
      : "0.00";

  // Calculate time until next claim
  useEffect(() => {
    if (lastClaimTime) {
      const now = Date.now();
      const timeSinceLastClaim = now - lastClaimTime;
      const cooldownTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (timeSinceLastClaim < cooldownTime) {
        setClaimCooldown(cooldownTime - timeSinceLastClaim);

        const interval = setInterval(() => {
          const newCooldown = cooldownTime - (Date.now() - lastClaimTime);
          if (newCooldown <= 0) {
            setClaimCooldown(0);
            clearInterval(interval);
          } else {
            setClaimCooldown(newCooldown);
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    }
  }, [lastClaimTime]);

  // Check if user can claim (not in cooldown)
  const canClaim = claimCooldown <= 0;

  // Format cooldown time
  const formatCooldown = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const handleClaimUBI = async () => {
    if (!address || !canClaim) return;

    setIsClaimingUBI(true);

    try {
      // Call the UBI claim API
      const response = await fetch("/api/gooddollar-claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: address,
          timestamp: Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("✅ GoodDollar UBI claimed successfully:", data);

        // Set last claim time and trigger cooldown
        setLastClaimTime(Date.now());

        // Refetch balance to show updated amount
        refetchBalance();

        // Trigger success callback
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error(data.error || "Failed to claim UBI");
      }
    } catch (error) {
      console.error("❌ GoodDollar UBI claim failed:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to claim UBI";

      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsClaimingUBI(false);
    }
  };

  if (!isConnected) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Connect Wallet for UBI
          </h3>
          <p className="text-text-secondary text-sm">
            Connect your wallet to access GoodDollar Universal Basic Income
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            GoodDollar UBI
          </h3>
          <p className="text-text-secondary text-sm">
            Daily Universal Basic Income for verified members
          </p>
        </div>

        {/* Balance Display */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {formattedBalance} G$
            </div>
            <div className="text-sm text-green-700">Current Balance</div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-lg font-semibold text-blue-600">640K+</div>
            <div className="text-xs text-blue-700">Members</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="text-lg font-semibold text-purple-600">181</div>
            <div className="text-xs text-purple-700">Countries</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="text-lg font-semibold text-amber-600">$5M+</div>
            <div className="text-xs text-amber-700">Distributed</div>
          </div>
        </div>

        {/* Claim Button */}
        <div className="space-y-3">
          {canClaim ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                variant="primary"
                onClick={handleClaimUBI}
                disabled={isClaimingUBI}
                className="w-full"
              >
                {isClaimingUBI ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Claiming UBI...
                  </>
                ) : (
                  "Claim Daily UBI"
                )}
              </Button>
            </motion.div>
          ) : (
            <div className="text-center">
              <Button variant="secondary" disabled className="w-full">
                Next Claim Available In
              </Button>
              <div className="mt-2 text-sm text-text-secondary">
                {formatCooldown(claimCooldown)}
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            About GoodDollar UBI
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Claim G$ tokens daily</li>
            <li>• Part of global UBI network</li>
            <li>• Use for transactions & governance</li>
            <li>• Support sustainable economy</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
