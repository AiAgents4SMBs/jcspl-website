// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.just-chemicals.com',
  output: 'static',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    // @ts-expect-error — vite Plugin types diverge between tailwindcss/vite and astro's bundled vite
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['images.unsplash.com'],
  },

  adapter: cloudflare()
});