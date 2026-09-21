'use client';

import { useState } from 'react';
import FolderTab from './FolderTab';
import styles from './illustration.module.css';
import { illustrationStyles } from '@/data/illustration';
import { useArtboardScale } from '@/hooks/useArtboardScale';
import BackButton from '@/components/ui/BackButton';

const IMG = '/images/illustration';

const ARTBOARD_W = 393;
const ARTBOARD_H = 844;

// Horizontal offsets are identical in every Figma frame.
// The letter and, when selected, the arrow indicator are baked into the PNG
// assets, so no separate label/arrow overlay is needed.
const TAB_LEFTS = [27, 23, 26, 26, 28] as const;

// The stack is a flow, not fixed slots, and it has to be: an open folder needs
// ~107px of clear height before the next tab, but the stack only spans 319px
// (y=46 down to 365, where E's closed body ends in both Figma frames). Five
// folders at that pitch would need 537px, so the room has to come from somewhere.
//
// Each row keeps the stack pinned top and bottom: folders BELOW the open one hold
// the normal 37px pitch, the open one claims its 107px, and whatever is left over
// is split evenly between the folders ABOVE it. That leftover is what sets the
// strip height — 26px in Figma's B-open frame because only one folder sits above,
// widening to ~40px when E is open and four have to share the space.
//
// Rows A and B are the exact group tops from Figma nodes 1-197 and 1-252.
// C/D/E have no Figma frame — they apply the same rule and are best-effort.
const TAB_TOPS = [
  [46, 142, 179, 216, 256], // A open — Figma 1-197, exact
  [46,  72, 179, 216, 256], // B open — Figma 1-252, exact  (1 strip above @ 26px)
  [46,  79, 112, 219, 256], // C open — derived             (2 strips above @ 33px)
  [46,  80, 115, 149, 256], // D open — derived             (3 strips above @ 34px)
  [46,  86, 126, 166, 206], // E open — derived             (4 strips above @ 40px)
] as const;

// Figma nodes 1-240..1-244 (Line 25-29); each line is also nudged 1px right of the last.
const LINE_TOPS = [742, 755, 770, 784, 798];

export default function IllustrationPage() {
  const canvasRef = useArtboardScale(ARTBOARD_W, ARTBOARD_H);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = illustrationStyles[activeIndex];

  return (
    <div className={styles.page}>
      <BackButton href="/" />
      <div className={styles.canvas} ref={canvasRef}>

        {/* ── Folder tabs (letter + selected-state arrow are baked into the PNG assets) ── */}
        {TAB_LEFTS.map((left, i) => (
          <FolderTab
            key={i}
            letter={illustrationStyles[i].letter.toLowerCase()}
            isActive={i === activeIndex}
            left={left}
            top={TAB_TOPS[activeIndex][i]}
            zIndex={i + 1}
            onSelect={() => setActiveIndex(i)}
          />
        ))}

        {/* ── Bottom: photo backgrounds ── */}
        <div className={styles.photoBgRed}>
          <div className={styles.photoBgRedInner} />
        </div>
        <div className={styles.photoBgPink}>
          <div className={styles.photoBgPinkInner} />
        </div>
        <div className={styles.photoGrid}>
          <div className={styles.photoGridInner}>
            <div className={styles.photoGridImg}>
              <img alt="" className={styles.imgFill} src={`${IMG}/group50.svg`} />
            </div>
          </div>
        </div>

        {/* ── Polaroid 1 ── */}
        <div className={styles.polaroid1Bg}>
          <div className={styles.polaroid1BgInner} />
        </div>
        <div className={styles.polaroid1}>
          <div className={styles.polaroid1Frame}>
            <img
              alt={`${active.name} illustration 1`}
              className={styles.polaroid1Img}
              src={active.images[0]}
            />
          </div>
        </div>

        {/* ── Polaroid 2 ── */}
        <div className={styles.polaroid2Bg}>
          <div className={styles.polaroid2BgInner} />
        </div>
        <div className={styles.polaroid2}>
          <div className={styles.polaroid2Frame}>
            <img
              alt={`${active.name} illustration 2`}
              className={styles.polaroid2Img}
              src={active.images[1]}
            />
          </div>
        </div>

        {/* ── Star (Figma node 1-198) ──
            Must paint BEHIND the title — in Figma the word's letters are drawn
            over it. Later siblings paint on top, so the star goes first.
            Figma has it as the frame's very first child (under the polaroids too),
            but our polaroids sit ~43px higher than Figma's, which would bury it
            entirely; keeping it just above them preserves the intended look. */}
        <div className={styles.star}>
          <div className={styles.starInner}>
            <div className={styles.starImg}>
              <img alt="" className={styles.imgFill} src={`${IMG}/star32.svg`} />
            </div>
          </div>
        </div>

        {/* ── "Illustration" title ── */}
        <p className={styles.illustrationTitle}>Illustration</p>

        {/* ── Pencil (right side) ── */}
        <div className={styles.pencilHead}>
          <div className={styles.pencilHeadInner}>
            <div className={styles.pencilHeadImg}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector40.svg`} />
            </div>
          </div>
        </div>
        <div className={styles.pencilBody}>
          <div className={styles.pencilBodyBar} />
        </div>
        <div className={styles.pencilCap}>
          <div className={styles.pencilCapInner} />
        </div>
        <div className={styles.pencilEraser}>
          <div className={styles.pencilEraserInner} />
        </div>
        <div className={styles.pencilScraps1}>
          <div className={styles.pencilScraps1Inner}>
            <div className={styles.pencilScraps1Img}>
              <img alt="" className={styles.imgFill} src={`${IMG}/polygon3.svg`} />
            </div>
          </div>
        </div>
        <div className={styles.pencilScraps2}>
          <div className={styles.pencilScraps2Inner}>
            <div className={styles.pencilScraps2Img}>
              <img alt="" className={styles.imgFill} src={`${IMG}/polygon2.svg`} />
            </div>
          </div>
        </div>

        {/* ── Rect90 decorative scroll ── */}
        <div className={styles.rect90}>
          <div className={styles.rect90Inner}>
            <div className={styles.rect90Img}>
              <img alt="" className={styles.imgFill} src={`${IMG}/rect90.svg`} />
            </div>
          </div>
        </div>

        {/* ── Red dot ── */}
        <div className={styles.redDot}>
          <div className={styles.redDotImg}>
            <img alt="" className={styles.imgFill} src={`${IMG}/ellipse75.svg`} />
          </div>
        </div>

        {/* ── Notebook lines ── */}
        {LINE_TOPS.map((top, i) => (
          <div key={`line-${i}`} className={styles.line} style={{ top, left: 18 + i }}>
            <div className={styles.lineInner}>
              <div className={styles.lineImg}>
                <img alt="" className={styles.imgFill} src={`${IMG}/line25.svg`} />
              </div>
            </div>
          </div>
        ))}

        {/* ── Style label ── */}
        <p className={styles.styleLabel}>{active.name}</p>

      </div>
    </div>
  );
}
