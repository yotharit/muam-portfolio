import Link from 'next/link';
import styles from './AnimationBanner.module.css';

const IMG = '/images/landing';

/**
 * The "Animation" banner ribbon with decorative bubbles,
 * linking to the animation commissions page.
 */
export default function AnimationBanner() {
  return (
    <>
      <div className={styles.animGroup}>
        {/* ── Banner ── */}
        <div className={styles.animBanner}>
          <div className={styles.animBannerInner}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector57.svg`} />
          </div>
        </div>
        <Link href="/animation" className={styles.animText}>
          Animation
        </Link>

        {/* ── Bubbles ── */}
        <div className={styles.bubbleLarge}>
          <div className={styles.bubbleLargeRotate}>
            <div className={styles.bubbleLargeShape}>
              <div className={styles.bubbleLargeInner}>
                <img alt="" className={styles.imgFill} src={`${IMG}/ellipse111.svg`} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bubbleMedium}>
          <div className={styles.bubbleMediumRotate}>
            <div className={styles.bubbleMediumShape}>
              <div className={styles.bubbleMediumInner}>
                <img alt="" className={styles.imgFill} src={`${IMG}/ellipse112.svg`} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bubbleSmall}>
          <div className={styles.bubbleSmallRotate}>
            <div className={styles.bubbleSmallShape}>
              <div className={styles.bubbleSmallInner}>
                <img alt="" className={styles.imgFill} src={`${IMG}/ellipse113.svg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
