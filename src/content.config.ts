import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const verticals = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/verticals' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    role: z.string(),
    industryLabel: z.string(),
    tagline: z.string(),
    summary: z.string(),
    accentHex: z.string(),
    accentSoft: z.string(),
    heroImg: z.string(),
    heroAlt: z.string(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
      }),
    ),
    useCases: z.array(
      z.object({ title: z.string(), description: z.string() }),
    ),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { verticals };
