
<template>
  <div class="wrapper">
    <div class="content">
      <TheMessage />
      <NuxtLayout>
        <NuxtPage class="page" />
      </NuxtLayout>
    </div>
  </div>
</template>


<script setup>
import stateChanged from "~/plugins/firebase/stateListener";

const router = useRouter();
const route = useRoute();
const store = useStore();

stateChanged().then((user) => {
  if (user) {
    store.user = user;
  }
  // console.log(r);
});

onMounted(() => {
  // if (!store.user && route.name != "logIn" && route.name != "signUp") {
  //   router.push("/logIn");
  // }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  /* opacity: 0; */
  filter: blur(1rem);
  transform: scale(0.5) rotateY(180deg);
}
</style>



