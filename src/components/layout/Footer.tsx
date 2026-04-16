import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import styles from './Footer.module.css';

export default function Footer() {
  const { footer, socials } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.copyright}>{footer.copyright}</p>
          {footer.additionalLinks && footer.additionalLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>
        
        {footer.showSocials && (
          <div className={styles.socialsContainer}>
            {socials.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.platform}
              >
                <span>{social.platform.charAt(0).toUpperCase()}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
