"use client";

import Link from "next/link";
import { Layout, Menu, Typography, Flex, Grid } from "antd";
import { Container, Logo } from "@/components/atoms";
import { contact, navLinks, siteInfo } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Footer } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function SiteFooter() {
  const screens = useBreakpoint();
  const row = Boolean(screens.sm);

  const items = navLinks.map((link) => ({
    key: link.href,
    label: <Link href={link.href}>{link.label}</Link>,
  }));

  return (
    <Footer style={{ backgroundColor: colors.black }}>
      <Container>
        <Flex
          align="center"
          justify={row ? "space-between" : undefined}
          gap="middle"
          vertical={!row}
        >
          <Logo inverted />

          <Menu
            mode="horizontal"
            theme="dark"
            items={items}
            selectable={false}
            style={{ border: 0, background: "transparent" }}
          />

          <Text style={{ fontSize: 14, color: colors.neutral300 }}>{contact.officePhone}</Text>
        </Flex>

        <Flex
          justify="center"
          style={{
            marginTop: 32,
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
