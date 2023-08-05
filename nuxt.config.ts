// https://nuxt.com/docs/api/configuration/nuxt-config
const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production';

export default defineNuxtConfig({
  devtools: { enabled: true },
})
