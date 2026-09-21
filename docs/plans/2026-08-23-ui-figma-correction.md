# UI Correction: Landing, Illustration, Animation — Figma alignment + mobile safety

Spec produced via grilling session (2026-08-23), reviewed by advisor (Opus 5) and fact-checked against a `get_metadata` pull of the full Figma canvas before finalizing. Reflects decisions in `CONTEXT.md` and `docs/adr/0001-fixed-artboard-scaling-for-figma-mobile-pages.md`.

## Resolved questions log

- **Q12 — Landing hover-swap interactivity: not needed.** Confirmed by you. `1:32` "Landing Animation Hover" remains the one true static Landing layout; `1:112` "Landing Illustration Hover" is out of scope and won't be fetched. No change to the Landing section of the implementation plan below.

## Decisions locked in

| # | Decision |
|---|---|
| Q1 | Keep fixed-393×844-artboard-scaled-via-`transform` for all breakpoints (ADR-0001). No separate desktop layout. |
| Q2 | **Resolved: correct "Illustion" → "Illustration"** in all visible copy. Confirmed after reopening — Figma frame/layer names spell it correctly, only the rendered display text says "Illustion"; treated as a design-tool typo, not a deliberate wordmark. Route names and code identifiers were always `illustration` regardless. |
| Q3 | Landing top-right icon cluster (`imgGroup48`: folder/bookmark/close icons) is decorative only — reproduce as static art, no click behavior. |
| Q4 | Animation disk switching gets a crossfade + slight lift/scale on the newly-active disk, and a crossfade on the laptop screen preview. `transform`/`opacity` only. No Figma motion spec exists (confirmed via `get_motion_context` — empty) so these are our timings to own, not derived from the file. |
| Q5 | Selection is click/tap **and native keyboard activation (Enter/Space) only** on both Illustration tabs and Animation disks — remove `onMouseEnter`-triggered switching **and remove `onFocus`-triggered switching** (both currently present in `IllustrationPage.tsx`/`AnimationPage.tsx`). `onFocus` re-introduces the exact problem this decision was meant to remove: Tab-ing through the tabs/disks would silently mutate the selection at every stop, same as hover did. Convert the selectable `div`s to real `<button>`s so Enter/Space activation is native — this needs an explicit CSS reset (`border: none; background: none; padding: 0; font: inherit`) since these are absolutely-positioned shape stacks with `filter: drop-shadow(...)`, and bare `<button>` UA styles will visibly break that. |
| Q6 | Document the fixed-artboard convention as a project skill/doc (this file + ADR-0001 + `CONTEXT.md`) so future Figma pages follow it by default. |
| Q7 | **Corrected** — drop the scale *floor* (0.85× was wrong: `resize_window(393,844)` actually produced a 750px-tall content area, and `scale = min(width/393, height/844)` came out to ~0.88 there and ~0.72 on the smaller Landing test — the height axis dominates on real phones because 844 is the iPhone's *device* height, not the visible viewport height after browser UI. A 0.85 floor would force the artboard taller than the viewport → clipped/scrolling on a page meant to be full-bleed. It also fights the safe-area padding below, which further shrinks available height.) New clamp: **ceiling only, ~1.5–1.75×**, plus a very low sanity-backstop floor (~0.5×) that should never realistically trigger. Verify by logging the actual computed `--scale` at real viewport sizes, not by assuming the requested resize dimensions. |
| Q8 | Landing TV: no invented placeholder copy. **Correction to the reasoning** (conclusion unchanged): "BATM" is not a text node/overlay at all — it's pixels baked directly into the screen artwork PNG (`imgVector8`, node `1:47`). There's nothing to "leave as text" or wire up; `AppleTV.tsx`'s existing image carousel is simply a different (unrelated) artwork rotation and there's no code change here. |
| Q9 | Add on-brand focus states (reuse existing `drop-shadow`/accent-color treatments already in the Figma file) for keyboard nav on tabs/disks — not browser-default outline, not skipped. |
| Q10 | Add a subtle non-committal hover affordance (slight lift/brighten) on inactive Illustration tabs, since hover no longer switches selection. |
| Q11 | Add a small in-scene back button to `/illustration` and `/animation` — same font/style as the page title, doodle-style background consistent with the rest of the illustrated scene, even though Figma doesn't show one (functional gap > strict fidelity). Also apply safe-area-aware spacing site-wide on these pages (see below). |

## Fact-checked gaps already confirmed in code (not decisions — just bugs/gaps to fix)

- **Illustration tab labels clip at the canvas edge** — visually confirmed via live screenshot at 393×844; `illustration.module.css` / `IllustrationPage.tsx` have WIP uncommitted changes from a prior session already mid-fixing the active/inactive position split (`activeTop`/`inactiveTop`, `activeLabelTop`/`inactiveLabelTop`). **Important scope correction from the metadata fact-check**: Figma only has *two* Illustration states — `1:197` "Default Package Selected" (A active) and `1:252` "Next Package Selected" (a generic B-active pattern). There is no C/D/E-active frame anywhere in the file. The current code's C/D/E position values are explicitly extrapolated (its own comment says so: "C/D/E active values extrapolated from the A→B pattern, step=26..."), not sourced from Figma. Fetch `1:252` (never pulled this session) to nail down A and B exactly; treat C/D/E as best-effort and verify by eye against the live layout, not against a Figma source of truth that doesn't exist for those three.
- **Landing top-right icon cluster is unimplemented** — confirmed present in Figma (`imgGroup48`, node `1:88`) but absent from `LandingTopBar.tsx`.
- **Animation page missing the draped-curtain/fabric decoration** on the left edge that Figma shows (currently a plain vertical pink bar); verify against node `1:307` children before rebuilding.
- **Animation *does* have all 3 disk states designed in Figma** (better than assumed) — `1:307` "Animation - Default" (A, already fetched), `1:466` "Animation - Select Package B", `1:625` "Animation Select Package C". Fetch `1:466`/`1:625` via `get_design_context` before implementing the B/C-active disk layering and screen-preview swap, so those states are built from real positions instead of guessed by symmetry with A.
- **No back-navigation exists today** on `/illustration` or `/animation` — confirmed via grep, zero `Link`/`href` in either page or its components. `Header`/`Footer` components exist in `src/components/layout/` but are wired into **zero** pages (not even the home page) — don't reuse them for this; they don't match the illustrated full-bleed aesthetic (Q11).
- **Mobile safe-area insets are not handled anywhere** — no `env(safe-area-inset-*)` usage found in any `.module.css`. All three pages render full-bleed against the viewport edge, which will collide with the iOS notch/Dynamic Island (top) and home-indicator bar (bottom) on real devices, and will now specifically collide with the new back button (Q11) if placed naively at `top: 0`.

## Implementation plan

### 1. Mobile-safe-area foundation (do first — everything else builds on top)
- Add `viewport-fit=cover` to the viewport meta (Next.js `generateViewport`/`viewport` export in `layout.tsx`).
- Add safe-area CSS custom properties in `src/styles/variables.css`: `--safe-top: env(safe-area-inset-top, 0px)`, `--safe-bottom`, `--safe-left`, `--safe-right`.
- Apply them as padding/offset on each page's outermost scaled container (Landing, Illustration, Animation) so nothing interactive sits under a notch or home-indicator bar, and so the new back button (below) never overlaps a notch.
- Clamp the artboard scale (Q7, corrected) — ceiling ~1.5–1.75×, floor as a ~0.5× sanity backstop only (not 0.85×) — in the existing `resize()` handlers in `IllustrationPage.tsx` / `AnimationPage.tsx` (and add the same fit-to-viewport logic to the Landing page if it doesn't already have it — confirm via `LandingCanvas.tsx`). Note the safe-area padding above reduces available height, which pushes the computed scale down further — the two changes interact, so re-check the clamp after safe-area padding is in, not before.

### 2. Landing page
- Add the missing top-right icon cluster to `LandingTopBar.tsx` as a static decorative asset (export/reuse the Figma `imgGroup48` SVG), non-interactive (Q3).
- No change needed to `AppleTV.tsx` screen content (Q8 — "BATM" is baked into artwork pixels, not a text node; nothing to wire up).
- Resolve Q2 (Illustion vs. Illustration wordmark) before touching any Landing copy.

### 3. Illustration page
- Fetch Figma node `1:252` ("Next Package Selected") via `get_design_context` — not yet pulled this session — to get real B-active positions before finishing the in-flight tab-position fix (active/inactive top + label top). Verify A (`1:197`) and B against real data; treat C/D/E as best-effort extrapolation with no Figma ground truth (see fact-checked gaps above) and confirm those three by eye.
- Remove **both** `onMouseEnter`- and `onFocus`-triggered `setActiveIndex` (Q5, corrected) — convert the tab element to a real `<button>` with an explicit UA-style reset (`border: none; background: none; padding: 0; font: inherit`) so `filter: drop-shadow(...)` and absolute positioning keep working, and let native Enter/Space activation replace the removed `onFocus` handler.
- Add hover affordance (lift/brighten) on inactive tabs, decoupled from selection (Q10).
- Add focus-visible styling reusing the existing pink `drop-shadow` accent tokens already used for the active-tab glow (Q9).
- Resolve Q2 before renaming `.illustionTitle` → `.illustrationTitle` (or keeping the wordmark as-is).
- Add the back button (Q11): matching title font/style, doodle-style background matching the folder-tab/photo-frame wavy-edge treatment already established in this file, positioned respecting `--safe-top`.

### 4. Animation page
- Fetch Figma nodes `1:466` (Select Package B) and `1:625` (Select Package C) via `get_design_context` — not yet pulled this session — before implementing B/C-active disk layering and screen-preview positions, so they're built from real data instead of guessed by symmetry with A.
- Remove **both** `onMouseEnter`- and `onFocus`-triggered `setActiveIndex` on the three disk layers (Q5, corrected); convert to `<button>` with the same UA-style reset as Illustration; click/tap + native Enter/Space only.
- Add crossfade + subtle lift/scale transition on disk activation, and crossfade on the laptop `screenImg` swap (Q4) — CSS transitions on `opacity`/`transform` only, no layout-affecting properties, per your performance rules.
- Add focus-visible styling on disks matching Q9's approach.
- Rebuild the left-edge curtain/fabric decoration to match Figma node `1:307`'s children (currently simplified to a plain bar) — pull exact asset via `get_design_context` before hand-building anything.
- Add the same back button pattern as Illustration (Q11), safe-area aware.

### 5. Verification (per your global testing rules)
- Screenshot all three pages at 320, 768, 1024, 1440 — but log the **actual** `window.innerWidth`/`innerHeight` and the computed `--scale` at each, don't assume a `resize_window(w,h)` request produced exactly that content area (it didn't in this session's own testing — a 393×844 request produced a 346×750 content area). Confirm the corrected scale-clamp (Q7) behaves sensibly at both ends against real numbers.
- Keyboard-only pass: Tab through Illustration tabs and Animation disks, confirm focus order and visible focus ring, confirm Enter/Space activates, and confirm Tab-ing alone no longer changes the active tab/disk (this is the concrete regression test for the Q5 correction).
- Safe-area check: Chrome DevTools device-toolbar notched presets do **not** resolve `env(safe-area-inset-*)` (it evaluates to `0px` there regardless of preset) — a passing DevTools check proves nothing. Use the iOS Simulator, or temporarily hardcode `--safe-top`/`--safe-bottom` to real values (~59px/~34px) to exercise the layout under test.
- Re-screenshot against the Figma frames side-by-side — now including `1:252`, `1:466`, `1:625` alongside `1:197`/`1:307` — to close out any remaining pixel drift (tab clipping, curtain asset, icon cluster).

## Explicitly out of scope (confirm if this is wrong)
- Wiring "Style"/"Package" selection to real commission/booking flows (`src/components/commission/*`) — this task is visual/UI correction only.
- Desktop-specific redesign of any of the three pages (ADR-0001).
- Populating real Landing TV marketing copy/title (Q8) — left as pure imagery, no text, until you have approved copy.
