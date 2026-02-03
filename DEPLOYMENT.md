# Deployment instructions (Netlify)

## One-click deploy

1. **From Netlify UI**
   - Log in to [Netlify](https://app.netlify.com).
   - **Add new site** → **Import an existing project**.
   - Connect your Git provider and select this repository.
   - Netlify will read `netlify.toml` and set:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: 20
   - Click **Deploy site**.

2. **From Netlify template**
   - Use the [Astro Platform Starter](https://www.netlify.com/integrations/community-built/astro-platform-starter-template/) or “Deploy to Netlify” button if this repo is offered as a template.
   - Authorize Netlify and select the repo; build settings are taken from `netlify.toml`.

## Build settings (reference)

These are already in `netlify.toml`; you only need to change them if you use a different config file or override in the UI.

| Setting           | Value           |
|-------------------|-----------------|
| Build command     | `npm run build` |
| Publish directory | `dist`          |
| Node version      | 20              |

## Environment variables

- **Optional**: In Netlify → **Site settings** → **Environment variables**, add:
  - `SITE_URL` = `https://your-site-name.netlify.app` (or your custom domain)  
  Used by the sitemap and RSS if you set `site` in `astro.config.mjs` from this variable.
- For Astro’s `site` in `astro.config.mjs`, set it to your production URL so the sitemap and Open Graph URLs are correct.

## Forms (Contact)

The Contact page includes a form with `data-netlify="true"`. After the first deploy, Netlify will detect it. Submissions appear under **Forms** in the Netlify dashboard. No server code required.

## Edge Functions (optional)

The project is static by default. To use Netlify Edge Functions, add them under `netlify/edge-functions/` and configure in `netlify.toml`; you may need to switch to `@astrojs/netlify` with `output: 'server'` or `'hybrid'` for SSR routes that use the edge.

## Custom domain

1. Netlify → **Domain management** → **Add custom domain**.
2. Update `site` in `astro.config.mjs` and any `SITE_URL` env var to the custom domain.
3. Redeploy so the sitemap and RSS use the new URL.
