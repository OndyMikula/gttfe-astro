// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  "server": {
      "port": 4321,
      "host": "127.0.0.1"
  },
  site: 'https://gttournament.cz',
  integrations: [sitemap()]
});
