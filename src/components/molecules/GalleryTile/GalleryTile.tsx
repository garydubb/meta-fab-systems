"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Typography, Flex } from "antd";
import { getLenis } from "@/lib/lenis";

const { Text } = Typography;

type GalleryTileProps = {
  label: string;
  image: string;
};

const MAX_OFFSET_PERCENT = 12;

export default function GalleryTile({ label, image }: GalleryTileProps) {
  const tileRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    function updateParallax() {
      const tile = tileRef.current;
      const imageWrap = imageWrapRef.current;
      if (!tile || !imageWrap) return;

      const rect = tile.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const tileCenter = rect.top + rect.height / 2;
      const distanceRatio = (tileCenter - viewportCenter) / (window.innerHeight / 2 + rect.height / 2);
      const offset = Math.max(-1, Math.min(1, distanceRatio)) * MAX_OFFSET_PERCENT;

      imageWrap.style.transform = `translateY(${offset}%)`;
    }

    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", updateParallax);
    } else {
      window.addEventListener("scroll", updateParallax, { passive: true });
    }
    updateParallax();

    return () => {
      if (lenis) lenis.off("scroll", updateParallax);
      else window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <Flex ref={tileRef} className="gallery-tile">
      <Flex ref={imageWrapRef} className="gallery-tile-image-wrap">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="gallery-tile-image"
        />
      </Flex>
      <Flex className="gallery-tile-overlay" />
      <Text className="gallery-tile-label">{label}</Text>
    </Flex>
  );
}
