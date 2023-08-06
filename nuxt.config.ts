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
  },
  modules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      // Specify the font families you want to use
      // For example:
      Roboto: true,
      'Sarabun:wght@400;700': true,
    },
    display: 'swap', // Optional, improves font loading
  },
})
