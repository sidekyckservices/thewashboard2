import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.washboardmurray.com",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), icon()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      cssMinify: true,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
