# Golden Coast Painting

Responsive painting-company site. The same App Router source supports the Sites preview and a native Next.js 16 build for Vercel.

## Run
- `npm ci`
- `npm run dev` — Sites/Vinext preview
- `npm run dev:next` — native Next.js preview
- `npm run build:vercel` — production static export in `out/`
- Vercel uses the included `vercel.json` settings.

## Before a public launch
1. Replace the marked phone, email, location, and hours in `app/page.tsx`.
2. Confirm service-area cities and all service commitments.
3. Replace the clearly marked example testimonials with approved genuine reviews.
4. Replace inspiration photography with licensed company-project photos as available.
5. Set `quoteEndpoint` in `lib/business.ts` to an approved HTTPS service accepting JSON. Configure destination, spam protection, CORS, privacy policy and delivery. Test receipt with the business. No private keys belong in this client-side setting.
6. Remove or update the demo-specific form and privacy notices after connecting delivery.
7. Set `SITE_URL` to the verified public origin and `SITE_LAUNCH_READY=true`; update `public/robots.txt` to allow crawling and add a sitemap for the final domain.

The empty form endpoint is intentional: validation works, and the page creates a copyable summary while clearly stating that nothing was sent. No leads are persisted, no analytics are installed, and placeholders are not callable contact links.

## Imagery
Stock inspiration downloaded from Unsplash image IDs: photo-1600596542815-ffad4c1539a9, photo-1600210492486-724fe5c67fb0, photo-1497366754035-f200968a6e72, photo-1616486338812-3dadae4b4ace. These are not Golden Coast Painting projects. Replace with company photography before presenting them as portfolio work.

The social card `public/og.png` was created using built-in imagegen with this brief: Premium coastal Southern California brand card featuring a sunlit white coastal home, warm off-white, charcoal, muted gold and subtle coastal blue, with editorial serif “Golden Coast Painting” and “Beautiful spaces. Made golden.”

## Verified interactions
Gallery category filtering, expandable FAQs, required-field validation, demo estimate summary, mobile navigation, local image loading, and no horizontal overflow at phone width.

## Hero video
The first screen is an edge-to-edge, full-viewport painting video extending behind the transparent navigation. Landscape and portrait MP4 sources are served locally. Playback is muted and looping, with a pause/play control, still-image fallback, and respect for reduced-motion preferences.

Stock footage (Mixkit Stock Video Free License; commercial website use allowed on the source pages):
- Desktop: https://mixkit.co/free-stock-video/painting-a-wall-in-a-new-house-2296/
- Mobile: https://mixkit.co/free-stock-video/a-brush-painting-on-a-blue-wall-2308/
These clips illustrate painting, and do not depict Golden Coast Painting staff or projects.
