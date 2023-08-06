<template>
  <div class="default">
    <the-sidebar></the-sidebar>
    <slot />
    <the-profile></the-profile>
  </div>
</template>

<style lang="scss" scoped>
.default {
  display: flex;
  flex: 1 1 auto;
}
</style>