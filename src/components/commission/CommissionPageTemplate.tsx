'use client';

import { useState } from 'react';
import { CommissionType } from '@/types/commission';
import PackageSelector from './PackageSelector';
import PackageDetail from './PackageDetail';
import PortfolioGallery from './PortfolioGallery';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './CommissionPageTemplate.module.css';

interface CommissionPageTemplateProps {
  commission: CommissionType;
}

export default function CommissionPageTemplate({ commission }: CommissionPageTemplateProps) {
  const [activePackageId, setActivePackageId] = useState<string>(
    commission.packages[0]?.id || ''
  );

  const activePackage = commission.packages.find((p) => p.id === activePackageId);

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <header className={styles.hero} style={{ backgroundImage: `url(${commission.heroImage})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{commission.name}</h1>
          <p className={styles.tagline}>{commission.tagline}</p>
          <p className={styles.description}>{commission.description}</p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.packagesSection}>
          <h2 className={styles.sectionTitle}>Commission Packages</h2>
          
          {commission.packages.length > 0 && (
            <>
              <PackageSelector 
                packages={commission.packages} 
                activeId={activePackageId} 
                onSelect={setActivePackageId} 
              />
              
              <div className={styles.detailWrapper}>
                {activePackage && <PackageDetail pkg={activePackage} />}
              </div>
            </>
          )}
        </section>

        {commission.portfolioSamples.length > 0 && (
          <section className={styles.gallerySection}>
            <PortfolioGallery samples={commission.portfolioSamples} />
          </section>
        )}
      </main>
    </div>
    <Footer />
    </>
  );
}
