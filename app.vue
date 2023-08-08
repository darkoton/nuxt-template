<template>
  <div class="wrapper">
    <div class="content">
      <NuxtLayout>
        <NuxtPage class="page" />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const router = useRouter();

let isAuth = ref(false);

onMounted(() => {
  isAuth = localStorage.isAuth ? Boolean(localStorage.isAuth) : false;
  if (!isAuth) {
    router.push("/authentication");
  }
});
</script>



