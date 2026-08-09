# Animation Guidelines

These are the conventions actually in use across the site (`globals.css`, `Reveal`, `GalleryTile`). Follow them when adding new motion instead of inventing new timing/easing values — consistency matters more than any single value being "more correct."

## 1. Three motion categories, nothing else

- **Hover / focus micro-interactions** — instant feedback on interactive elements (cards, tiles, buttons).
- **Scroll-triggered reveal** — one-shot fade+slide when content enters the viewport (`Reveal` atom).
- **Preloader** — a one-time loading state on hard page loads only (`Preloader` atom). See §5.

Don't add a fourth category (looping/ambient background animation, autoplay carousels, parallax beyond the gallery) without checking with the team first — it's easy for an industrial/engineering brand to tip into feeling gimmicky.

## 2. Hover / focus interactions

Use the shared `.interactive-card` class (`globals.css`) for any card that should feel clickable/hoverable:

```css
transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
/* on hover/focus-within */
border-color: rgba(241, 90, 36, 0.5); /* orange, 50% */
box-shadow: 0 12px 24px rgba(10, 10, 10, 0.08);
transform: translateY(-4px);
```

- **Duration: 300ms, easing: `ease`.** Every hover transition in the codebase uses this — don't introduce `ease-in-out`, spring easing, or a different duration for a "one-off" card.
- **Lift, don't scale, whole cards.** `translateY(-4px)` reads as "raised," `scale()` on a card with text reads as glitchy at small deltas. Reserve `scale()` for images (see below).
- Always pair `:hover` with `:focus-within` (or `:focus` on the element itself) — hover-only interactivity is invisible to keyboard users. See `GalleryTile`/`TrustBadgeItem` for the pattern.
- Small reveal-on-hover elements (e.g. the gallery arrow badge) use `transform + opacity`, 300ms ease, starting from a slightly offset/scaled-down state.

Image zoom (used on `GalleryTile`) is the one exception with a different duration:

```css
transition: transform 0.5s ease;
/* on hover */
transform: scale(1.08);
```

500ms because images read as "heavier" content than a border/shadow change — a 300ms zoom feels abrupt. Cap the scale around `1.05`–`1.1`; anything more looks like a bug, not a zoom.

## 3. Scroll-triggered reveal

Use the `Reveal` atom, not a new IntersectionObserver or animation library. It fades+slides content in once, on first entry into the viewport:

```
opacity 0 → 1, translateY(24px) → 0, over 600ms ease
```

- Stagger grids with `delay={i * 80}` (or `delay={(i % columns) * 80}` for wrapping grids) — 80ms between items reads as a deliberate cascade without feeling slow.
- It's one-shot (`observer.disconnect()` after first trigger) — don't make reveals repeat on scroll up/down, it's distracting on a content-heavy site like this one.
- Already respects `prefers-reduced-motion: reduce` (skips straight to the visible state). Any new scroll/hover animation must do the same — check `window.matchMedia("(prefers-reduced-motion: reduce)")` before wiring up anything JS-driven; CSS-only transitions get this for free only if you also add the media query (see `GalleryTile`'s parallax `useEffect` for the JS pattern).

## 4. Scroll-linked parallax — gallery only, for now

`GalleryTile` drives an image's vertical offset from Lenis scroll position (`getLenis()`), capped at `MAX_OFFSET_PERCENT = 12`. This is the only scroll-linked (as opposed to scroll-triggered) effect on the site. Don't reach for scroll-linked transforms elsewhere without a specific reason — they're more expensive to get right (jank, reduced-motion, SSR) than a `Reveal`.

## 5. Preloader

`Preloader` (mounted once in `app/layout.tsx`, alongside `SmoothScroll`) is the only looping animation on the site, and it's scoped deliberately narrow:

- **Fires once per hard page load, not per route.** It lives in the root layout, which persists across client-side `<Link>` navigation in the App Router — so it shows on a fresh browser load/refresh, never when clicking between pages.
- **Minimum visible time of 500ms**, then fades out over 500ms once `window.load` fires — long enough to avoid a jarring flash on fast loads, short enough not to feel like a fake gate.
- Ring spinner (`preloader-spin`, 0.9s linear infinite) + sweep bar (`preloader-sweep`, 1.1s ease-in-out infinite) around the `MF` mark, on the brand black background.
- Looping animation is normally off-limits per §1 — this is the one sanctioned exception, because it's bounded (always ends, never idles indefinitely) and scoped to a single moment (initial load) rather than being ambient/background motion during use.
- Respects `prefers-reduced-motion: reduce` by disabling the spin/sweep keyframes (`@media (prefers-reduced-motion: reduce)` in `globals.css`) — the overlay still shows/fades on the same timing, just without the animation.

## 6. Defaults when in doubt

| Situation | Duration | Easing | Property |
|---|---|---|---|
| Card/button hover | 300ms | `ease` | `border-color`, `box-shadow`, `transform: translateY(-4px)` |
| Small icon/badge reveal on hover | 300ms | `ease` | `opacity`, `transform` |
| Image zoom on hover | 500ms | `ease` | `transform: scale(1.05–1.1)` |
| Scroll-in reveal | 600ms | `ease` | `opacity`, `transform: translateY` |

If a new situation doesn't map cleanly onto one of these, treat it as a hover interaction (300ms) unless it's genuinely "heavier" content like an image (500ms).
