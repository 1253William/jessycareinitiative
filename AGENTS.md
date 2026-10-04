# Project architecture
- Keep public routes in React Router and preserve legacy aliases, so existing links remain valid.
- Keep gallery and event records in typed data modules and share the media viewer, so new content can be added without editing layouts.
- Use Vite environment configuration for the Basin form endpoint and never report a submission as successful without an accepted response.
- Keep uploaded brand images in public/brand and derive the favicon from the supplied mark so static hosting serves them directly.
