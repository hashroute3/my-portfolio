# Research Portfolio — Astro + Netlify

Personal professional website for researchers and authors: profile, research journals, papers, blog, and contributions. Built with **Astro**, **Tailwind CSS**, and deployed on **Netlify**.

## Features

- **Static-first**: Fast, minimal, dark-mode by default
- **Content collections**: Blog (MDX), papers, journals, talks — all in Markdown/MDX
- **SEO**: Meta tags, Open Graph, sitemap (`@astrojs/sitemap`)
- **Blog**: Tags, reading time, syntax highlighting (Shiki), RSS at `/blog/rss.xml`
- **Papers**: Filter by year and topic; abstract, citation, PDF/DOI links
- **Contact**: Netlify form support, social links, optional CV download

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Deploying to Netlify

### One-click deploy

1. Click **Deploy to Netlify** (use the [Netlify template](https://www.netlify.com/integrations/community-built/astro-platform-starter-template/) or connect this repo).
2. Netlify will use the repo’s `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20 (set in `netlify.toml`)

### Deploy from Git

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**.
3. Select the repo; Netlify reads `netlify.toml` automatically.
4. (Optional) Set **Site URL** in Netlify and in `astro.config.mjs` → `site: 'https://your-site.netlify.app'` so the sitemap and RSS use the correct domain.

### Environment variables

- **Optional**: `SITE_URL` — override for sitemap/RSS if different from Netlify’s assigned URL.
- Document any other vars (e.g. analytics) in `.env.example`.

## Project structure

```
src/
├── content/
│   ├── blog/       # MDX/Markdown posts (tags, reading time)
│   ├── papers/     # Authored papers (year, topic, abstract, citation, PDF)
│   ├── journals/   # Research & journal entries
│   └── talks/      # Talks, keynotes, workshops
├── layouts/        # BaseLayout (dark, SEO meta)
├── components/     # Header, Footer, HighlightCard
├── pages/          # Routes (index, about, research, papers, blog, talks, contact)
└── styles/         # global.css (Tailwind)
```

## Customization guide

### Add a new blog post

1. Create a file in `src/content/blog/`, e.g. `my-post.mdx`.
2. Frontmatter:

```yaml
title: "Post title"
description: "Short description for SEO and listing."
publishDate: 2025-02-01
tags: ["tag1", "tag2"]
draft: false
```

3. Write content in MDX (Markdown + JSX). Code blocks use Shiki (dark theme). For images, use Astro’s `<Image>` component or `loading="lazy"` on `<img>` for lazy loading.

### Add a new paper

1. Create `src/content/papers/my-paper.md`.
2. Frontmatter:

```yaml
title: "Paper title"
abstract: "Abstract text."
venue: "Conference or Journal Name"
year: 2024
topic: "Topic"   # Used for filter on /papers/
authors: ["Name"]
citation: "Full citation string."
pdfUrl: "https://..."
doi: "10.1234/..."
externalUrl: "https://..."
```

3. Optional body for the paper page (methodology, acknowledgments).

### Add a journal entry

1. Create `src/content/journals/entry.md`.
2. Frontmatter:

```yaml
title: "Article title"
summary: "Short summary."
publicationVenue: "Journal name"
year: 2024
doi: "10.1234/..."
externalUrl: "https://..."
peerReviewed: true
```

### Add a talk

1. Create `src/content/talks/talk.md`.
2. Frontmatter:

```yaml
title: "Talk title"
event: "Conference name"
date: 2024-06-15
type: talk   # talk | keynote | workshop | panel | poster
location: "City or Virtual"
url: "https://..."
```

### Site identity and CV

- **Site name**: Edit `Research Portfolio` in `src/components/Header.astro` and `src/components/Footer.astro`.
- **Home headline**: Edit `src/pages/index.astro` (headline, summary, CTA buttons).
- **CV**: Place your PDF in `public/cv.pdf` and link from Contact (`/contact/#cv`). The link is already `/cv.pdf`.

### About and Contact

- **About**: Edit `src/pages/about/index.astro` (biography, expertise, highlights, awards, timeline).
- **Contact**: Edit `src/pages/contact/index.astro` (social links, form). Netlify will pick up forms with `data-netlify="true"` after deploy.

## Scripts

| Command       | Action                           |
| ------------- | -------------------------------- |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview production build locally |

## Tech stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: Markdown + MDX, content collections (schemas in `src/content.config.ts`)
- **Deploy**: Netlify (static; `netlify.toml` included)

## License

Private / All rights reserved (or add your license).
