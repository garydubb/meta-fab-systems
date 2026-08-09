"use client";

import { Typography, Space, Grid } from "antd";
import { Section, Container } from "@/components/atoms";
import { materials } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function MaterialsStrip() {
  const screens = useBreakpoint();
  const row = Boolean(screens.lg);

  return (
    <Section style={{ borderTop: `1px solid ${colors.neutral200}`, backgroundColor: colors.white }}>
      <Container
        vertical={!row}
        justify="space-between"
        align="center"
        gap="middle"
        wrap
        style={{ paddingBlock: 24 }}
      >
        <Space wrap size="middle" style={{ justifyContent: "center" }}>
          <Text strong style={{ fontFamily: "var(--font-heading)", color: colors.black }}>
            We Work With:
          </Text>
          <Space wrap size="middle" separator={<Text style={{ color: colors.orange }}>|</Text>}>
            {materials.map((material) => (
              <Text key={material} style={{ fontSize: 14, color: colors.neutral600 }}>
                {material}
              </Text>
            ))}
          </Space>
        </Space>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: colors.orange,
          }}
        >
          Your Trusted Partner in Engineering & Fabrication
        </Text>
      </Container>
    </Section>
  );
}
