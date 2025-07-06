import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { FarcasterSDK } from "@/components/FarcasterSDK";

// Using system fonts as fallback to avoid network issues during build
const fontClasses = "font-sans";

export const metadata: Metadata = {
  title: "June - The Mother of All Care",
  description:
    "Your Web3-powered postpartum wellness companion — built for mothers, governed by mothers.",
  keywords: [
    "postpartum",
    "wellness",
    "web3",
    "mothers",
    "mental health",
    "self care",
  ],
  authors: [{ name: "June Team" }],
  openGraph: {
    title: "June - The Mother of All Care",
    description:
      "Your Web3-powered postpartum wellness companion — built for mothers, governed by mothers.",
    type: "website",
    siteName: "June",
    url: "https://june-wellness.vercel.app",
    images: [
      {
        url: "https://june-wellness.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "June - The Mother of All Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "June - The Mother of All Care",
    description:
      "Your Web3-powered postpartum wellness companion — built for mothers, governed by mothers.",
    images: ["https://june-wellness.vercel.app/og-image.png"],
  },
  other: {
    // Farcaster Frame metadata
    "fc:frame": "vNext",
    "fc:frame:image": "https://june-wellness.vercel.app/og-image.png",
    "fc:frame:button:1": "Open June App",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://june-wellness.vercel.app",
    // Farcaster Mini App metadata
    "fc:miniapp": "true",
    "fc:miniapp:name": "June",
    "fc:miniapp:url": "https://june-wellness.vercel.app",
    "fc:miniapp:icon": "https://june-wellness.vercel.app/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontClasses} antialiased`} suppressHydrationWarning>
        <FarcasterSDK />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
