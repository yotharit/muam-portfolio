'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './animation.module.css';
import { animationPackages } from '@/data/animation';

const IMG = '/images/animation';
const ARTBOARD_W = 393;
const ARTBOARD_H = 844;

function getDiskZIndex(diskIndex: number, activeIndex: number): number {
  if (diskIndex === activeIndex) return 3;
  if (diskIndex < activeIndex) return 2;
  return 1;
}

const GROOVES = [
  { left: 165.86, top: 645.41, mx: 12.95, my: -30.024 },
  { left: 297.95, top: 578.98, mx: -119.144, my: 36.405 },
  { left: 231.9, top: 612.2, mx: -53.097, my: 3.19 },
  { left: 364, top: 545.77, mx: -185.191, my: 69.62 },
  { left: 198.88, top: 628.81, mx: -20.074, my: -13.417 },
  { left: 330.97, top: 562.38, mx: -152.168, my: 53.012 },
  { left: 264.93, top: 595.59, mx: -86.121, my: 19.798 },
  { left: 397.02, top: 529.16, mx: -218.214, my: 86.227 },
  { left: 182.1, top: 637.24, mx: -3.299, my: -21.852 },
  { left: 314.2, top: 570.81, mx: -135.396, my: 44.577 },
  { left: 248.15, top: 604.03, mx: -69.346, my: 11.362 },
  { left: 380.25, top: 537.6, mx: -201.44, my: 77.792 },
  { left: 215.13, top: 620.63, mx: -36.326, my: -5.245 },
  { left: 347.22, top: 554.2, mx: -168.417, my: 61.184 },
  { left: 281.18, top: 587.42, mx: -102.37, my: 27.969 },
  { left: 413.27, top: 520.99, mx: -234.464, my: 94.398 },
] as const;

export default function AnimationPage() {
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

  const active = animationPackages[activeIndex];

  return (
    <div className={styles.page}>
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

        {/* ── Red indicator pill (Disk A only) ── */}
        {activeIndex === 0 && <div className={styles.pill} />}

        {/* ── Disk A layer ── */}
        <div className={styles.diskLayer} style={{ zIndex: getDiskZIndex(0, activeIndex) }}>
          <div
            className={styles.diskA}
            onClick={() => setActiveIndex(0)}
            onFocus={() => setActiveIndex(0)}
            tabIndex={0}
          >
            <div className={styles.diskAImg}>
              <img alt="Package A disk" className={styles.imgFill} src={`${IMG}/group53.svg`} />
            </div>
          </div>
        </div>

        {/* ── Disk B layer ── */}
        <div className={styles.diskLayer} style={{ zIndex: getDiskZIndex(1, activeIndex) }}>
          <div
            className={styles.diskBMain}
            onClick={() => setActiveIndex(1)}
            onFocus={() => setActiveIndex(1)}
            tabIndex={0}
          >
            <div className={styles.diskBMainImg}>
              <img alt="Package B disk" className={styles.imgFill} src={`${IMG}/subtract.svg`} />
            </div>
          </div>

          {GROOVES.map((g, i) => (
            <div
              key={i}
              className={styles.groove}
              style={{ left: g.left, top: g.top }}
            >
              <div className={styles.grooveInner}>
                <div
                  className={styles.grooveBar}
                  style={{ maskPosition: `${g.mx}px ${g.my}px` }}
                />
              </div>
            </div>
          ))}

          <div className={styles.diskBSubtract1}>
            <div className={styles.diskBSubtract1Img}>
              <img alt="" className={styles.imgFill} src={`${IMG}/subtract1.svg`} />
            </div>
          </div>
          <div className={styles.diskBSubtract2}>
            <div className={styles.diskBSubtract2Img}>
              <img alt="" className={styles.imgFill} src={`${IMG}/subtract2.svg`} />
            </div>
          </div>
        </div>

        {/* ── Laptop frame ── */}
        <div className={styles.laptopOuter} />
        <div className={styles.laptopInner} />
        <div className={styles.screenWrap}>
          <img
            alt={`${active.name} preview`}
            className={styles.screenImg}
            src={active.screen}
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

        {/* ── Disk C layer ── */}
        <div className={styles.diskLayer} style={{ zIndex: getDiskZIndex(2, activeIndex) }}>
          <div
            className={styles.diskC}
            onClick={() => setActiveIndex(2)}
            onFocus={() => setActiveIndex(2)}
            tabIndex={0}
          >
            <div className={styles.diskCImg}>
              <img alt="Package C disk" className={styles.imgFill} src={`${IMG}/group54.svg`} />
            </div>
          </div>
        </div>

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

        {/* ── Package labels ── */}
        <p className={styles.labelA}>Package A</p>
        <p className={styles.labelC}>Package C</p>
        <p className={styles.labelB}>Package B</p>

        {/* ── Keyboard decoration ── */}
        <div className={styles.group58}>
          <div className={styles.group58Img}>
            <img alt="" className={styles.imgFill} src={`${IMG}/group58.svg`} />
          </div>
        </div>

      </div>
    </div>
  );
}
