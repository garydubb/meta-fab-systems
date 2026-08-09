"use client";

import { Flex } from "antd";
import { colors } from "@/lib/theme/colors";

type SectionProps = {
  bg?: "black" | "light" | "white" | "none";
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
};

const bgMap: Record<NonNullable<SectionProps["bg"]>, React.CSSProperties> = {
  black: { backgroundColor: colors.black, color: colors.white },
  light: { backgroundColor: colors.neutral50 },
  white: { backgroundColor: colors.white },
  none: {},
};

// Project's own <section> primitive — renders a real semantic <section> tag
// (via Flex's `component` prop) instead of hand-written JSX, so page
// background variants stay centralized to one small map.
export default function Section({
  bg = "none",
  style,
  id,
  children,
}: SectionProps) {
  return (
    <Flex component="section" id={id} vertical style={{ ...bgMap[bg], ...style }}>
      {children}
    </Flex>
  );
}
