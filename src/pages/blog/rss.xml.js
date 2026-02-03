import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return rss({
    title: 'Research Portfolio — Blog',
    description: 'Technical and research-oriented blog posts.',
    site: context.site ?? 'https://your-site.netlify.app',
    items: posts.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishDate,
      link: `/blog/${entry.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
