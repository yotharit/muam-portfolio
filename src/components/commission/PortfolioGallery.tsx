import { PortfolioItem } from '@/types/commission';
import styles from './PortfolioGallery.module.css';

interface PortfolioGalleryProps {
  samples: PortfolioItem[];
}

export default function PortfolioGallery({ samples }: PortfolioGalleryProps) {
  return (
    <div className={styles.gallery}>
      <h3 className={styles.title}>Portfolio Samples</h3>
      <div className={styles.grid}>
        {samples.map((item) => (
          <div key={item.id} className={styles.imageContainer}>
             <div 
               className={styles.image} 
               style={{ backgroundImage: `url(${item.src})` }}
               aria-label={item.alt}
             />
          </div>
        ))}
      </div>
    </div>
  );
}
