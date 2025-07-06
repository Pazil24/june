import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1024px",
          height: "1024px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffeef8 0%, #f8e1f4 100%)",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: "200px",
            marginBottom: "20px",
          }}
        >
          🌸
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#8b1b47",
            marginBottom: "20px",
          }}
        >
          June
        </div>
        <div
          style={{
            fontSize: "40px",
            color: "#8b1b47",
            textAlign: "center",
          }}
        >
          Postpartum Wellness
        </div>
      </div>
    ),
    {
      width: 1024,
      height: 1024,
    }
  );
}
