import styles from './illustration.module.css';

const IMG = '/images/illustration';

interface FolderTabProps {
  isActive: boolean;
  left: number;
  top: number;
  onMouseEnter: () => void;
}

export default function FolderTab({ isActive, left, top, onMouseEnter }: FolderTabProps) {
  const cls = isActive ? styles.folderOpen : styles.folderClose;
  const v = isActive
    ? { e1: 'vector28', e2: 'vector33', e3: 'vector32', e4: 'vector29', e5: 'vector30', e6: 'vector31' }
    : { e1: 'vector34', e2: 'vector35', e3: 'vector36', e4: 'vector37', e5: 'vector38', e6: 'vector39' };

  return (
    <div
      className={cls}
      style={{ left, top }}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
      onFocus={onMouseEnter}
      tabIndex={0}
    >
      <div className={styles.elem1}>
        <div className={styles.elem1Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e1}.svg`} />
        </div>
      </div>
      <div className={styles.elem2}>
        <div className={styles.elem2Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e2}.svg`} />
        </div>
      </div>
      <div className={styles.elem3}>
        <div className={styles.elem3Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e3}.svg`} />
        </div>
      </div>
      <div className={styles.elem4}>
        <div className={styles.elem4Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e4}.svg`} />
        </div>
      </div>
      <div className={styles.elem5}>
        <div className={styles.elem5Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e5}.svg`} />
        </div>
      </div>
      <div className={styles.elem6}>
        <div className={styles.elem6Inner}>
          <img alt="" className={styles.imgFill} src={`${IMG}/${v.e6}.svg`} />
        </div>
      </div>
    </div>
  );
}
