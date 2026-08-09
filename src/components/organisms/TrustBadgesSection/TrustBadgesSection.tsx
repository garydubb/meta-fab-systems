"use client";

import { Typography, Row, Col } from "antd";
import { Section, Container, Reveal } from "@/components/atoms";
import { TrustBadgeItem } from "@/components/molecules";
import { trustBadges, siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;

export default function TrustBadgesSection() {
  return (
    <Section bg="black" style={{ paddingBlock: 48 }}>
      <Container vertical gap="large">
        <Row gutter={[32, 32]}>
          {trustBadges.map((badge, i) => (
            <Col key={badge.title} xs={12} sm={6}>
              <Reveal delay={i * 80}>
                <TrustBadgeItem title={badge.title} icon={badge.icon} />
              </Reveal>
            </Col>
          ))}
        </Row>
        <Text style={{ textAlign: "center", fontFamily: "var(--font-heading)", fontSize: 18, color: colors.orange }}>
          {siteInfo.motto}
        </Text>
      </Container>
    </Section>
  );
}
