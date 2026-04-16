export interface Package {
  id: string;
  name: string;               // e.g., "Basic", "Standard", "Premium"
  description: string;
  price: string;               // e.g., "$50", "Starting at $120"
  currency: string;            // e.g., "USD", "THB"
  deliverables: string[];
  turnaroundDays: number;
  revisions: number;
  featured?: boolean;          // Highlight as recommended
  sampleImage?: string;        // Path to a sample for this tier
  extras?: string[];           // Additional perks (e.g., "Commercial license")
  ctaText: string;             // e.g., "Request Commission"
  ctaLink: string;             // e.g., mailto: or form URL
}

export interface CommissionType {
  id: string;
  slug: string;                // "illustration" | "animation"
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  ogImage: string;             // Open Graph image for this page
  packages: Package[];
  portfolioSamples: PortfolioItem[];
  seo: PageSEO;                // SEO metadata for this page
}

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;           // Optional tag for filtering
}

export interface PageSEO {
  title: string;
  description: string;
  ogImage: string;
}
