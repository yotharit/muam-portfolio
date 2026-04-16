import { homeConfig } from '@/config/home.config';
import HeroSection from '@/components/home/HeroSection';
import CommissionTypeCard from '@/components/home/CommissionTypeCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeroSection />
      
      <section id="commissions" className={styles.commissionsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Commission Services</h2>
          <div className={styles.grid}>
            {homeConfig.commissionCards.map((card) => (
              <CommissionTypeCard key={card.commissionSlug} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
