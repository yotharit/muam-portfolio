import type { DiskLetter } from '@/data/animation';
import styles from './animation.module.css';

const IMG = '/images/animation';

/** The three disk positions on the shelf. Identical in all three Figma frames
 *  (1-307 / 1-466 / 1-625) — only which package sits in which slot changes.
 *  Values are the Figma disk-box origins; slot 1 is the featured one (red pill). */
export const SLOTS = [
  { left: 43, top: 531 },
  { left: 180, top: 617 },
  { left: 38, top: 665 },
] as const;

/* Every disk is anchored to slot 1 and moved with a transform, so the shuffle
 * animates on the compositor instead of on `left`/`top`. */
const ANCHOR = SLOTS[0];

// The CD artwork PNGs are 3x exports, trimmed to their own content, so each one
// covers a different area: the label overhangs the top-left, and A's pink glow
// bleeds out on every side. What IS identical is the CD itself — 615px wide in
// all three, i.e. the 203x86 Figma disk box plus its stroke overflow (205.13u).
//
// So the CD, not the PNG canvas, is the anchor: each offset pulls the canvas back
// until the CD's measured bounding box lands exactly on the slot's disk box. That
// keeps the disks pixel-aligned with the red pill, the shelf and each other.
const GEOMETRY: Record<DiskLetter, { offsetX: number; offsetY: number; width: number; height: number }> = {
  a: { offsetX: -10.5, offsetY: -10.83, width: 224, height: 110 },
  b: { offsetX: -1, offsetY: -7.92, width: 208.33, height: 96.67 },
  c: { offsetX: -1, offsetY: -14.92, width: 205.33, height: 103.67 },
};

interface PackageDiskProps {
  letter: DiskLetter;
  name: string;
  slotIndex: number;
  isActive: boolean;
  onSelect: () => void;
}

export default function PackageDisk({ letter, name, slotIndex, isActive, onSelect }: PackageDiskProps) {
  const geometry = GEOMETRY[letter];
  const slot = SLOTS[slotIndex];

  return (
    <button
      type="button"
      className={styles.disk}
      aria-pressed={isActive}
      style={{
        left: ANCHOR.left + geometry.offsetX,
        top: ANCHOR.top + geometry.offsetY,
        width: geometry.width,
        height: geometry.height,
        // Slot 3 overlaps slot 2 in Figma, and slot 1 never overlaps either.
        zIndex: slotIndex + 1,
        transform: `translate(${slot.left - ANCHOR.left}px, ${slot.top - ANCHOR.top}px)`,
      }}
      onClick={onSelect}
    >
      <img alt={`${name} disk`} className={styles.diskImg} src={`${IMG}/cd-${letter}.png`} />
    </button>
  );
}
