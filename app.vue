<template>
  <div
    class="wrapper"
    :class="[storeWindow.device, storeThemes.select]"
    @scroll="storeWindow.scroll"
    :style="{
      background: storeThemes.kit[storeThemes.select].background,
    }"
  >
    <div class="content">
      <UiAlert />
      <NuxtLayout>
        <NuxtPage class="page" />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
const storeWindow = useStoreWindow();
const storeThemes = useStoreThemes();

onMounted(() => {
  storeWindow.isMobile();
  storeWindow.innerWidth = window.innerWidth;
  storeWindow.innerHeight = window.innerHeight;

  window.addEventListener("resize", () => {
    storeWindow.innerWidth = window.innerWidth;
    storeWindow.innerHeight = window.innerHeight;
  });
});
</script>

<style lang="scss">
</style>