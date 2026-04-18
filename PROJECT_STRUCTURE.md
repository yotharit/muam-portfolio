# Project Structure & Architecture

This project is built using a **Next.js (App Router)** and **React** stack, favoring a clean separation of concerns and a **configuration-driven architecture** for easier maintenance and content updates.

Below is an overview of the core directories and modules located in the `src/` folder.

---

## Directory Overview

```text
src/
├── app/          # Next.js App Router root
├── components/   # UI Component library
├── config/       # Global site configurations
├── data/         # Mock data and content
├── styles/       # Global styling and CSS variables
└── types/        # TypeScript type definitions
```

---

## Modules Breakdown

### 1. `app/` (Routing & Pages)
Responsible for defining the routes and high-level page layouts of the application using Next.js 13+ App Router conventions.
- **`layout.tsx`**: The main root layout wrapping all pages (e.g., configuring global HTML/body tags or global wrappers).
- **`page.tsx`**: The main landing/home page route.
- **`animation/page.tsx`**, **`illustration/page.tsx`**: Routes for the individual commission categories.

### 2. `components/` (UI Components)
Contains all reusable and modular UI components, organized by domain/feature. They use generic CSS modules (e.g., `*.module.css`) for localized styling.
- **`layout/`**: Global layout wrappers such as `<Header />`, `<Footer />`, and `<MobileNav />`.
- **`home/`**: Components specific to the landing page experience, including `<HeroSection />` and `<CommissionTypeCard />`.
- **`commission/`**: Specialized components for displaying commission information (e.g., `<CommissionPageTemplate />`, parameterization in `<PackageDetail />`, `<PackageSelector />`, and image visualizers in `<PortfolioGallery />`).

### 3. `config/` (Configuration Layer)
The heart of the application's configuration-driven approach. It allows developers and site owners to govern site-wide behaviors without editing the core logic. 
- **`site.config.ts`**: Global site settings (e.g., basic metadata, overall theme config).
- **`home.config.ts`**: Specific configuration layout for the home page.
- **`assets.config.ts`**: Manages asset paths and image URLs to avoid hard-coded strings throughout the project.

### 4. `data/` (Content Data)
Acts as the static database/CMS layer of the client-side app. It decouples the raw text content/prices/deliverables from the component logic.
- **`commissions.ts`**: General information about standard commission processes.
- **`animation.ts`**, **`illustration.ts`**: Specific data structures and package details (pricing, features, portfolio samples) for animation and illustration commissions.

### 5. `styles/` (Global Styles)
Handles application-wide design rules.
- **`variables.css`**: Defines CSS variables like global theme colors, typography scales, layout dimensions, and responsive breakpoints, serving as the basis for the application's design system.

### 6. `types/` (TypeScript Types)
Strict typing guarantees that configurations, data, and props flow seamlessly through the application.
- **`config.ts`**: Interface declarations for the configuration files.
- **`commission.ts`**: Domain-specific types defining what a 'Commission', 'Package', or 'Portfolio Item' actually means in data structures.
