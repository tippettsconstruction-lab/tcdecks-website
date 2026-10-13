import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Shorter <title> for search results when the headline runs long.
    metaTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
