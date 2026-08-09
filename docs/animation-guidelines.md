# Animation Guidelines

These are the conventions actually in use across the site (`globals.css`, `Reveal`, `GalleryTile`). Follow them when adding new motion instead of inventing new timing/easing values — consistency matters more than any single value being "more correct."

## 1. Two motion categories, nothing else

- **Hover / focus micro-interactions** — instant feedback on interactive elements (cards, tiles, buttons).
- **Scroll-triggered reveal** — one-shot fade+slide when content enters the viewport (`Reveal` atom).

Don't add a third category (looping/ambient animation, autoplay carousels, parallax beyond the gallery) without checking with the team first — it's easy for an industrial/engineering brand to tip into feeling gimmicky.

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

## 5. Defaults when in doubt

| Situation | Duration | Easing | Property |
|---|---|---|---|
| Card/button hover | 300ms | `ease` | `border-color`, `box-shadow`, `transform: translateY(-4px)` |
| Small icon/badge reveal on hover | 300ms | `ease` | `opacity`, `transform` |
| Image zoom on hover | 500ms | `ease` | `transform: scale(1.05–1.1)` |
| Scroll-in reveal | 600ms | `ease` | `opacity`, `transform: translateY` |

If a new situation doesn't map cleanly onto one of these, treat it as a hover interaction (300ms) unless it's genuinely "heavier" content like an image (500ms).
