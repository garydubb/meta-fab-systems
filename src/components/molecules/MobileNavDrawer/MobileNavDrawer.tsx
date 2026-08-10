"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu, Button, Flex, Grid } from "antd";
import { Menu as MenuIcon, Phone } from "lucide-react";
import { Logo } from "@/components/atoms";
import { navLinks, contact } from "@/lib/content";

const { useBreakpoint } = Grid;

export default function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const items = navLinks.map((link) => ({
    key: link.href,
    label: (
      <Link href={link.href} onClick={() => setOpen(false)}>
        {link.label}
      </Link>
    ),
    style: { fontSize: 16 },
  }));

  if (screens.md) return null;

  return (
    <>
      <Button
        type="text"
        size="large"
        icon={<MenuIcon style={{ height: 22, width: 22 }} />}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        style={{ height: 44, width: 44 }}
      />
      <Drawer
        title={<Logo />}
        placement="right"
        width={300}
        closable={{ placement: "end" }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Flex vertical justify="space-between" style={{ height: "100%" }}>
          <Menu mode="vertical" items={items} selectable={false} style={{ border: 0 }} />

          <a href={`tel:${contact.officePhone.replace(/\s/g, "")}`}>
            <Button
              type="primary"
              size="large"
              block
              icon={<Phone style={{ height: 16, width: 16 }} />}
            >
              Call {contact.officePhone}
            </Button>
          </a>
        </Flex>
      </Drawer>
    </>
  );
}
