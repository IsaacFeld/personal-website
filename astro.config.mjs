// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.bunny(),
    name: "Bungee Shade",
    cssVariable: "--font-bs",
  }, {
    provider: fontProviders.bunny(),
    name: "IBM Plex Serif",
    cssVariable: "--font-ibm",
  }],
  site: 'http://localhost:4321/',
  integrations: [sitemap()]
});