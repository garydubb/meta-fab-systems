"use client";

import { useEffect, useRef, useState } from "react";
import { Flex } from "antd";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
};

// Fades + slides content in once it scrolls into view. Plain IntersectionObserver
// rather than a full animation library — this project only needs a one-shot
// reveal-on-scroll, not timeline/keyframe control.
export default function Reveal({ children, delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Flex
      ref={ref}
      vertical
      style={{
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Flex>
  );
}
