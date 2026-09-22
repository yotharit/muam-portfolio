'use client';

import { useLayoutEffect, useRef } from 'react';

// No lower clamp on purpose: the artboard must always fit. `.landing` is a
// non-scrollable `position: fixed; overflow: hidden` surface, so any floor that
// forces the artboard taller than the viewport silently clips content top and
// bottom with no scroll recourse. Short webview ratios hit that first — a
// landscape in-app browser at 844x390 lost 16px off each end under the old
// 0.5 floor. Shrinking further is the lesser evil.
const SCALE_MAX = 1.75;

function readSafeAreaInset(property: string): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(property);
  return parseFloat(value) || 0;
}

/**
 * Scales a fixed-size Figma artboard to fit the viewport, minus safe-area insets,
 * capped so it never renders absurdly large.
 * See docs/adr/0001-fixed-artboard-scaling-for-figma-mobile-pages.md.
 */
export function useArtboardScale(artboardWidth: number, artboardHeight: number) {
  const canvasRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect (not useEffect) so the correct scale is applied before first paint —
  // otherwise the artboard briefly renders at the CSS fallback scale(1), full native size,
  // clipped hard by the viewport until the effect catches up.
  useLayoutEffect(() => {
    function resize() {
      const el = canvasRef.current;
      if (!el) return;

      const safeTop = readSafeAreaInset('--safe-top');
      const safeBottom = readSafeAreaInset('--safe-bottom');
      const safeLeft = readSafeAreaInset('--safe-left');
      const safeRight = readSafeAreaInset('--safe-right');

      const availableW = window.innerWidth - safeLeft - safeRight;
      const availableH = window.innerHeight - safeTop - safeBottom;

      const rawScale = Math.min(availableW / artboardWidth, availableH / artboardHeight);
      const scale = Math.min(rawScale, SCALE_MAX);

      el.style.setProperty('--scale', String(scale));
      el.style.setProperty('--safe-offset-x', `${(safeLeft - safeRight) / 2}px`);
      el.style.setProperty('--safe-offset-y', `${(safeTop - safeBottom) / 2}px`);
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [artboardWidth, artboardHeight]);

  return canvasRef;
}
