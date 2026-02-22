import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahendranvasagam.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
    }),
    sitemap(),
  ],
  output: 'static',
});
