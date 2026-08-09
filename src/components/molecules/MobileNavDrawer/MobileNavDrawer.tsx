"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu, Button, Grid } from "antd";
import { Menu as MenuIcon } from "lucide-react";
import { navLinks } from "@/lib/content";

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
  }));

  if (screens.md) return null;

  return (
    <>
      <Button
        type="text"
        icon={<MenuIcon style={{ height: 20, width: 20 }} />}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu mode="vertical" items={items} selectable={false} />
      </Drawer>
    </>
  );
}
