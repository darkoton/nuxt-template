export default defineNuxtPlugin(() => {
  return {
    provide: {
      example: () => `example`
    }
  }
})