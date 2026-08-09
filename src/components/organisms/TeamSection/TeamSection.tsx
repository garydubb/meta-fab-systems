"use client";

import { Typography, Row, Col, Flex, Grid } from "antd";
import { SectionBadge, Section, Container, Reveal } from "@/components/atoms";
import { TeamMemberCard } from "@/components/molecules";
import { team } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function TeamSection() {
  const screens = useBreakpoint();

  return (
    <Section bg="light" style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container>
        <Flex vertical align="center" gap="small" style={{ marginBottom: 48, textAlign: "center" }}>
          <SectionBadge>Our Team</SectionBadge>
          <Title level={2} style={{ color: colors.black }}>
            The People Behind the Work
          </Title>
          <Paragraph style={{ margin: "0 auto", maxWidth: 576, color: colors.neutral600 }}>
            A focused team covering design, fabrication, and installation — every project stays in-house from
            first sketch to final handover.
          </Paragraph>
        </Flex>

        <Row gutter={[24, 24]}>
          {team.map((member, i) => (
            <Col key={member.role} xs={24} sm={12} lg={6}>
              <Reveal delay={i * 80}>
                <TeamMemberCard role={member.role} icon={member.icon} description={member.description} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
