
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()

  if (!store.user) {
    return navigateTo('/login')
  }

})