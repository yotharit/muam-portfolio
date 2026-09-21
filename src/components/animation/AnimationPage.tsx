'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './animation.module.css';
import { animationPackages } from '@/data/animation';
import { useArtboardScale } from '@/hooks/useArtboardScale';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import BackButton from '@/components/ui/BackButton';
import PackageDisk, { SLOTS } from './PackageDisk';

const IMG = '/images/animation';
const ARTBOARD_W = 393;
const ARTBOARD_H = 844;

export default function AnimationPage() {
  const canvasRef = useArtboardScale(ARTBOARD_W, ARTBOARD_H);
  const screenRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const active = animationPackages[activeIndex];

  /* The showreel autoplays, so honour a reduced-motion preference by holding it
   * on its first frame instead. Re-runs on package change because the <video>
   * is remounted with the new source. */
  useEffect(() => {
    const video = screenRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }
    // Autoplay can still be refused (low power mode, for one); the poster stays up.
    video.play().catch(() => {});
  }, [prefersReducedMotion, activeIndex]);

  /* Selecting a package rotates the whole set: the selected disk takes the
   * featured slot and the others follow in A→B→C order, exactly as the three
   * Figma frames show. */
  function getSlotIndex(packageIndex: number): number {
    return (packageIndex - activeIndex + SLOTS.length) % SLOTS.length;
  }

  return (
    <div className={styles.page}>
      <BackButton href="/" />
      <div className={styles.canvas} ref={canvasRef}>

        {/* ── Star ── */}
        <div className={styles.star}>
          <div className={styles.starInner}>
            <div className={styles.starImg}>
              <img alt="" className={styles.imgFill} src={`${IMG}/star32.svg`} />
            </div>
          </div>
        </div>

        {/* ── Background decorations ── */}
        <div className={styles.shelfBottom} />
        <div className={styles.verticalStripe} />
        <div className={styles.horizontalStripe} />

        <div className={styles.vector39}>
          <div className={styles.vector39Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector39.svg`} />
          </div>
        </div>

        <div className={styles.redBarWrap}>
          <div className={styles.redBarInner} />
        </div>

        <div className={styles.vector51}>
          <div className={styles.vector51Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector51.svg`} />
          </div>
        </div>

        <div className={styles.pinkSlantedWrap}>
          <div className={styles.pinkSlantedInner} />
        </div>

        {/* ── Main pink shelf ── */}
        <div className={styles.shelfMain} />

        {/* ── Laptop frame ── */}
        <div className={styles.laptopOuter} />
        <div className={styles.laptopInner} />
        <div className={styles.screenWrap}>
          <video
            key={active.video}
            ref={screenRef}
            className={`${styles.screenMedia} ${styles.screenMediaEnter}`}
            src={active.video}
            poster={active.poster}
            aria-label={`${active.name} showreel`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* ── Spools ── */}
        <div className={styles.spool1}>
          <div className={styles.spool1Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector52.svg`} />
          </div>
        </div>

        {/* ── Keyboard strips ── */}
        <div className={styles.keyboardTop} />
        <div className={styles.keyboardBottom} />

        <div className={styles.spool2}>
          <div className={styles.spool2Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector53.svg`} />
          </div>
        </div>

        {/* ── Arm elements ── */}
        <div className={styles.arm1Wrap}>
          <div className={styles.arm1Flip}>
            <div className={styles.arm1}>
              <div className={styles.arm1Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector44.svg`} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.arm2Wrap}>
          <div className={styles.arm2Flip}>
            <div className={styles.arm2}>
              <div className={styles.arm2Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector45.svg`} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.arm3Wrap}>
          <div className={styles.arm3Flip}>
            <div className={styles.arm3}>
              <div className={styles.arm3Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector48.svg`} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.arm4Wrap}>
          <div className={styles.arm4Flip}>
            <div className={styles.arm4}>
              <div className={styles.arm4Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector46.svg`} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.arm5Wrap}>
          <div className={styles.arm5Flip}>
            <div className={styles.arm5}>
              <div className={styles.arm5Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector47.svg`} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Cassette ── */}
        <div className={styles.cassetteWrap}>
          <div className={styles.cassetteFlip}>
            <div className={styles.cassette}>
              <div className={styles.cassetteImg}>
                <img alt="" className={styles.imgFill} src={`${IMG}/rectangle105.svg`} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Brown bar ── */}
        <div className={styles.brownBarWrap}>
          <div className={styles.brownBarFlip}>
            <div className={styles.brownBar} />
          </div>
        </div>

        {/* ── Thin pink strip ── */}
        <div className={styles.thinPinkStrip} />

        {/* ── Red indicator pill + disks ──
             The pill marks the featured slot in every Figma frame, so it is not
             tied to a package. It paints under the disks (Figma layer order). */}
        <div className={styles.pill} />

        {animationPackages.map((pkg, i) => (
          <PackageDisk
            key={pkg.letter}
            letter={pkg.letter}
            name={pkg.name}
            slotIndex={getSlotIndex(i)}
            isActive={i === activeIndex}
            onSelect={() => setActiveIndex(i)}
          />
        ))}

        {/* ── "Animation" title ── */}
        <p className={styles.title}>Animation</p>

        {/* ── Left strips ── */}
        <div className={styles.vector54}>
          <div className={styles.vector54Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/vector54.svg`} />
          </div>
        </div>

        <div className={styles.vector55Wrap}>
          <div className={styles.vector55Inner}>
            <div className={styles.vector55}>
              <div className={styles.vector55Img}>
                <img alt="" className={styles.imgFill} src={`${IMG}/vector55.svg`} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Keyboard decoration ── */}
        <div className={styles.group58}>
          <div className={styles.group58Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/group58.svg`} />
          </div>
        </div>

        {/* ── Selected package blurb ── */}
        {active.description && <p className={styles.description}>{active.description}</p>}

      </div>
    </div>
  );
}
