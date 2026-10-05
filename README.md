# The Jessicare Initiative

A static-exportable React + Vite website for community health education and outreach. Build with `npm install && npm run build`; the static files are generated in `dist/` and require a host that falls back to `index.html` for client-side routes.

## Contact form

Create a Basin form at usebasin.com, then set `VITE_BASIN_ENDPOINT` to the form URL (`https://usebasin.com/f/...`) in the deployment environment. `.env.example` shows the required variable. Contact, volunteer, and partnership submissions all use this endpoint. Without it the forms cannot send.

## Search visibility and deployment

Set `VITE_SITE_URL` to the public HTTPS origin before building. Route titles, descriptions, canonical links, and social metadata use this value. If the public origin changes, also update the absolute URLs and structured-data URLs in `index.html`, plus the sitemap URL in `public/robots.txt` and `public/sitemap.xml`.

The build includes a crawlable sitemap and organization structured data. Vercel deployments use the `dist/` output; `vercel.json` configures SPA route fallback and baseline security headers. Set `VITE_BASIN_ENDPOINT` and `VITE_SITE_URL` in the Vercel project environment before building.

`npm audit` reports unresolved high-severity advisories in Tailwind CSS 3's development/build dependency chain (`braces` and dependents); npm currently reports no patched version. These packages are not shipped as runtime assets, and the app does not process user-controlled file patterns. Keep build inputs and dependencies trusted, and re-evaluate this finding when a compatible patch or approved Tailwind upgrade is available.

## Content to replace before publishing

- Gallery: the supplied 2025 Health Awareness & Free Health Outreach photos are included from Cloudinary in `src/data/gallery.ts`. Add future verified photos and videos there as they become available.
- Events: update event dates, venue, registration link, descriptions, and imagery in `src/data/events.ts` when confirmed. The November 2026 venue and programme details are still to be confirmed.
- Contact: the public email is `thejessicareinitiative@gmail.com` and the phone is `+233 (0) 55 753 4146`. Add verified street address and social URLs when available.
- Donate: supply verified bank and mobile money account details before inviting payments.
- Testimonials and impact figures on the existing site should be verified with the organization before publication.

Public routes include `/`, `/about/who-we-are`, `/about/what-we-do`, `/projects`, `/projects/gallery`, `/events`, `/events/:slug`, `/contact`, and the legacy `/projects/events` alias. The donation route is temporarily disabled and can be restored from its commented route in `src/App.tsx`.
