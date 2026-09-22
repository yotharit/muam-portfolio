import styles from './BottomScene.module.css';

const IMG = '/images/landing';

/**
 * The bottom area of the landing illustration:
 * snack/cake, bread/sandwich, and decorative stars.
 */
export default function BottomScene() {
  return (
    <>
      {/* ── Bread / sandwich ── */}
      <div className={styles.breadBottom2}>
        <div className={styles.breadBottom2Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector24.svg`} />
        </div>
      </div>
      <div className={styles.breadBottom1}>
        <div className={styles.breadBottom1Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector23.svg`} />
        </div>
      </div>
      <div className={styles.breadOuter}>
        <div className={styles.breadOuterInner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/ellipse71.svg`} />
        </div>
      </div>
      <div className={styles.breadTop2}>
        <div className={styles.breadTop2Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector22.svg`} />
        </div>
      </div>
      <div className={styles.breadTop1}>
        <div className={styles.breadTop1Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/vector23.svg`} />
        </div>
      </div>

      {/* ── Stars ── */}
      {STARS.map((star, i) => (
        <div key={i} className={styles.starWrap} style={{ left: star.left, top: star.top }}>
          <div className={styles.starRotate}>
            <div className={styles.starShape}>
              <div className={styles[star.insetClass]}>
                <img alt="" className={styles.imgFill} src={star.src} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

interface StarData {
  left: number;
  top: number;
  insetClass: 'star1Inset' | 'star2Inset' | 'star3Inset';
  src: string;
}

const STARS: StarData[] = [
  { left: 181, top: 789, insetClass: 'star3Inset', src: `${IMG}/star3.svg` },
  { left: 224, top: 769, insetClass: 'star2Inset', src: `${IMG}/star2.svg` },
  { left: 242.79, top: 799.46, insetClass: 'star1Inset', src: `${IMG}/star1.svg` },
];
