<template>
  <div class="message" :class="{ active: store.message.active }">
    {{ store.message.text }}
  </div>
</template>

<script lang="ts" setup>
const store = useStore();
</script>

<style lang="scss" scoped>
.message {
  @include adaptiv-padding(20, 10, 20, 10, 1);
  display: inline-block;
  position: absolute;
  border-radius: 10px;
  background: #6fe69e;
  @include adaptiv-font(20, 16);
  left: 50%;
  top: -10%;
  transform: translateX(-50%);
  z-index: 10;
  transition: all 0.5s ease 0s;

  &.active {
    top: 10%;
  }
}
</style>

