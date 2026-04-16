import { AssetsConfig } from '@/types/config';

export const assetsConfig: AssetsConfig = {
  hero: {
    home: '/images/hero/home-hero.jpg',
    illustration: '/images/hero/illustration-hero.jpg',
    animation: '/images/hero/animation-hero.jpg',
  },
  portfolio: {
    illustration: [
      '/images/portfolio/illust-01.jpg',
      '/images/portfolio/illust-02.jpg',
      // ... add more
    ],
    animation: [
      '/images/portfolio/anim-01.jpg',
      '/images/portfolio/anim-02.jpg',
      // ... add more
    ],
  },
  packages: {
    'illust-basic': '/images/packages/illust-basic-sample.jpg',
    'illust-standard': '/images/packages/illust-standard-sample.jpg',
    'illust-premium': '/images/packages/illust-premium-sample.jpg',
    // ... animation packages
  },
  og: {
    home: '/images/og/home.jpg',
    illustration: '/images/og/illustration.jpg',
    animation: '/images/og/animation.jpg',
  },
  icons: {
    logo: '/images/icons/logo.svg',
    twitter: '/images/icons/twitter.svg',
    instagram: '/images/icons/instagram.svg',
  },
};
