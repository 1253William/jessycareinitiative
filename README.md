# The Jessicare Initiative

A static-exportable React + Vite website for community health education and outreach. Build with `npm install && npm run build`; the static files are generated in `dist/` and require a host that falls back to `index.html` for client-side routes.

## Contact form

Create a Basin form at usebasin.com, then set `VITE_BASIN_ENDPOINT` to the form URL (`https://usebasin.com/f/...`) in the deployment environment. `.env.example` shows the required variable. Contact, volunteer, and partnership submissions all use this endpoint. Without it the forms cannot send.

## Content to replace before publishing

- Gallery: add verified photos under `public/assets/gallery/` and videos under `public/assets/gallery/videos/`, then add records in `src/data/gallery.ts`. Current gallery photos are the existing project imagery; no videos have been supplied.
- Events: update placeholder dates, venue, registration link, descriptions, and imagery in `src/data/events.ts` when confirmed. The November 2026 and 2025 entries are placeholders.
- Contact: supply the real email, phone, street address, and social URLs; placeholders are visible on the contact page and footer.
- Donate: supply verified bank and mobile money account details before inviting payments.
- Testimonials and impact figures on the existing site should be verified with the organization before publication.

Public routes include `/`, `/about/who-we-are`, `/about/what-we-do`, `/projects`, `/projects/gallery`, `/events`, `/events/:slug`, `/donate`, `/contact`, and the legacy `/projects/events` alias.
