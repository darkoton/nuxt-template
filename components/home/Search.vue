<template>
  <div class="search" :class="{ focus }">
    <input
      type="text"
      @focus="focus = true"
      @blur="focus = false"
      class="search-input"
      placeholder="Search..."
    />
    <button class="search-icon icon-search"></button>
  </div>
</template>

<script lang="ts" setup>
const focus = ref(false);
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  background: #61ec9970;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  @include adaptiv-padding(16, 12, 21, 16, 1);
  align-items: center;
  transition: all 0.3s ease 0s;
  border: 2px solid transparent;

  &-input {
    background: transparent;
    color: #000;
    @include adaptiv-font(25, 18);
    font-weight: 600;
    @include adaptiv-line-height(37, 27);
    letter-spacing: 0.2px;
    width: 100%;
    margin-right: 10px;

    &:focus {
    }
  }
  &-icon {
    font-size: 30px;
    background: transparent;
    padding: 5px;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: #00dd83;
        border-radius: 5px;
      }
    }
  }

  &.focus {
    border-color: #00dd83;
  }
}
</style>