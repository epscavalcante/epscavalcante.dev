import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).default([]),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url().refine(
        (value) => ['http:', 'https:'].includes(new URL(value).protocol),
        'Use um endereço HTTP ou HTTPS.',
      ),
    })).default([]),
  }),
});

export const collections = { posts, projects };
