"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SelfQRcodeWrapper, SelfAppBuilder } from "@selfxyz/qrcode";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAccount } from "wagmi";

interface SelfVerificationProps {
  onVerificationSuccess?: (userData: any) => void;
  onVerificationError?: (error: string) => void;
}

export function SelfVerification({
  onVerificationSuccess,
  onVerificationError,
}: SelfVerificationProps) {
  const { address } = useAccount();
  const [userId, setUserId] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "verifying" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Generate a unique user ID when component mounts
    const id = uuidv4();
    setUserId(id);
  }, []);

  const handleVerificationSuccess = (userData: any) => {
    console.log("✅ Self Protocol verification successful:", userData);
    setVerificationStatus("success");
    if (onVerificationSuccess) {
      onVerificationSuccess(userData);
    }
  };

  const handleVerificationError = (error: string) => {
    console.error("❌ Self Protocol verification failed:", error);
    setVerificationStatus("error");
    setErrorMessage(error);
    if (onVerificationError) {
      onVerificationError(error);
    }
  };

  const startVerification = () => {
    setShowQR(true);
    setVerificationStatus("verifying");
    setErrorMessage("");
  };

  const resetVerification = () => {
    setShowQR(false);
    setVerificationStatus("idle");
    setErrorMessage("");
    // Generate new user ID for fresh verification
    setUserId(uuidv4());
  };

  if (!userId) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-text-secondary">Initializing verification...</p>
        </div>
      </Card>
    );
  }

  // Create the SelfApp configuration
  const selfApp = new SelfAppBuilder({
    appName: "June - Postpartum Care",
    scope: "june-postpartum-care", // Must match backend
    endpoint: process.env.NEXT_PUBLIC_APP_URL + "/api/self-verify",
    userId: userId,
    logoBase64: "", // Optional: add base64 logo
    disclosures: {
      minimumAge: 18, // Must match backend config
      excludedCountries: ["IRN", "PRK"], // Must match backend config
      ofac: true, // Must match backend config
      nationality: true, // Request nationality
      name: true, // Request name
      date_of_birth: true, // Request date of birth
    },
  }).build();

  return (
    <Card className="p-6">
      <div className="text-center">
        <div className="mb-6">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Identity Verification
          </h3>
          <p className="text-text-secondary text-sm">
            Verify your identity privately using zero-knowledge proofs
          </p>
        </div>

        {!showQR && verificationStatus === "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <h4 className="font-medium text-blue-900 mb-2">
                What you'll need:
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Valid passport or EU ID card</li>
                <li>• Self app installed on your phone</li>
                <li>• Age 18 or older</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
              <h4 className="font-medium text-green-900 mb-2">
                Privacy guaranteed:
              </h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Zero-knowledge proof verification</li>
                <li>• No personal documents stored</li>
                <li>• Only basic eligibility confirmed</li>
              </ul>
            </div>

            <Button
              variant="primary"
              onClick={startVerification}
              className="w-full"
            >
              Start Identity Verification
            </Button>
          </motion.div>
        )}

        {showQR && verificationStatus === "verifying" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                📱 Scan this QR code with the Self app to verify your identity
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-inner">
              <SelfQRcodeWrapper
                selfApp={selfApp}
                onSuccess={() => handleVerificationSuccess({})}
                onError={(error) =>
                  handleVerificationError(
                    error.reason || error.error_code || "Verification failed"
                  )
                }
                size={280}
              />
            </div>

            <div className="text-xs text-text-light">
              User ID: {userId.substring(0, 8)}...
            </div>

            <Button
              variant="secondary"
              onClick={resetVerification}
              className="w-full"
            >
              Cancel Verification
            </Button>
          </motion.div>
        )}

        {verificationStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="text-6xl mb-4">✅</div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">
              Identity Verified!
            </h4>
            <p className="text-text-secondary text-sm mb-4">
              You've successfully verified your identity with zero-knowledge
              proofs. Welcome to the June community!
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm font-medium">
                🎉 You now have access to:
              </p>
              <ul className="text-sm text-green-700 mt-2 space-y-1">
                <li>• Verified member benefits</li>
                <li>• Community governance voting</li>
                <li>• Priority support access</li>
              </ul>
            </div>

            <Button
              variant="primary"
              onClick={resetVerification}
              className="w-full"
            >
              Verify Another Identity
            </Button>
          </motion.div>
        )}

        {verificationStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="text-6xl mb-4">❌</div>
            <h4 className="text-xl font-semibold text-red-600 mb-2">
              Verification Failed
            </h4>
            <p className="text-text-secondary text-sm mb-4">
              {errorMessage ||
                "Identity verification was unsuccessful. Please try again."}
            </p>

            <Button
              variant="primary"
              onClick={resetVerification}
              className="w-full"
            >
              Try Again
            </Button>
          </motion.div>
        )}
      </div>
    </Card>
  );
}
