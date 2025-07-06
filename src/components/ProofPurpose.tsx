"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAccount } from "wagmi";
import { SelfVerification } from "@/components/SelfVerification";
import { GoodDollarIntegration } from "@/components/GoodDollarIntegration";

export function ProofPurpose() {
  const { address, isConnected } = useAccount();
  const [verificationStatus, setVerificationStatus] = useState<
    "none" | "verified" | "error"
  >("none");
  const [verifiedUserData, setVerifiedUserData] = useState<any>(null);

  const handleVerificationSuccess = (userData: any) => {
    console.log("✅ Identity verification successful:", userData);
    setVerificationStatus("verified");
    setVerifiedUserData(userData);
  };

  const handleVerificationError = (error: string) => {
    console.error("❌ Identity verification failed:", error);
    setVerificationStatus("error");
  };

  const [goodDollarSuccess, setGoodDollarSuccess] = useState(false);

  const handleGoodDollarSuccess = () => {
    console.log("✅ GoodDollar UBI claim successful");
    setGoodDollarSuccess(true);
    setTimeout(() => setGoodDollarSuccess(false), 3000);
  };

  const handleGoodDollarError = (error: string) => {
    console.error("❌ GoodDollar UBI claim failed:", error);
  };

  const protocolFeatures = [
    {
      protocol: "Self Protocol",
      emoji: "�",
      title: "Private Identity Verification",
      description:
        "Prove you are a unique human without revealing personal information",
      benefits: [
        "Zero-knowledge proof of identity",
        "Sybil resistance for fair distribution",
        "Privacy-preserving verification",
        "Real-world attestations using passports",
      ],
      status: verificationStatus,
      component: (
        <SelfVerification
          onVerificationSuccess={handleVerificationSuccess}
          onVerificationError={handleVerificationError}
        />
      ),
    },
    {
      protocol: "GoodDollar",
      emoji: "💰",
      title: "Universal Basic Income",
      description:
        "Join 640,000+ members receiving digital UBI through $G tokens",
      benefits: [
        "Daily $G token claims",
        "Global UBI community",
        "Support for 181 countries",
        "Changemaker network",
      ],
      status: goodDollarSuccess ? "verified" : "none",
      component: (
        <GoodDollarIntegration
          onSuccess={handleGoodDollarSuccess}
          onError={handleGoodDollarError}
        />
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4 font-poppins">
            Proof + Purpose 🔐
          </h2>
          <p className="text-text-secondary mb-6">
            Connect with privacy-preserving protocols and global UBI networks to
            build a decentralized support system.
          </p>
        </motion.div>
      </Card>

      {/* Connection Status */}
      {isConnected ? (
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-text-primary font-medium">Wallet Connected</p>
              <p className="text-sm text-text-secondary">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <div className="text-center">
            <p className="text-text-secondary mb-4">
              Connect your wallet to access Web3 protocols
            </p>
            <p className="text-sm text-text-light">
              Your wallet connection enables privacy-preserving verification and
              UBI access
            </p>
          </div>
        </Card>
      )}

      {/* Protocol Integration */}
      <div className="grid gap-6 md:grid-cols-2">
        {protocolFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-text-secondary">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Render component or button */}
              <div className="mt-6">
                {feature.component ? (
                  feature.component
                ) : (
                  <div className="text-center">
                    <Button
                      variant="primary"
                      onClick={(feature as any).onClick}
                      disabled={!isConnected}
                      className="w-full"
                    >
                      {(feature as any).action}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Community Impact */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          🌍 Global Community Impact
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">640K+</div>
            <div className="text-sm text-text-secondary">
              GoodDollar Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">181</div>
            <div className="text-sm text-text-secondary">
              Countries Supported
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">13</div>
            <div className="text-sm text-text-secondary">
              Active Local Chapters
            </div>
          </div>
        </div>
        <p className="text-center text-text-secondary mt-4">
          Join the world's largest UBI community and help build a more equitable
          future for mothers everywhere.
        </p>
      </Card>

      {/* Future Governance */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          🗳️ Future: Community Governance
        </h3>
        <p className="text-text-secondary mb-4">
          June will evolve into a mother-governed DAO where verified members
          vote on:
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="text-primary-500">•</span>
            <span className="text-sm text-text-secondary">
              Fund allocation for maternal health
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">•</span>
            <span className="text-sm text-text-secondary">
              New feature development
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">•</span>
            <span className="text-sm text-text-secondary">
              Partnership with healthcare providers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">•</span>
            <span className="text-sm text-text-secondary">
              Research initiatives
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
