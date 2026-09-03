// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const foodblog = defineCollection(
  {
  loader: glob({ base: './src/content/foodblog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
    rating: z.object({
      food: z.number().min(0).max(5), 
      service: z.number().min(0).max(5),
      atmosphere: z.number().min(0).max(5),
    }),
    tags: z.array(z.string()),
    links: z.array(z.url()).optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});
const wiki = defineCollection({
  loader: glob({ base: './src/content/wiki', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    domain: z.number(),
    written: z.string(),
    finshed: z.boolean().optional(),
    tags: z.array(z.string()),
    related: z.array(z.string()),
    summary: z.string(),
    footnotes: z.array(z.string()),
  })
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { foodblog, wiki };