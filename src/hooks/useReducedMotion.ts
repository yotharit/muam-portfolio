'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void): () => void {
  const query = window.matchMedia(QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

/** Starts false so the server render and the first client render agree. */
function getServerSnapshot(): boolean {
  return false;
}

/**
 * True when the visitor has asked their OS to minimise motion.
 *
 * CSS motion is already handled globally in `globals.css` — this is for motion
 * CSS cannot reach, such as video playback.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
