'use client';

import { useLayoutEffect, useRef } from 'react';

const SCALE_MIN = 0.5;
const SCALE_MAX = 1.75;

function readSafeAreaInset(property: string): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(property);
  return parseFloat(value) || 0;
}

/**
 * Scales a fixed-size Figma artboard to fit the viewport, minus safe-area insets,
 * clamped so it never renders illegibly small or absurdly large.
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
      const scale = Math.min(Math.max(rawScale, SCALE_MIN), SCALE_MAX);

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
