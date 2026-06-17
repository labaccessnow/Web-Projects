// Astro 5 Content Layer — a typed content collection from local Markdown.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  }),
};
