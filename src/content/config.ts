import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      primary_cta: z.string(),
      secondary_cta: z.string(),
    }).optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/events" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    location: z.string(),
    type: z.enum(['concert', 'rehearsal', 'play day', 'other']),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'pages': pages,
  'events': events,
};
