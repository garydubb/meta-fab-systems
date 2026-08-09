"use client";

import Link from "next/link";
import { Menu } from "antd";
import { navLinks } from "@/lib/content";

type NavMenuProps = {
  theme?: "light" | "dark";
};

export default function NavMenu({ theme = "light" }: NavMenuProps) {
  const items = navLinks.map((link) => ({
    key: link.href,
    label: <Link href={link.href}>{link.label}</Link>,
  }));

  return (
    <Menu
      mode="horizontal"
      theme={theme}
      items={items}
      selectable={false}
      style={{ minWidth: 0, flex: 1, justifyContent: "center", border: 0, background: "transparent" }}
    />
  );
}
