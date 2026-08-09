"use client";

import Link from "next/link";
import { Typography, Row, Col, Card, Flex, Button, Grid } from "antd";
import { ArrowRight, Check } from "lucide-react";
import { SectionBadge, Section, Container, BackgroundSection, IconTile } from "@/components/atoms";
import { detailedServices } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

type Service = (typeof detailedServices)[number];

type ServiceDetailTemplateProps = {
  service: Service;
};

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const screens = useBreakpoint();
  const py = screens.sm ? 96 : 64;
  const otherServices = detailedServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <BackgroundSection
        image="/images/services/hero-bg.png"
        style={{ paddingBlock: py, textAlign: "center" }}
      >
        <Container size="narrow" vertical align="center" gap="small">
          <Flex gap="small" align="center">
            <Link href="/services">
              <Text style={{ color: colors.orange }}>Services</Text>
            </Link>
            <Text style={{ color: colors.neutral500 }}>/</Text>
            <Text>{service.title}</Text>
          </Flex>
          <SectionBadge>Service Detail</SectionBadge>
          <Title level={1}>{service.title}</Title>
          <Paragraph style={{ fontSize: 18, maxWidth: 720 }}>{service.description}</Paragraph>
        </Container>
      </BackgroundSection>

      <Section style={{ paddingBlock: py }}>
        <Container>
          <Row gutter={[24, 24]}>
            {service.features.map((feature) => (
              <Col key={feature.title} xs={24} sm={12} lg={8}>
                <Card style={{ height: "100%" }}>
                  <Flex vertical align="center" gap="small" style={{ textAlign: "center" }}>
                    <IconTile icon={feature.icon} size="lg" />
                    <Text strong style={{ color: colors.black }}>
                      {feature.title}
                    </Text>
                    <Paragraph style={{ fontSize: 14, color: colors.neutral500 }}>
                      {feature.description}
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section bg="light" style={{ paddingBlock: py }}>
        <Container>
          <Row gutter={[48, 32]}>
            <Col xs={24} md={12}>
              <Flex vertical gap="middle">
                <Title level={3} style={{ color: colors.black }}>
                  Best For
                </Title>
                <Flex vertical gap="small">
                  {service.bestFor.map((item) => (
                    <Flex key={item} align="start" gap="small">
                      <Check size={18} style={{ marginTop: 4, flexShrink: 0, color: colors.orange }} />
                      <Text style={{ color: colors.neutral600 }}>{item}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Col>
            <Col xs={24} md={12}>
              <Flex vertical gap="middle">
                <Title level={3} style={{ color: colors.black }}>
                  Why It Matters
                </Title>
                <Paragraph style={{ color: colors.neutral600 }}>{service.whyItMatters}</Paragraph>
              </Flex>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section style={{ paddingBlock: py }}>
        <Container vertical align="center" gap="large">
          <Title level={3} style={{ color: colors.black }}>
            Other Services
          </Title>
          <Flex wrap gap="small" justify="center">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Button>{s.title}</Button>
              </Link>
            ))}
          </Flex>
        </Container>
      </Section>

      <Section bg="black" style={{ paddingBlock: screens.sm ? 80 : 64, textAlign: "center" }}>
        <Container size="tight" vertical align="center" gap="middle">
          <Title level={2} style={{ color: colors.white }}>
            Have a project in mind?
          </Title>
          <Paragraph style={{ color: colors.neutral300 }}>
            Tell us what you&apos;re building and we&apos;ll put together a plan and pricing.
          </Paragraph>
          <Link href="/contact">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRight style={{ height: 16, width: 16 }} />}
              iconPlacement="end"
            >
              Get a Quote
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
