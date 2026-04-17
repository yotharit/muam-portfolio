import { Package } from '@/types/commission';
import styles from './PackageDetail.module.css';

interface PackageDetailProps {
  pkg: Package;
}

export default function PackageDetail({ pkg }: PackageDetailProps) {
  return (
    <div className={styles.detailContainer} key={pkg.id}>
      <div className={styles.header}>
        <h2 className={styles.name}>{pkg.name}</h2>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{pkg.price}</span>
          <span className={styles.currency}>{pkg.currency}</span>
        </div>
      </div>
      
      <p className={styles.description}>{pkg.description}</p>
      
      <div className={styles.infoGrid}>
        <div className={styles.infoCol}>
          <h4 className={styles.infoSect}>Deliverables</h4>
          <ul className={styles.list}>
            {pkg.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.infoCol}>
          <h4 className={styles.infoSect}>Details</h4>
          <ul className={styles.list}>
            <li><strong>Turnaround:</strong> {pkg.turnaroundDays} Days</li>
            <li><strong>Revisions:</strong> {pkg.revisions}</li>
            {pkg.extras && pkg.extras.map((extra, index) => (
              <li key={index} className={styles.extra}>+ {extra}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {pkg.sampleImage && (
        <div 
          className={styles.sampleImage} 
          style={{ backgroundImage: `url(${pkg.sampleImage})` }} 
        />
      )}
      
      <div className={styles.actionContainer}>
        <a href={pkg.ctaLink} className={styles.ctaButton}>{pkg.ctaText}</a>
      </div>
    </div>
  );
}
