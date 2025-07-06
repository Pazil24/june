import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffeef8 0%, #f8e1f4 100%)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            fontSize: "80px",
          }}
        >
          🌸
        </div>
      </div>
    ),
    {
      width: 200,
      height: 200,
    }
  );
}
