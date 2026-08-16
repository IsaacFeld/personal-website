// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from "@astrojs/sitemap";

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
  site: 'http://localhost:4321/',
  integrations: [sitemap()]
});