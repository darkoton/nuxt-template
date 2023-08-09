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
    '@pinia/nuxt'
  ],
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  googleFonts: {
    families: {
      // Specify the font families you want to use
      // For example:
      'Roboto:wght@400;700': true,
    },
    display: 'swap', // Optional, improves font loading
  },

  app: {
    layoutTransition: { name: 'clear', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }

  },

  router: {
    middleware: 'auth', // Применяется ко всем маршрутам
  }
})
