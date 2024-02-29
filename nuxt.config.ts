// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt", "@pinia/nuxt"],
  alias: { "@": path.resolve(__dirname) },
  devtools: { enabled: true },
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
});
