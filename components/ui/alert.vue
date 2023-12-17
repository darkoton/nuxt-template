<template>
  <div class="alert">
    {{ storeAlert.message }}
  </div>
</template>

<script setup>
const storeAlert = useStoreAlert();
</script>

<style lang="scss" scoped>
.alert {  
  position: absolute;
  left: 50%;
  top: -10%;
  font-weight: 500;
  z-index: 200;
  transform: translateX(-50%);
  @include adaptiv-indent("padding", 8, 4, 14, 7, 1);
  background: #a5fbc8;
  border-radius: 10px;
  transition: all 0.6s ease 0s;
  &.active {
    top: 10%;
  }
}
</style>