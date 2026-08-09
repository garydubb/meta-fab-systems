"use client";

import { Flex, Grid } from "antd";
import type { FlexProps } from "antd";

const { useBreakpoint } = Grid;

type ContainerProps = {
  size?: "default" | "narrow" | "tight";
  vertical?: boolean;
  align?: FlexProps["align"];
  justify?: FlexProps["justify"];
  gap?: FlexProps["gap"];
  wrap?: FlexProps["wrap"];
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
};

const maxWidthMap = {
  default: 1280,
  narrow: 768,
  tight: 672,
};

// Centralizes the repeated max-width + centered + padded wrapper — AntD has
// no width-constraint component of its own, so this is the project's own
// container primitive, built on top of Flex.
export default function Container({
  size = "default",
  vertical = true,
  align,
  justify,
  gap,
  wrap,
  style,
  id,
  children,
}: ContainerProps) {
  const screens = useBreakpoint();
  const paddingInline = screens.lg ? 32 : screens.sm ? 24 : 16;

  return (
    <Flex
      id={id}
      vertical={vertical}
      align={align}
      justify={justify}
      gap={gap}
      wrap={wrap}
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: maxWidthMap[size],
        paddingInline,
        ...style,
      }}
    >
      {children}
    </Flex>
  );
}
