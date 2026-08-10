"use client";

import { Layout, Button, Flex, Grid } from "antd";
import { Phone } from "lucide-react";
import { Container, Logo } from "@/components/atoms";
import { NavMenu, MobileNavDrawer } from "@/components/molecules";
import { contact } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Header } = Layout;
const { useBreakpoint } = Grid;

export default function SiteHeader() {
  const screens = useBreakpoint();

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.neutral200}`,
      }}
    >
      <Container vertical={false} align="center" justify="space-between" gap="middle">
        <Logo />

        {screens.md && (
          <Flex style={{ flex: 1 }}>
            <NavMenu />
          </Flex>
        )}

        <Flex align="center" gap="small">
          <a href={`tel:${contact.officePhone.replace(/\s/g, "")}`}>
            {screens.sm ? (
              <Button type="primary" icon={<Phone style={{ height: 16, width: 16 }} />}>
                {contact.officePhone}
              </Button>
            ) : (
              <Button
                type="primary"
                size="large"
                icon={<Phone style={{ height: 18, width: 18 }} />}
                shape="circle"
                aria-label={`Call ${contact.officePhone}`}
                style={{ height: 44, width: 44 }}
              />
            )}
          </a>

          <MobileNavDrawer />
        </Flex>
      </Container>
    </Header>
  );
}
