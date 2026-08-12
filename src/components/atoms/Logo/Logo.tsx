"use client";

import Link from "next/link";
import { Typography, Grid } from "antd";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

type LogoProps = {
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  const screens = useBreakpoint();

  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <rect
          width={40}
          height={40}
          rx={4}
          fill={inverted ? colors.white : colors.black}
        />
        <text
          x="50%"
          y="50%"
          dy="0.35em"
          textAnchor="middle"
          fontFamily="var(--font-heading)"
          fontSize={18}
          fill={inverted ? colors.black : colors.white}
        >
          MF
        </text>
      </svg>
      <Text
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 20,
          letterSpacing: "0.02em",
          color: inverted ? colors.white : colors.black,
        }}
      >
        META
        <Text style={{ color: colors.orange, fontFamily: "inherit", fontSize: "inherit" }}>
          FAB
        </Text>{" "}
        {screens.sm && (
          <Text style={{ fontSize: 14, fontWeight: 400, color: colors.neutral500 }}>
            Systems
          </Text>
        )}
      </Text>
    </Link>
  );
}
