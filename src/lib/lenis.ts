import type Lenis from "lenis";

// Lenis is created once in <SmoothScroll> (mounted at the app root). Anything
// that wants to hook into its scroll events — like the gallery's parallax —
// reads the same instance from here instead of creating a second one.
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}
