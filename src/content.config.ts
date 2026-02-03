import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    venue: z.string(),
    year: z.number(),
    topic: z.string(),
    authors: z.array(z.string()).default([]),
    doi: z.string().optional(),
    pdfUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    citation: z.string().optional(),
  }),
});

const journals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publicationVenue: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    externalUrl: z.string().optional(),
    peerReviewed: z.boolean().default(true),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    type: z.enum(['talk', 'keynote', 'workshop', 'panel', 'poster']).default('talk'),
    url: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { blog, papers, journals, talks };
