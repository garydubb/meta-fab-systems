"use client";

import Link from "next/link";
import { Layout, Typography, Flex, Grid } from "antd";
import { Container, Logo } from "@/components/atoms";
import { SocialLinks } from "@/components/molecules";
import { contact, navLinks, siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Footer } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function SiteFooter() {
  const screens = useBreakpoint();
  const row = Boolean(screens.sm);

  return (
    <Footer style={{ backgroundColor: colors.black }}>
      <Container>
        <Flex
          align="center"
          justify={row ? "space-between" : "center"}
          gap="middle"
          vertical={!row}
        >
          <Logo inverted />

          <Flex align="center" gap="large" wrap justify="center">
            <Text style={{ fontSize: 14, color: colors.neutral300 }}>{contact.officePhone}</Text>
            <SocialLinks inverted />
          </Flex>
        </Flex>

        <Flex
          wrap
          align="center"
          justify="center"
          gap="large"
          style={{
            marginTop: 24,
            borderTop: `1px solid ${colors.neutral800}`,
            paddingTop: 24,
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </Flex>

        <Flex
          justify="center"
          style={{
            marginTop: 24,
            borderTop: `1px solid ${colors.neutral800}`,
            paddingTop: 24,
            textAlign: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: colors.neutral500 }}>
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Footer>
  );
}
