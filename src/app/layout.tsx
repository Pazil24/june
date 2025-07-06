import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "June - The Mother of All Care",
    description:
      "Your Web3-powered postpartum wellness companion — built for mothers, governed by mothers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
