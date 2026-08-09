"use client";

import { Card, Typography, Flex } from "antd";
import { IconTile } from "@/components/atoms";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;

type TeamMemberCardProps = {
  role: string;
  icon: string;
  description: string;
};

export default function TeamMemberCard({ role, icon, description }: TeamMemberCardProps) {
  return (
    <Card style={{ height: "100%", textAlign: "center" }}>
      <Flex vertical align="center" gap="small">
        <Flex
          align="center"
          justify="center"
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: colors.orangeSoft,
          }}
        >
          <IconTile icon={icon} size="lg" />
        </Flex>
        <Title level={5} style={{ color: colors.black, margin: 0 }}>
          {role}
        </Title>
        <Paragraph style={{ fontSize: 14, color: colors.neutral500, margin: 0 }}>
          {description}
        </Paragraph>
      </Flex>
    </Card>
  );
}
