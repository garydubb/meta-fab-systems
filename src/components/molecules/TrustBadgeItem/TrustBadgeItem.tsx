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
      align="center"
      gap="middle"
      vertical={!row}
      style={{ textAlign: row ? "left" : "center" }}
    >
      <IconTile icon={icon} size="lg" />
      <Text
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: row ? 16 : 14,
          color: colors.white,
        }}
      >
        {title}
      </Text>
    </Flex>
  );
}
