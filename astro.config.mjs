import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
