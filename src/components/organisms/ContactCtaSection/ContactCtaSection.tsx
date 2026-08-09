"use client";

import Link from "next/link";
import { Typography, Button, Grid } from "antd";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/atoms";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function ContactCtaSection() {
  const screens = useBreakpoint();

  return (
    <Section bg="light" style={{ paddingBlock: screens.sm ? 96 : 64, textAlign: "center" }}>
      <Container size="tight" vertical align="center" gap="middle">
        <Title level={2} style={{ color: colors.black }}>
          Have a project in mind?
        </Title>
        <Paragraph style={{ color: colors.neutral600, maxWidth: 480 }}>
          Tell us what you&apos;re building and we&apos;ll put together a plan and pricing.
        </Paragraph>
        <Link href="/contact">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRight style={{ height: 16, width: 16 }} />}
            iconPlacement="end"
          >
            Contact Us
          </Button>
        </Link>
      </Container>
    </Section>
  );
}
