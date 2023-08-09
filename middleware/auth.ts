import stateChanged from "~/plugins/firebase/stateListener";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useStore()

  stateChanged().then((user) => {
    if (user) {
      store.user = user;
    }
  }).then(() => {
    if (!store.user) {
      return navigateTo('/login')
    }
  })
})