"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography, Row, Col, Button, Flex, Grid } from "antd";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SectionBadge, Section, Container, BackgroundSection, Reveal } from "@/components/atoms";
import { BlogCard } from "@/components/molecules";
import { blogPosts } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

type BlogPost = (typeof blogPosts)[number];

type BlogPostTemplateProps = {
  post: BlogPost;
};

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const screens = useBreakpoint();
  const py = screens.sm ? 96 : 64;
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const formattedDate = new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <BackgroundSection
        image="/images/services/hero-bg.png"
        style={{ paddingBlock: py, textAlign: "center" }}
      >
        <Container size="narrow" vertical align="center" gap="small">
          <Flex gap="small" align="center">
            <Link href="/blog">
              <Text style={{ color: colors.orange }}>Blog</Text>
            </Link>
            <Text style={{ color: colors.neutral500 }}>/</Text>
            <Text>{post.title}</Text>
          </Flex>
          <SectionBadge>{post.category}</SectionBadge>
          <Title level={1}>{post.title}</Title>
          <Flex align="center" gap="middle">
            <Flex align="center" gap={6}>
              <Calendar size={16} style={{ color: colors.neutral500 }} />
              <Text style={{ fontSize: 14, color: colors.neutral500 }}>{formattedDate}</Text>
            </Flex>
            <Flex align="center" gap={6}>
              <Clock size={16} style={{ color: colors.neutral500 }} />
              <Text style={{ fontSize: 14, color: colors.neutral500 }}>{post.readTime}</Text>
            </Flex>
          </Flex>
        </Container>
      </BackgroundSection>

      <Section style={{ paddingBlock: py }}>
        <Container size="narrow" vertical gap="large">
          <Flex
            style={{
              position: "relative",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              style={{ objectFit: "cover" }}
              priority
            />
          </Flex>

          <Flex vertical gap="large">
            {post.sections.map((section, i) => (
              <Flex key={section.heading ?? `intro-${i}`} vertical gap="small">
                {section.heading && (
                  <Title level={3} style={{ color: colors.black }}>
                    {section.heading}
                  </Title>
                )}
                <Paragraph style={{ fontSize: 16, color: colors.neutral600 }}>
                  {section.body}
                </Paragraph>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Section>

      {otherPosts.length > 0 && (
        <Section bg="light" style={{ paddingBlock: py }}>
          <Container>
            <Title level={3} style={{ color: colors.black, marginBottom: 32, textAlign: "center" }}>
              More From the Blog
            </Title>
            <Row gutter={[24, 24]}>
              {otherPosts.map((p, i) => (
                <Col key={p.slug} xs={24} sm={12} lg={8}>
                  <Reveal delay={i * 80}>
                    <BlogCard
                      slug={p.slug}
                      title={p.title}
                      excerpt={p.excerpt}
                      category={p.category}
                      coverImage={p.coverImage}
                      publishedAt={p.publishedAt}
                      readTime={p.readTime}
                    />
                  </Reveal>
                </Col>
              ))}
            </Row>
          </Container>
        </Section>
      )}

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
