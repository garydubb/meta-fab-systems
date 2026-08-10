import { ImageResponse } from "next/og";
import { colors } from "@/lib/theme/colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.black,
          color: colors.orange,
          fontFamily: "sans-serif",
          fontSize: 88,
          fontWeight: 700,
        }}
      >
        MF
      </div>
    ),
    { ...size }
  );
}
