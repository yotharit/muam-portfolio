import { SiteConfig } from '@/types/config';

export const siteConfig: SiteConfig = {
  name: 'Artist Name',
  logo: '/images/icons/logo.svg',
  tagline: 'Digital Art & Animation',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Illustration', href: '/illustration' },
    { label: 'Animation', href: '/animation' },
  ],
  footer: {
    copyright: '© 2026 Artist Name. All rights reserved.',
    showSocials: true,
    additionalLinks: [
      { label: 'Terms of Service', href: '/tos' },
    ],
  },
  socials: [
    { platform: 'twitter', url: 'https://twitter.com/artist', icon: '/images/icons/twitter.svg' },
    { platform: 'instagram', url: 'https://instagram.com/artist', icon: '/images/icons/instagram.svg' },
  ],
  contact: {
    email: 'commissions@artist.com',
  },
};
