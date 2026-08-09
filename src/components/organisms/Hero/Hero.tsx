"use client";

import Image from "next/image";
import { Typography, Button, Row, Col, Space, Flex, Grid } from "antd";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/atoms";
import { siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const heroImage = "/images/hero/engineering.jpg";

export default function Hero() {
  const screens = useBreakpoint();

  return (
    <Section id="home" bg="white">
      <Container style={{ paddingBlock: screens.lg ? 96 : 64 }}>
        <Row gutter={[40, 40]} align="top">
          <Col xs={24} lg={12}>
            <Flex vertical gap="large">
              <Text
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: colors.orange,
                }}
              >
                {siteInfo.heroKicker}
              </Text>
              <Title level={1} style={{ color: colors.black }}>
                {siteInfo.tagline[0]}
                <br />
                <span style={{ color: colors.orange }}>{siteInfo.tagline[1]}</span>
              </Title>
              <Paragraph style={{ maxWidth: 576, fontSize: 18, color: colors.neutral600 }}>
                {siteInfo.subheading}
              </Paragraph>
              <Space size="middle" wrap>
                <a href="#contact">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRight style={{ height: 16, width: 16 }} />}
                    iconPlacement="end"
                  >
                    Get a Quote
                  </Button>
                </a>
                <a href="/services">
                  <Button size="large">Our Services</Button>
                </a>
              </Space>
            </Flex>
          </Col>

          <Col xs={24} lg={12}>
            <Flex style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: 8 }}>
              <Image
                src={heroImage}
                alt="Precision mechanical gear and engineering tools"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Flex>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
