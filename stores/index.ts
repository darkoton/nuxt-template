import signInGoogle from "~/plugins/firebase/auth/google";
import signOut from "~/plugins/firebase/auth/signOut";

export const useStore = defineStore('main', {
  state: () => ({
    message: {
      text: '',
      active: false
    },
    user: null
  }),
  actions: {
    newMessage(message: string) {
      this.message.text = message
      this.message.active = true

      setTimeout(() => {
        this.message.active = false
      }, 2000);
    },

    async google() {
      try {
        const user = await signInGoogle();
        this.user = user
        return user
      } catch (e) {
        throw e;
      }
    },

    signOut() {
      signOut()
      this.user = null
    }
  },
})