'use client';

import { useEffect, useRef } from 'react';
import styles from './LandingCanvas.module.css';

/** Artboard dimensions from Figma (mobile frame) */
const ARTBOARD_W = 393;
const ARTBOARD_H = 844;

interface LandingCanvasProps {
  children: React.ReactNode;
}

/**
 * Full-viewport wrapper that scales a fixed-size Figma artboard
 * to fit the current window while preserving aspect ratio.
 */
export default function LandingCanvas({ children }: LandingCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function resize() {
      if (!canvasRef.current) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = Math.min(vw / ARTBOARD_W, vh / ARTBOARD_H);
      canvasRef.current.style.setProperty('--scale', String(scale));
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.canvas} ref={canvasRef}>
        {children}
      </div>
    </div>
  );
}
