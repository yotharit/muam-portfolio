import Link from 'next/link';
import { CommissionCardConfig } from '@/types/config';
import styles from './CommissionTypeCard.module.css';

interface CommissionTypeCardProps {
  card: CommissionCardConfig;
}

export default function CommissionTypeCard({ card }: CommissionTypeCardProps) {
  return (
    <Link href={card.href} className={styles.card}>
      <div 
        className={styles.imageContainer} 
        style={{ backgroundImage: `url(${card.image})` }}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.tagline}>{card.tagline}</p>
      </div>
    </Link>
  );
}
