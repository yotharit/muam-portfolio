import { Package } from '@/types/commission';
import styles from './PackageSelector.module.css';

interface PackageSelectorProps {
  packages: Package[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function PackageSelector({ packages, activeId, onSelect }: PackageSelectorProps) {
  return (
    <div className={styles.selectorContainer}>
      <div className={styles.tabs}>
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            className={`${styles.tab} ${activeId === pkg.id ? styles.activeTab : ''}`}
            onClick={() => onSelect(pkg.id)}
          >
            {pkg.name}
            {pkg.featured && <span className={styles.featuredBadge}>⭐</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
