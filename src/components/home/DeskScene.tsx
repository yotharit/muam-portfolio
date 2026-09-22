import Link from 'next/link';
import styles from './DeskScene.module.css';

const IMG = '/images/landing';

/**
 * The desk scene containing: cup, stacked books, and the open book that
 * fronts the Illustration link.
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

      {/* ── Open book ── */}
      <div className={styles.illuBook}>
        <img alt="" className={styles.imgFill} src={`${IMG}/illustration-book.svg`} />
      </div>

      {/* ── Illustration Section ── */}
      <div className={styles.illuGroup}>
        <div className={styles.illuBubble}>
          <div className={styles.illuBubbleRotate}>
            <div className={styles.illuBubbleShape}>
              <div className={styles.illuBubbleInner}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector58.svg`} />
              </div>
            </div>
          </div>
        </div>
        <Link href="/illustration" className={styles.illuText}>
          Illustration
        </Link>
      </div>
    </>
  );
}
