"use client";

import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;

const MIN_VISIBLE_MS = 500;

// Shown once per hard page load (mounted at the app root, which persists
// across client-side route changes) — not re-triggered by <Link> navigation.
export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();

    function reveal() {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => setLoaded(true), remaining);
    }

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal);
      return () => window.removeEventListener("load", reveal);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timeout = window.setTimeout(() => setHidden(true), 500);
    return () => window.clearTimeout(timeout);
  }, [loaded]);

  if (hidden) return null;

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: colors.black,
        opacity: loaded ? 0 : 1,
        pointerEvents: loaded ? "none" : "auto",
        transition: "opacity 0.5s ease",
      }}
      aria-hidden={loaded}
    >
      <Flex vertical align="center" gap="middle">
        <Flex align="center" justify="center" className="preloader-ring">
          <Text
            style={{
              display: "flex",
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              fontFamily: "var(--font-heading)",
              fontSize: 20,
              backgroundColor: colors.orange,
              color: colors.black,
            }}
          >
            MF
          </Text>
        </Flex>
        <Flex className="preloader-bar">
          <Flex className="preloader-bar-fill" />
        </Flex>
      </Flex>
    </Flex>
  );
}
