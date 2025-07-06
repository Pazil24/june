"use client";

import { useEffect } from "react";

export function FarcasterSDK() {
  useEffect(() => {
    // Check if we're in a Farcaster Mini App
    const url = new URL(window.location.href);
    const isMiniApp =
      url.pathname.startsWith("/mini") ||
      url.searchParams.get("miniApp") === "true" ||
      window.location.hostname === "june-wellness.vercel.app";

    if (isMiniApp) {
      // Dynamically import the SDK to avoid SSR issues
      import("@farcaster/miniapp-sdk")
        .then(({ sdk }) => {
          // Initialize the SDK
          sdk.actions.ready();

          // Set up any other SDK features
          console.log("Farcaster Mini App SDK initialized");
        })
        .catch((error) => {
          console.error("Failed to load Farcaster SDK:", error);
        });
    }
  }, []);

  return null; // This component doesn't render anything
}
