"use client";

import { Row, Col, Grid } from "antd";
import { Section, Container, Reveal } from "@/components/atoms";
import { BlogCard } from "@/components/molecules";
import { blogPosts } from "@/lib/content";

const { useBreakpoint } = Grid;

export default function BlogListSection() {
  const screens = useBreakpoint();

  return (
    <Section style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container>
        <Row gutter={[24, 24]}>
          {blogPosts.map((post, i) => (
            <Col key={post.slug} xs={24} sm={12} lg={8}>
              <Reveal delay={(i % 3) * 80}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  coverImage={post.coverImage}
                  publishedAt={post.publishedAt}
                  readTime={post.readTime}
                />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
