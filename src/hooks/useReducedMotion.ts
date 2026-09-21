'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * True when the visitor has asked their OS to minimise motion.
 *
 * Starts false so the server render and the first client render agree; the media
 * query resolves immediately after mount. CSS motion is already handled globally
 * in `globals.css` — this is for motion CSS cannot reach, such as video playback.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    setPrefersReducedMotion(query.matches);

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}
