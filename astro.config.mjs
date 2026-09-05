// @ts-check
import { defineConfig } from "astro/config";

// `site` is the deployed origin — used for canonical URLs, sitemap, and
// absolute OG image URLs. The repo name matches the org, so GitHub Pages
// serves from the root and no `base` is needed. Swap this for the real
// domain once arcanakeygames.com is pointed here.
export default defineConfig({
  site: "https://arcanakeygames.github.io",
  output: "static",
});
