export const useStoreAlert = defineStore('alert', {
  state: () => ({
    active: false,
    message: ""
  }),
  getters: {
  },
  actions: {
    alert(msg: any) {
      this.active = true
      this.message = msg

      setTimeout(() => {
        this.active = false
      }, 4000);
    }
  },
})