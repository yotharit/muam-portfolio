'use client';

import { useEffect, useRef, useState } from 'react';
import FolderTab from './FolderTab';
import styles from './illustration.module.css';
import { illustrationStyles } from '@/data/illustration';

const IMG = '/images/illustration';

const ARTBOARD_W = 393;
const ARTBOARD_H = 844;

const TABS = [
  { left: 27, top: 46, labelLeft: 36, labelTop: 79, arrowTop: 98 },
  { left: 23, top: 142, labelLeft: 36, labelTop: 146, arrowTop: 165 },
  { left: 26, top: 179, labelLeft: 32, labelTop: 188, arrowTop: 207 },
  { left: 26, top: 216, labelLeft: 33, labelTop: 225, arrowTop: 244 },
  { left: 28, top: 256, labelLeft: 33, labelTop: 264, arrowTop: 283 },
] as const;

const LINE_TOPS = [733, 746, 761, 775, 789];

export default function IllustrationPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function resize() {
      if (!canvasRef.current) return;
      const scale = Math.min(window.innerWidth / ARTBOARD_W, window.innerHeight / ARTBOARD_H);
      canvasRef.current.style.setProperty('--scale', String(scale));
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const active = illustrationStyles[activeIndex];
  const arrowTop = TABS[activeIndex].arrowTop;

  return (
    <div className={styles.page}>
      <div className={styles.canvas} ref={canvasRef}>

        {/* ── Folder tabs ── */}
        {TABS.map((tab, i) => (
          <FolderTab
            key={i}
            isActive={i === activeIndex}
            left={tab.left}
            top={tab.top}
            onMouseEnter={() => setActiveIndex(i)}
          />
        ))}

        {/* ── Tab labels (A–E) ── */}
        {TABS.map((tab, i) => (
          <p
            key={`label-${i}`}
            className={styles.label}
            style={{ left: tab.labelLeft, top: tab.labelTop }}
          >
            {illustrationStyles[i].letter}
          </p>
        ))}

        {/* ── Arrow indicator ── */}
        <div className={styles.arrow} style={{ top: arrowTop }}>
          <div className={styles.arrowInner}>
            <img
              alt=""
              className={styles.imgFill}
              src={`${IMG}/polygon1.svg`}
              style={{ transform: 'rotate(90deg)' }}
            />
          </div>
        </div>

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

        {/* ── "Illustion" title + star ── */}
        <p className={styles.illustionTitle}>Illustion</p>
        <div className={styles.star}>
          <div className={styles.starInner}>
            <div className={styles.starImg}>
              <img alt="" className={styles.imgFill} src={`${IMG}/star32.svg`} />
            </div>
          </div>
        </div>

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
