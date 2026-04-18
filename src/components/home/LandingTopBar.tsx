import styles from './LandingTopBar.module.css';

const IMG = '/images/landing';

/**
 * The retro-style pink top bar with logo text and window controls.
 */
export default function LandingTopBar() {
  return (
    <>
      <div className={styles.topBar} />

      <p className={styles.logoText}>Mu•am</p>

      <div className={styles.windowControls}>
        <div className={styles.windowControlsInner}>
          <img alt="Window controls" className={styles.imgFill} src={`${IMG}/group48.svg`} />
        </div>
      </div>
    </>
  );
}
