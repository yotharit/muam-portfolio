import Link from 'next/link';
import styles from './DeskScene.module.css';

const IMG = '/images/landing';

/**
 * The desk scene containing: cup, books, carpet, illustration area,
 * striped lines, and floor mat.
 */
export default function DeskScene() {
  return (
    <>
      {/* ── Cup ── */}
      <div className={styles.cupRim}>
        <div className={styles.cupRimInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse72.svg`} />
        </div>
      </div>
      <div className={styles.cupRimHighlight}>
        <div className={styles.cupRimHighlightInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector26.svg`} />
        </div>
      </div>
      <div className={styles.cupBody}>
        <div className={styles.cupBodyInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector25.svg`} />
        </div>
      </div>
      <div className={styles.cupHandle}>
        <div className={styles.cupHandleInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/subtract.svg`} />
        </div>
      </div>

      {/* ── Books / stacked layers ── */}
      <div className={styles.bookLayer1}>
        <div className={styles.bookLayer1Rotate}>
          <div className={styles.bookLayer1Shape}>
            <div className={styles.bookLayer1Inner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector6.svg`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookLayer2}>
        <div className={styles.bookLayer2Rotate}>
          <div className={styles.bookLayer2Shape}>
            <div className={styles.bookLayer2Inner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector7.svg`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookLayer3}>
        <div className={styles.bookLayer3Rotate}>
          <div className={styles.bookLayer3Shape}>
            <div className={styles.bookLayer3Inner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector17.svg`} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Carpet / rug ── */}
      <div className={styles.carpet}>
        <div className={styles.carpetRotate}>
          <div className={styles.carpetShape}>
            <div className={styles.carpetInner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector18.svg`} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Illustration window & text ── */}
      <div className={styles.illuWindow}>
        <div className={styles.illuWindowInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector56.svg`} />
        </div>
      </div>
      <Link href="/illustration" className={styles.illuText}>
        Illustion
      </Link>

      {/* ── Striped lines ── */}
      <StripedLines />

      {/* ── Floor mat ── */}
      <div className={styles.floorMat}>
        <div className={styles.floorMatRotate}>
          <div className={styles.floorMatShape}>
            <div className={styles.floorMatInner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector19.svg`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Striped lines sub-component ── */

interface LineData {
  height: number;
  left: number;
  top: number;
  width: number;
  rotate: string;
  lineWidth: number;
  inset: string;
  src: string;
}

const LINES: LineData[] = [
  { height: 30, left: 137, top: 642, width: 87, rotate: 'rotate(-19.03deg)', lineWidth: 92.027, inset: '-2.18px -0.43% -1.23px -0.22%', src: `${IMG}/line30.svg` },
  { height: 26, left: 145, top: 657, width: 69, rotate: 'rotate(-20.65deg)', lineWidth: 73.736, inset: '-2.11px -0.68% -1.12px 0', src: `${IMG}/line31.svg` },
  { height: 23, left: 155, top: 670, width: 63, rotate: 'rotate(-20.06deg)', lineWidth: 67.067, inset: '-2.01px -0.5% -0.9px 0', src: `${IMG}/line32.svg` },
  { height: 23, left: 165, top: 680, width: 63, rotate: 'rotate(-20.06deg)', lineWidth: 67.067, inset: '-2.01px -0.5% -0.9px 0', src: `${IMG}/line32.svg` },
  { height: 23, left: 172, top: 691, width: 63, rotate: 'rotate(-20.06deg)', lineWidth: 67.067, inset: '-2.01px -0.5% -0.9px 0', src: `${IMG}/line32.svg` },
];

function StripedLines() {
  return (
    <>
      {LINES.map((line, i) => (
        <div
          key={i}
          className={styles.lineWrap}
          style={{ height: line.height, left: line.left, top: line.top, width: line.width }}
        >
          <div className={styles.rotateInner} style={{ transform: line.rotate }}>
            <div className={styles.lineShape} style={{ width: line.lineWidth }}>
              <div style={{ position: 'absolute', inset: line.inset }}>
                <img alt="" className={styles.imgFill} src={line.src} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
