"use client";

import { Typography, Collapse, Flex, Grid } from "antd";
import { SectionBadge, Section, Container } from "@/components/atoms";
import { faqs } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function FaqSection() {
  const screens = useBreakpoint();

  return (
    <Section bg="white" style={{ paddingBlock: screens.sm ? 96 : 64 }}>
      <Container size="tight">
        <Flex vertical align="center" gap="small" style={{ marginBottom: 40, textAlign: "center" }}>
          <SectionBadge>FAQs</SectionBadge>
          <Title level={2} style={{ color: colors.black }}>
            Frequently Asked Questions
          </Title>
        </Flex>

        <Collapse
          bordered={false}
          expandIconPosition="end"
          defaultActiveKey={[faqs[0].question]}
          style={{ backgroundColor: "transparent" }}
          items={faqs.map((faq) => ({
            key: faq.question,
            label: (
              <Typography.Text strong style={{ color: colors.black }}>
                {faq.question}
              </Typography.Text>
            ),
            children: (
              <Typography.Paragraph style={{ margin: 0, color: colors.neutral600 }}>
                {faq.answer}
              </Typography.Paragraph>
            ),
            style: {
              marginBottom: 12,
              borderRadius: 12,
              border: `1px solid ${colors.neutral200}`,
              backgroundColor: colors.neutral50,
            },
          }))}
        />
      </Container>
    </Section>
  );
}
