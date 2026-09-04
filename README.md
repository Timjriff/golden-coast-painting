# Golden Coast Paintings

Responsive painting-company site. The same App Router source supports the Sites preview and a native Next.js 16 build for Vercel.

## Run
- `npm ci`
- `npm run dev` — Sites/Vinext preview
- `npm run dev:next` — native Next.js preview
- `npm run build:vercel` — production static export in `out/`
- Vercel uses the included `vercel.json` settings.

## Before a public launch
1. Confirm the location, business hours, service-area cities, and service commitments.
2. Replace sample testimonials with approved customer reviews.
3. Replace inspiration photography with company-project photos as available.
4. Set SITE_URL to the verified public origin and SITE_LAUNCH_READY=true; update robots.txt and add a sitemap for the final domain.

Booking email: GoldenCoastpaintings@gmail.com. Calls: (949) 735-4026. Contact values live in lib/business.ts. The estimate form validates details and opens a mailto draft with a copyable summary fallback. Visitors must send the email themselves; the website does not store or directly deliver submissions.

## Imagery
Stock inspiration downloaded from Unsplash image IDs: photo-1600596542815-ffad4c1539a9, photo-1600210492486-724fe5c67fb0, photo-1497366754035-f200968a6e72, photo-1616486338812-3dadae4b4ace. These are not Golden Coast Paintings projects. Replace with company photography before presenting them as portfolio work.

The original logo is retained at public/images/golden-coast-logo.jpg. The website uses public/images/golden-coast-logo-transparent.png, with the gray background removed. The website company name is Golden Coast Paintings. Header and footer show the original architectural emblem alongside the company name.

## Verified interactions
Gallery category filtering, expandable FAQs, required-field validation, email estimate summary, mobile navigation, local image loading, and no horizontal overflow at phone width.

## Hero video
The first screen is an edge-to-edge, full-viewport painting video extending behind the transparent navigation. Landscape and portrait MP4 sources are served locally. Playback is muted and looping, with a pause/play control, still-image fallback, and respect for reduced-motion preferences.

Stock footage (Mixkit Stock Video Free License; commercial website use allowed on the source pages):
- Desktop: https://mixkit.co/free-stock-video/painting-a-wall-in-a-new-house-2296/
- Mobile: https://mixkit.co/free-stock-video/a-brush-painting-on-a-blue-wall-2308/
These clips illustrate painting, and do not depict Golden Coast Paintings staff or projects.
