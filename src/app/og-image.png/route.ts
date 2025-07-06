import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // Create a simple SVG placeholder image
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fce7f3;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#fbcfe8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f9a8d4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)"/>
      <text x="600" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="#9d174d">June 🌸</text>
      <text x="600" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="#be185d">The Mother of All Care</text>
      <text x="600" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#831843">Web3-powered postpartum wellness companion</text>
      <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#9d174d">Built for mothers, governed by mothers</text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
