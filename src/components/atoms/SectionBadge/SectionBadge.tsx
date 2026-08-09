"use client";

import { Tag } from "antd";

type SectionBadgeProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export default function SectionBadge({ children, dark = false }: SectionBadgeProps) {
  return (
    <Tag
      style={{
        borderRadius: 999,
        border: 0,
        paddingInline: 16,
        paddingBlock: 4,
        fontSize: 14,
        fontWeight: 600,
      }}
      color={dark ? "#0a0a0a" : "#f15a24"}
    >
      {children}
    </Tag>
  );
}
