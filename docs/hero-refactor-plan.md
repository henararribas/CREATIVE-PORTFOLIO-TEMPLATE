# Hero Section Refactor Plan

## Summary
Refactor the hero section to introduce an animated gradient background, a micro animation for the primary button, and a fixed/accessible scroll-to-next button. Deliverables include CSS and small JS changes plus a final report in `docs/hero-refactor-report.md` documenting implementation, testing results and screenshots.

## Goals
- Create a smooth, modern animated gradient background that performs well and respects prefers-reduced-motion.
- Add a subtle micro interaction on the primary hero CTA (button) to increase affordance and polish.
- Fix the scroll indicator/button so it is accessible, keyboard operable, and reliably scrolls to the next section with graceful reduced-motion handling.
- Improve visual polish toward an Awwwards-quality design while keeping performance and accessibility.

## Acceptance Criteria
- Animated gradient runs smoothly on modern browsers and falls back to a static attractive gradient on unsupported browsers.
- Button has a subtle micro animation on hover/focus and a tactile press state.
- Scroll button is a semantic `<button>` with `aria-label`, keyboard focusable, and scrolls to the next content section. If user prefers reduced motion, scrolling is instant.
- All changes pass basic accessibility checks: color contrast, focus visibility, and respects `prefers-reduced-motion`.

## Files to modify
- `assets/css/layout.css` (hero rules + new utility styles)
- `index.html` (hero markup: ensure `.hero-bg`, `.hero-content`, use semantic scroll button)
- `assets/js/main.js` (small helper for scroll button + reduced-motion detection)
- `docs/hero-refactor-report.md` (create after implementation)

## Implementation plan (high level)
1. Update hero markup in `index.html`: ensure hero background element exists (e.g. `<div class="hero-bg parallax-bg"></div>`), convert current scroll indicator into a semantic `<button class="scroll-to-next" aria-label="Scroll to next section">` and place it at bottom of hero.
2. Add animated gradient CSS to `assets/css/layout.css` under the hero section. Use a performant technique:
   - Put animated gradient on a pseudo-element (`.hero::before`) or `.hero-bg` with `background-size: 200% 200%` and `@keyframes gradientShift` animating `background-position` (or, where supported, `animation-timeline: scroll(root)` for parallax mix).
   - Respect `@media (prefers-reduced-motion: reduce)` to pause animations and use a static gradient.
3. Enhance `.btn` with a micro-animation:
   - Add a subtle transform/scale + highlight sweep via `::after` pseudo-element on hover/focus.
   - Keep animation short and disable or reduce for reduced-motion.
4. Implement scroll button behavior in `assets/js/main.js`:
   - Add a click handler for `.scroll-to-next` that finds the next `.section` after `.hero` and calls `scrollIntoView({ behavior: smoothOrAuto })` where `smoothOrAuto` respects prefers-reduced-motion.
   - Add keyboard enter/space handling and set `type="button"` on the element.
5. Test across viewports, verify performance with Lighthouse, check accessibility: color contrast, keyboard navigation, reduced motion behavior.

## Awwwards-level additions (recommendations)
- Micro-interactions: animated SVG logos, subtle hover micro-transitions, attention to easing and timing.
- Typographic scale and whitespace: richer type scale, variable fonts for subtle weight transitions.
- High-quality hero media: optimized hero illustration or short muted video (autoplay) with poster fallback and lazy preload.
- Motion design system: consistent easing tokens, durations, and meaningful motion use (entrance, hover, focus).
- Visual depth: layered elements, soft shadows, blur layers and blend modes to add richness.
- Progressive enhancement: WebGL/Three.js or shaders for interactive hero (optional progressive fallback).
- Performance engineering: critical CSS, image optimization, preconnect, preload hero assets.
- Delight: custom cursor, interactive scroll reveal, animated masking of hero imagery.

## Accessibility & Performance notes
- Always respect `prefers-reduced-motion` and provide immediate alternatives.
- Ensure minimum contrast ratios for text over gradients; use overlay scrim if necessary.
- Keep CSS animations on transform/opacity; avoid layout-triggering properties.
- Test on low-end devices and limit animation work (use will-change sparingly).

## Tasks & Timeline (suggested)
- Day 1: Update markup + basic CSS animated gradient + reduced-motion support.
- Day 2: Button micro-animation + scroll button JS + accessibility tweaks.
- Day 3: Visual polish, performance testing, create final report.

## Testing checklist
- [ ] Gradient animation runs on Chrome/Edge/Firefox (where supported).
- [ ] Reduced motion toggles disable animations.
- [ ] Button hover/focus micro-animation works and is keyboard accessible.
- [ ] Scroll-to-next button scrolls correctly (and instant if reduced motion).
- [ ] Lighthouse perf score does not regress significantly.

## Prompts for the assistant to execute the work
Use these literal prompts (copy-paste) to ask the assistant to perform each step. They are written so the assistant can run deterministic edits.

1) Update hero markup in `index.html`:

"Edit `index.html`: replace the existing hero markup with a semantic structure including a `.hero-bg` element and a semantic scroll button. Ensure the scroll button has `class="scroll-to-next"`, `type="button"`, and `aria-label="Scroll to next section"`. Keep existing content inside `.hero-content`."

2) Add animated gradient and button micro-animation to `assets/css/layout.css`:

"Edit `assets/css/layout.css`: under the Hero Section, add an animated gradient (using `background-size: 200% 200%` and `@keyframes gradientShift` animating `background-position`) applied to `.hero-bg` or `.hero::before`. Add CSS for `.btn` micro-animation using a `::after` sweep and a subtle scale on hover/focus. Include `@media (prefers-reduced-motion: reduce)` overrides to disable these animations."

3) Fix the scroll button behavior in `assets/js/main.js`:

"Edit `assets/js/main.js`: add a handler that finds `document.querySelector('.scroll-to-next')` and on click scrolls to the next `.section` after `.hero` with `scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })`. Implement reduced-motion detection using `matchMedia('(prefers-reduced-motion: reduce)').matches`. Ensure the handler is added after DOMContentLoaded."

4) Create a final report in the docs folder:

"Create `docs/hero-refactor-report.md`: after implementation document what changed, list files modified, show before/after screenshots (or notes if screenshots not available), testing results (accessibility and Lighthouse), and any follow-ups."

## Prompt to execute all steps at once (single command for the assistant)
"Please implement the Hero refactor plan: update `index.html` hero markup (add `.hero-bg` and accessible `.scroll-to-next` button), add animated gradient and button micro-animations to `assets/css/layout.css` with `prefers-reduced-motion` support, and add a scroll handler to `assets/js/main.js` that scrolls to the next `.section` respecting reduced motion. After finishing, create `docs/hero-refactor-report.md` describing changes, tests, and screenshots. Return a concise summary of edits and add files changed to the commit message."

---

If you want, I can now implement these changes step-by-step. Tell me to "Run the Hero refactor" and I'll start by updating `index.html` and `assets/css/layout.css`. After each major step I will create or update the report in `docs/hero-refactor-report.md`.
