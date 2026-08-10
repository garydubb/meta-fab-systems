"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Typography, Tag, Flex } from "antd";
import { Calendar, Clock } from "lucide-react";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph, Text } = Typography;

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readTime,
}: BlogCardProps) {
  const formattedDate = new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <Card
        className="interactive-card"
        style={{ height: "100%", overflow: "hidden" }}
        styles={{ body: { padding: 20 } }}
        cover={
          <Flex style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Flex>
        }
      >
        <Flex vertical gap="small">
          <Tag
            style={{
              alignSelf: "flex-start",
              margin: 0,
              borderRadius: 999,
              borderColor: colors.orangeBorder,
              backgroundColor: colors.orangeSoft,
              color: colors.orange,
            }}
          >
            {category}
          </Tag>
          <Title level={5} style={{ color: colors.black, margin: 0 }}>
            {title}
          </Title>
          <Paragraph style={{ fontSize: 14, color: colors.neutral500, margin: 0 }}>
            {excerpt}
          </Paragraph>
          <Flex align="center" gap="middle" style={{ marginTop: 4 }}>
            <Flex align="center" gap={6}>
              <Calendar size={14} style={{ color: colors.neutral500 }} />
              <Text style={{ fontSize: 13, color: colors.neutral500 }}>{formattedDate}</Text>
            </Flex>
            <Flex align="center" gap={6}>
              <Clock size={14} style={{ color: colors.neutral500 }} />
              <Text style={{ fontSize: 13, color: colors.neutral500 }}>{readTime}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}
