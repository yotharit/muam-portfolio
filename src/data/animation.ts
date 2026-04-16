import { CommissionType } from '@/types/commission';

export const animationCommission: CommissionType = {
  id: 'animation',
  slug: 'animation',
  name: 'Animation',
  tagline: 'Motion that tells your story',
  description: 'High-quality custom animations for personal and commercial use.',
  heroImage: '/images/hero/animation-hero.jpg',
  ogImage: '/images/og/animation.jpg',
  seo: {
    title: 'Animation Commissions — Artist Name',
    description: 'Commission custom animations. Choose from multiple packages.',
    ogImage: '/images/og/animation.jpg',
  },
  packages: [
    {
      id: 'anim-basic',
      name: 'Basic Animation',
      description: 'Simple loops and short animations.',
      price: '$XX',
      currency: 'USD',
      deliverables: [
        'Short loop (up to 5s)',
        'Simple background',
        'MP4 and GIF formats',
      ],
      turnaroundDays: 14,
      revisions: 2,
      sampleImage: '/images/packages/anim-basic-sample.jpg',
      ctaText: 'Request Basic',
      ctaLink: 'mailto:commissions@artist.com?subject=Basic%20Animation',
    },
    // Add more packages as needed
  ],
  portfolioSamples: [
    {
      id: 'anim-sample-01',
      src: '/images/portfolio/anim-01.jpg',
      alt: 'Animation sample 1',
      width: 1200,
      height: 800,
    },
    // ... more samples
  ],
};
