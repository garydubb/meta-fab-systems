"use client";

import { Card, Typography, Space, Tag, Flex } from "antd";
import { IconTile } from "@/components/atoms";
import { colors } from "@/lib/theme/colors";

const { Text, Paragraph } = Typography;

type ServiceCardProps = {
  title: string;
  icon: string;
  description?: string;
  software?: readonly string[];
};

export default function ServiceCard({
  title,
  icon,
  description,
  software,
}: ServiceCardProps) {
  return (
    <Card style={{ height: "100%", textAlign: "center" }} hoverable>
      <Flex vertical align="center" gap="small">
        <IconTile icon={icon} size={description ? "lg" : "sm"} />
        <Text strong style={{ color: colors.black }}>
          {title}
        </Text>
        {description && (
          <Paragraph style={{ fontSize: 14, color: colors.neutral500 }}>
            {description}
          </Paragraph>
        )}
        {software && software.length > 0 && (
          <Space size={[4, 4]} wrap style={{ justifyContent: "center" }}>
            {software.map((tool) => (
              <Tag
                key={tool}
                style={{
                  borderRadius: 999,
                  borderColor: colors.orangeBorder,
                  backgroundColor: colors.orangeSoft,
                  color: colors.orange,
                }}
              >
                {tool}
              </Tag>
            ))}
          </Space>
        )}
      </Flex>
    </Card>
  );
}
