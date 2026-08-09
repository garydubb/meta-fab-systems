"use client";

import { Typography, Row, Col, Flex, Grid } from "antd";
import { Section, Container, Reveal } from "@/components/atoms";
import { TrustBadgeItem } from "@/components/molecules";
import { trustBadges, siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function TrustBadgesSection() {
  const screens = useBreakpoint();

  return (
    <Section bg="light" style={{ paddingBlock: screens.sm ? 80 : 56 }}>
      <Container vertical gap="large">
        <Row gutter={[24, 24]}>
          {trustBadges.map((badge, i) => (
            <Col key={badge.title} xs={12} sm={6}>
              <Reveal delay={i * 80}>
                <TrustBadgeItem title={badge.title} icon={badge.icon} />
              </Reveal>
            </Col>
          ))}
        </Row>
        <Flex
          justify="center"
          style={{ borderTop: `1px solid ${colors.neutral200}`, paddingTop: 32 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "var(--font-heading)",
              fontSize: 18,
              color: colors.orange,
            }}
          >
            {siteInfo.motto}
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
