import styles from './AppleTV.module.css';

const IMG = '/images/landing';

/**
 * The apple-shaped retro TV illustration with screen content,
 * buttons, decorative dots, and legs.
 */
export default function AppleTV() {
  return (
    <>
      {/* ── Stem ── */}
      <div className={styles.tvStem}>
        <div className={styles.tvStemInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector13.svg`} />
        </div>
      </div>

      {/* ── Wing ── */}
      <div className={styles.tvWing}>
        <div className={styles.tvWingRotate}>
          <div className={styles.tvWingShape}>
            <div className={styles.tvWingShapeInner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector12.svg`} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Ear ── */}
      <div className={styles.tvEar}>
        <div className={styles.tvEarInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector11.svg`} />
        </div>
      </div>

      {/* ── Body layers ── */}
      <div className={styles.tvBodyOuter}>
        <div className={styles.tvBodyOuterInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector.svg`} />
        </div>
      </div>
      <div className={styles.tvBodyMiddle}>
        <div className={styles.tvBodyMiddleInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector1.svg`} />
        </div>
      </div>

      {/* ── Screen layers ── */}
      <div className={styles.tvScreenOuter}>
        <div className={styles.tvScreenOuterInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector10.svg`} />
        </div>
      </div>
      <div className={styles.tvScreenMiddle}>
        <div className={styles.tvScreenMiddleInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector9.svg`} />
        </div>
      </div>
      <div className={styles.tvScreenInner}>
        <div className={styles.tvScreenInnerContent}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector8.png`} width={253.265} height={135.383} />
        </div>
      </div>

      {/* ── TV buttons ── */}
      <div className={styles.tvBtnLarge}>
        <div className={styles.tvBtnLargeInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse50.svg`} />
        </div>
      </div>
      <div className={styles.tvBtnLargeHighlight}>
        <div className={styles.tvBtnLargeHighlightInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse49.svg`} />
        </div>
      </div>
      <div className={styles.tvBtnSmallOuter}>
        <div className={styles.tvBtnSmallOuterInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse51.svg`} />
        </div>
      </div>
      <div className={styles.tvBtnSmallHighlight}>
        <div className={styles.tvBtnSmallHighlightInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse52.svg`} />
        </div>
      </div>

      {/* ── Dots pattern (left side) ── */}
      <DotPattern />

      {/* ── Legs ── */}
      <div className={styles.legCenter}>
        <div className={styles.legCenterInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector14.svg`} />
        </div>
      </div>
      <div className={styles.legLeft}>
        <div className={styles.legLeftRotate}>
          <div className={styles.legLeftShape}>
            <div className={styles.legLeftInner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector15.svg`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legRight}>
        <div className={styles.legRightRotate}>
          <div className={styles.legRightShape}>
            <div className={styles.legRightInner}>
              <img alt="" className={styles.imgFill} src={`${IMG}/vector16.svg`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Dot pattern sub-component ── */

/** Dot data — each entry is [left, top, variant] */
const DOT_DATA: Array<[number, number, 'pink' | 'white' | 'light']> = [
  [15, 201, 'pink'],
  [1, 215, 'white'], [15, 215, 'pink'],
  [1, 229, 'white'], [-13, 229, 'light'], [15, 229, 'pink'],
  [1, 243, 'white'], [-13, 243, 'light'], [15, 243, 'pink'],
  [15, 257, 'pink'], [1, 257, 'white'], [-13, 257, 'light'],
  [15, 271, 'pink'], [1, 271, 'white'], [-13, 271, 'light'],
  [15, 285, 'pink'], [1, 285, 'white'],
  [15, 299, 'pink'],
];

const DOT_SOURCES: Record<string, string> = {
  pink: `${IMG}/ellipse53.svg`,
  white: `${IMG}/ellipse61.svg`,
  light: `${IMG}/ellipse65.svg`,
};

function DotPattern() {
  return (
    <>
      {DOT_DATA.map(([left, top, variant], i) => (
        <div key={i} className={styles.dot5px} style={{ left, top }}>
          {variant === 'pink' ? (
            <div className={styles.dotInsetA}>
              <img alt="" className={styles.imgFill} src={DOT_SOURCES[variant]} />
            </div>
          ) : (
            <img
              alt=""
              className={styles.imgFill}
              style={{ position: 'absolute', inset: 0 }}
              src={DOT_SOURCES[variant]}
            />
          )}
        </div>
      ))}
    </>
  );
}
