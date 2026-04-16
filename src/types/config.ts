export interface SiteConfig {
  name: string;                    // Artist / brand name
  logo: string;                    // Path to logo image
  tagline: string;
  navigation: NavItem[];
  footer: FooterConfig;
  socials: SocialLink[];
  contact: ContactConfig;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterConfig {
  copyright: string;               // e.g., "© 2026 ArtistName"
  showSocials: boolean;
  additionalLinks: NavItem[];
}

export interface SocialLink {
  platform: string;                // "twitter" | "instagram" | "pixiv" | etc.
  url: string;
  icon: string;                    // Path to icon or icon component name
}

export interface ContactConfig {
  email: string;
  formUrl?: string;                // External form link if used
}

export interface HomeConfig {
  hero: HeroConfig;
  commissionCards: CommissionCardConfig[];
}

export interface HeroConfig {
  heading: string;
  subheading: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface CommissionCardConfig {
  commissionSlug: string;          // Links to CommissionType.slug
  image: string;
  title: string;
  tagline: string;
  href: string;
}

export interface AssetsConfig {
  hero: Record<string, string>;          // key → image path
  portfolio: Record<string, string[]>;   // commissionSlug → image paths
  packages: Record<string, string>;      // packageId → image path
  og: Record<string, string>;            // page slug → OG image path
  icons: Record<string, string>;         // icon name → path
}
