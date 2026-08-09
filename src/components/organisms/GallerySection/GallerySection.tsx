"use client";

import { Typography, Row, Col, Flex, Grid } from "antd";
import { SectionBadge, Section, Container, Reveal } from "@/components/atoms";
import { GalleryTile } from "@/components/molecules";
import { galleryItems } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function GallerySection() {
  const screens = useBreakpoint();

  return (
    <Section id="gallery" style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container>
        <Flex vertical align="center" gap="small" style={{ marginBottom: 48, textAlign: "center" }}>
          <SectionBadge dark>Our Work</SectionBadge>
          <Title level={2} style={{ color: colors.black }}>
            From Concept to Creation
          </Title>
          <Paragraph style={{ margin: "0 auto", maxWidth: 576, fontSize: 14, color: colors.neutral500 }}>
            Stock photography shown for now — swap in real project photos once available.
          </Paragraph>
        </Flex>

        <Row gutter={[16, 16]}>
          {galleryItems.map((item, i) => (
            <Col key={item.label} xs={24} sm={12} lg={6}>
              <Reveal delay={(i % 4) * 80}>
                <GalleryTile label={item.label} image={item.image} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
