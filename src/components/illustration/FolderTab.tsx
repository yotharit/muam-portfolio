import styles from './illustration.module.css';

const IMG = '/images/illustration';

// Both PNGs are 3x exports, but they cover different areas:
//
//   unselected — canvas IS the Figma group box exactly: 343.5 x 109.279 (1031x328).
//   selected   — canvas also covers the arrow indicator sticking out 12.167px to
//                the left and the pink glow bleeding 6.167px on every side, and the
//                folder itself is taller because it is open: 368 x 171.333 (1104x514).
//
// Both offsets pull the canvas back so the GROUP BOX lands on the coordinate the
// caller passes, which is what the Figma frames measure — keeping the artwork
// pixel-aligned with the design in either state.
const GEOMETRY = {
  selected: { offsetX: -18.333, offsetY: -6.167, width: 368, height: 171.333 },
  unselected: { offsetX: 0, offsetY: 0, width: 343.5, height: 109.279 },
} as const;

interface FolderTabProps {
  letter: string;
  isActive: boolean;
  left: number;
  top: number;
  zIndex: number;
  onSelect: () => void;
}

export default function FolderTab({ letter, isActive, left, top, zIndex, onSelect }: FolderTabProps) {
  const state = isActive ? 'selected' : 'unselected';
  const geometry = GEOMETRY[state];

  return (
    <button
      type="button"
      className={styles.folderTab}
      style={{
        left: left + geometry.offsetX,
        top: top + geometry.offsetY,
        width: geometry.width,
        height: geometry.height,
        zIndex,
      }}
      onClick={onSelect}
    >
      <img
        alt={`Style ${letter.toUpperCase()}`}
        className={styles.folderImg}
        src={`${IMG}/${letter}-${state}.png`}
      />
    </button>
  );
}
