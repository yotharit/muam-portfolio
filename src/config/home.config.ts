import { HomeConfig } from '@/types/config';

export const homeConfig: HomeConfig = {
  hero: {
    heading: 'Commissions Open',
    subheading: 'Bringing your ideas to life through illustration and animation.',
    backgroundImage: '/images/hero/home-hero.jpg',
    ctaText: 'View Commission Types',
    ctaLink: '#commissions',
  },
  commissionCards: [
    {
      commissionSlug: 'illustration',
      image: '/images/hero/illustration-card.jpg',
      title: 'Illustration',
      tagline: 'Custom artwork tailored to your vision',
      href: '/illustration',
    },
    {
      commissionSlug: 'animation',
      image: '/images/hero/animation-card.jpg',
      title: 'Animation',
      tagline: 'Motion that tells your story',
      href: '/animation',
    },
  ],
};
