"use client";

import { Typography, Flex, Grid } from "antd";
import { IconTile } from "@/components/atoms";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

type TrustBadgeItemProps = {
  title: string;
  icon: string;
};

export default function TrustBadgeItem({ title, icon }: TrustBadgeItemProps) {
  const screens = useBreakpoint();
  const row = Boolean(screens.sm);

  return (
    <Flex
      vertical
      align="center"
      gap="middle"
      className="trust-badge-card"
      style={{ textAlign: "center", height: "100%", padding: row ? 32 : 24 }}
    >
      <Flex
        align="center"
        justify="center"
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: colors.orangeSoft,
        }}
      >
        <IconTile icon={icon} size="lg" />
      </Flex>
      <Text
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: row ? 16 : 14,
          color: colors.black,
        }}
      >
        {title}
      </Text>
    </Flex>
  );
}
