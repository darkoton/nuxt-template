export const useMainStore = defineStore('main', {
  state: () => ({
    message: {
      text: '',
      active: false
    }
  }),
  actions: {
    newMessage(message: string) {
      this.message.text = message
      this.message.active = true

      setTimeout(() => {
        this.message.active = false
      }, 2000);
    }
  },
})