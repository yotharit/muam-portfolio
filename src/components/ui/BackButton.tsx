import Link from 'next/link';
import styles from './BackButton.module.css';

interface BackButtonProps {
  href: string;
}

/**
 * Fixed, safe-area-aware back link rendered outside the scaled artboard
 * so its tap target stays a consistent real-world size at any scale.
 */
export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} className={styles.backButton} aria-label="Back">
      <span className={styles.arrow}>‹</span>
    </Link>
  );
}
