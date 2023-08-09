// https://nuxt.com/docs/api/configuration/nuxt-config
const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/modules/_global-module.scss" as *;'
        }
      }
    }
  }
})
