"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/lenis";

// Owns the whole page's scroll physics. Also re-wires in-page anchor links
// (nav's #services/#gallery/#contact hrefs) through Lenis's own scrollTo —
// Lenis intercepts the wheel/touch scroll loop, so the browser's native
// hash-jump no longer fires on its own once this is mounted.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenis);

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    function handleAnchorClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest("a[href*='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex);
      const onSamePage = path === "" || path === window.location.pathname;
      if (!onSamePage || hash.length < 2) return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(frameId);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
