# Home Landing Page — Component Guide

> This document describes how the Home page (`/`) is built and how to modify it.

## Quick Overview

The home page is a **full-viewport illustrated landing** — a retro-aesthetic room scene from Figma rendered as a scaled canvas. It is **not** a standard scrollable page with header/footer.

**Figma Source:** [Node 1:32](https://www.figma.com/design/04fJxlxrGvrauXxn49E2OP/Portfolio?node-id=1-32&m=dev)

## Component Tree

```
page.tsx (Server Component — pure composition)
└── LandingCanvas (Client — viewport scaling)
    ├── LandingTopBar    → Title bar, "Mu•am" logo, window controls
    ├── AppleTV          → Apple TV illustration (stem, body, screen, buttons, dots, legs)
    ├── AnimationBanner  → "Animation" link + ribbon banner + bubbles
    ├── DeskScene        → Cup, books, carpet, "Illustion" link, striped lines, floor mat
    └── BottomScene      → Snack, bread/sandwich, decorative stars
```

All components live in `src/components/home/` with paired CSS Modules.

## How Scaling Works

The Figma artboard is fixed at **393×844px**. `LandingCanvas` scales it to fit the viewport:

```
scale = min(viewportWidth / 393, viewportHeight / 844)
```

All child elements use **absolute pixel positions** from Figma — do NOT convert to `%` or `rem`.

## Assets

- **Location:** `public/images/landing/` (45 files)
- **Format:** SVG (except `vector8.png` — the TV screen artwork)
- **Usage:** `const IMG = '/images/landing'` → `src={\`${IMG}/filename.svg\`}`
- **Source:** Exported from Figma MCP (`http://localhost:3845/assets/...`)

## How to Modify

| Task | Where to edit |
|---|---|
| Change logo text | `LandingTopBar.tsx` — the `<p>` with `Mu•am` |
| Change TV screen artwork | Replace `public/images/landing/vector8.png` |
| Change navigation links | `AnimationBanner.tsx` (Animation) or `DeskScene.tsx` (Illustion) |
| Adjust element position | The component's `.module.css` — modify `left`/`top`/`width`/`height` |
| Add new element | Add to the appropriate scene component |
| Change background gradient | `LandingCanvas.module.css` — `.landing` background |
| Update custom font | `src/app/globals.css` — `@font-face` block |

## Navigation Links

| Text | Route | Component |
|---|---|---|
| Animation | `/animation` | `AnimationBanner.tsx` |
| Illustion | `/illustration` | `DeskScene.tsx` |

## Key Patterns

1. **Data-driven repetition** — Dots (AppleTV), lines (DeskScene), stars (BottomScene) use arrays.
2. **Rotation wrapper** — Rotated SVGs use a 3-layer nesting: position → rotate → shape.
3. **Only LandingCanvas is a client component** — all others are server components.
4. **No Header/Footer** — This page bypasses the standard layout components.
