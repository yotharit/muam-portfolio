'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/config';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  navigation: NavItem[];
}

export default function MobileNav({ navigation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`${styles.line} ${isOpen ? styles.lineOpen1 : ''}`} />
        <span className={`${styles.line} ${isOpen ? styles.lineOpen2 : ''}`} />
        <span className={`${styles.line} ${isOpen ? styles.lineOpen3 : ''}`} />
      </button>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={styles.navLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
