import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import MobileNav from './MobileNav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoText}>
              {siteConfig.name}
            </Link>
        </div>
        <nav className={styles.desktopNav}>
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileNavContainer}>
          <MobileNav navigation={siteConfig.navigation} />
        </div>
      </div>
    </header>
  );
}
