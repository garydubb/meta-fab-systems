"use client";

import Section from "@/components/atoms/Section/Section";

type BackgroundSectionProps = {
  image: string;
  overlay?: string;
  id?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// A <Section> with a cover background image and a flat color overlay on top
// (for text contrast). Centralizes the "linear-gradient(overlay, overlay),
// url(image)" pattern so any section that needs an image background uses
// the same recipe instead of repeating it inline.
export default function BackgroundSection({
  image,
  overlay = "rgba(255, 255, 255, 0.88)",
  id,
  style,
  children,
}: BackgroundSectionProps) {
  return (
    <Section
      id={id}
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    >
      {children}
    </Section>
  );
}
