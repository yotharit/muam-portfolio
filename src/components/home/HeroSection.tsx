import Link from 'next/link';
import { homeConfig } from '@/config/home.config';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { heading, subheading, backgroundImage, ctaText, ctaLink } = homeConfig.hero;

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
        <Link href={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
