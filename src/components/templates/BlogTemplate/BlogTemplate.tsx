"use client";

import { Typography, Grid } from "antd";
import { SectionBadge, Container, BackgroundSection } from "@/components/atoms";
import { BlogListSection } from "@/components/organisms";
import { blogIntro } from "@/lib/content";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function BlogTemplate() {
  const screens = useBreakpoint();
  const py = screens.sm ? 96 : 64;

  return (
    <>
      <BackgroundSection
        image="/images/services/hero-bg.png"
        style={{ paddingBlock: py, textAlign: "center" }}
      >
        <Container size="narrow" vertical align="center" gap="small">
          <SectionBadge>{blogIntro.kicker}</SectionBadge>
          <Title level={1}>{blogIntro.title}</Title>
          <Paragraph style={{ fontSize: 18 }}>{blogIntro.body}</Paragraph>
        </Container>
      </BackgroundSection>

      <BlogListSection />
    </>
  );
}
