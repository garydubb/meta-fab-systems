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
      <Text
        style={{
          display: "flex",
          height: 40,
          width: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          fontFamily: "var(--font-heading)",
          fontSize: 18,
          backgroundColor: inverted ? colors.white : colors.black,
          color: inverted ? colors.black : colors.white,
        }}
      >
        MF
      </Text>
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
