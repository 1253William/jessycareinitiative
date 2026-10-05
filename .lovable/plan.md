# Hero and production-readiness fixes

## Goal
Make the home hero centered and readable at every screen size, restore permanently visible calls to action, and prepare the site for production.

## Changes
- Center the hero title, supporting text, and actions within a stable full-height content area.
- Give both hero actions explicit high-contrast colors in their normal, hover, focus, and keyboard states.
- Preserve the existing imagery, copy, slider behavior, palette, and page structure.
- Resolve current browser warnings caused by components that do not accept references correctly.
- Audit contact and volunteer submissions, links, routes, accessibility, production configuration, and known package vulnerabilities.
- Upgrade or remove vulnerable production packages where safe, then re-scan dependencies.
- Verify the home page and core flows at desktop and mobile sizes, including keyboard focus and browser errors.

## Production blockers
- Keep forms honest: they will show a configuration error until a real Basin endpoint is supplied.
- Do not invent missing contact, donation, event, social, testimonial, or impact details; any remaining placeholders will be reported before deployment.

## Technical details
- Use existing semantic color tokens and shared button controls.
- Keep React Router public routes and the legacy events alias unchanged.
- Validate with the preview, runtime logs, targeted checks, and the security scanners.
