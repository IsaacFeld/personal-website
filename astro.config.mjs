// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// preserve math blocks in markdown parser
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.bunny(),
    name: "Arimo",
    cssVariable: "--font-arimo",
  },
  {
    provider: fontProviders.bunny(),
    name: "Indie Flower",
    cssVariable: "--font-indie",
  }],

  site: 'http://localhost:8080/',
  integrations: [sitemap()],
  

  adapter: node({
    mode: "standalone"
  }),
  
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});