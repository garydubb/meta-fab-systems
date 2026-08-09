"use client";

import { Typography, Space, Flex } from "antd";
import { iconMap } from "@/lib/icon-map";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;

type ContactInfoItemProps = {
  icon: string;
  lines: string[];
  label?: string;
};

export default function ContactInfoItem({ icon, lines, label }: ContactInfoItemProps) {
  const Icon = iconMap[icon];

  return (
    <Space align="start" size="middle">
      <Icon style={{ marginTop: 4, height: 20, width: 20, flexShrink: 0, color: colors.orange }} />
      <Flex vertical>
        {lines.map((line) => (
          <Text key={line} strong style={{ display: "block", color: colors.black }}>
            {line}
          </Text>
        ))}
        {label && <Text style={{ fontSize: 14, color: colors.neutral500 }}>{label}</Text>}
      </Flex>
    </Space>
  );
}
