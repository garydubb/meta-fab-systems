import { ImageResponse } from "next/og";
import { siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: colors.black,
          color: colors.white,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 6,
            backgroundColor: colors.orange,
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", fontSize: 30, color: colors.orange, letterSpacing: 4, textTransform: "uppercase" }}>
          {siteInfo.name}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 16 }}>
          {siteInfo.tagline.join(" · ")}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: colors.neutral300, marginTop: 24, maxWidth: 900 }}>
          {siteInfo.subheading}
        </div>
      </div>
    ),
    { ...size }
  );
}
