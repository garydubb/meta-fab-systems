"use client";

import { Typography, Row, Col, Flex, Grid } from "antd";
import { SectionBadge, Section, Container, Reveal } from "@/components/atoms";
import { ServiceCard } from "@/components/molecules";
import { services } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function ServicesSection() {
  const screens = useBreakpoint();

  return (
    <Section id="services" bg="light" style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container>
        <Flex vertical align="center" gap="small" style={{ marginBottom: 48, textAlign: "center" }}>
          <SectionBadge>Our Services</SectionBadge>
          <Title level={2} style={{ color: colors.black }}>
            Engineering & Fabrication, Under One Roof
          </Title>
        </Flex>

        <Row gutter={[16, 16]}>
          {services.map((service, i) => (
            <Col key={service.title} xs={12} sm={12} md={6}>
              <Reveal delay={(i % 4) * 80}>
                <ServiceCard title={service.title} icon={service.icon} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
