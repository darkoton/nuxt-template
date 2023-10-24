export const useStoreThemes = defineStore('themes', {
  state: () => ({
    select: "light",
    kit: {
      light: {
        background: "#fff",
        font: "#000"
      },
      dark: {
        background: "#111",
        font: "#fff"
      }
    }
  }),
  getters: {
  },
  actions: {
  },
})