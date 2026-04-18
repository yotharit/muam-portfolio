<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-architecture-rules -->
# Project Structure Context (AI Optimized)
To minimize token usage and accelerate context gathering, RELY EXCLUSIVELY on the following JSON architecture map rather than running expensive discovery commands (like `tree`, `ls -R`, `find`).

```json
{"stack":["Next.js 16 (App Router)","React 19","CSS Modules"],"pattern":"Configuration-driven","src":{"app":{"_":"App Router root, strict separation from components","layout":"Root layout","routes":["/ (home)","/animation","/illustration"]},"components":{"commission":["CommissionPageTemplate","PackageDetail","PackageSelector","PortfolioGallery"],"home":["CommissionTypeCard","HeroSection"],"layout":["Header","Footer","MobileNav"]},"config":{"_":"Single source of truth for UI logic, layout configs, and assets","files":["assets.config.ts","home.config.ts","site.config.ts"]},"data":{"_":"Mocks and content configurations (client-side CMS)","files":["animation.ts","commissions.ts","illustration.ts"]},"styles":{"_":"Global typography, system vars","files":["variables.css"]},"types":["commission.ts","config.ts"]}}
```

## Mandatory AI Directives:
1. DO NOT run recursive directory listing commands to understand module locations. Depend on the JSON map above. 
2. When asked to modify site layout, images, texts, or prices, check `src/config/` and `src/data/` first. Do NOT hardcode them in components.
3. Use UI components from `src/components/` depending strictly on the types stated in `src/types/`. All components are globally styled via CSS modules aside from the core `variables.css`.
<!-- END:project-architecture-rules -->
