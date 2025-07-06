import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Basic webhook response for Farcaster
  return NextResponse.json({
    message: "June Farcaster webhook active",
    timestamp: new Date().toISOString(),
    app: "June - The Mother of All Care",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Handle Farcaster webhook events
    console.log("Farcaster webhook received:", body);

    // Process the webhook data here
    // This is where you'd handle user interactions, analytics, etc.

    return NextResponse.json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}
