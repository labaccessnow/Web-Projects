// Astro config for a static content site. `output` defaults to static — the whole site
// prerenders to plain HTML, which is what makes it cheap to host and trivial to put behind
// a WAF. Sitemap integration so search engines (and my own link-checkers) get a manifest.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',     // canonical URL — sitemap + absolute links depend on it
  integrations: [sitemap()],
  build: {
    assets: '_assets',             // hashed asset dir, long-cache friendly
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
