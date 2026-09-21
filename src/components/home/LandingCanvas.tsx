'use client';

import styles from './LandingCanvas.module.css';
import { useArtboardScale } from '@/hooks/useArtboardScale';

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
  const canvasRef = useArtboardScale(ARTBOARD_W, ARTBOARD_H);

  return (
    <div className={styles.landing}>
      <div className={styles.canvas} ref={canvasRef}>
        {children}
      </div>
    </div>
  );
}
