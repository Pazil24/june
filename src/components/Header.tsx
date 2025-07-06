"use client";

import { motion } from "framer-motion";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    const coinbaseConnector = connectors.find(
      (connector) => connector.name === "Coinbase Wallet"
    );
    if (coinbaseConnector) {
      connect({ connector: coinbaseConnector });
    }
  };

  return (
    <header className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient mb-2 font-poppins">
          June 🌸
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          The Mother of All Care
        </p>
        <p className="text-sm text-text-light max-w-2xl mx-auto mb-8">
          Your Web3-powered postpartum wellness companion — built for mothers,
          governed by mothers.
        </p>
      </motion.div>

      <div className="flex justify-center">
        {isConnected ? (
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <p className="text-sm text-text-primary">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => disconnect()}
              className="text-sm"
            >
              Disconnect
            </Button>
          </div>
        ) : (
          <Button
            variant="primary"
            onClick={handleConnect}
            className="px-8 py-3"
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </header>
  );
}
