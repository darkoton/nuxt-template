<template>
  <aside class="sidebar" :class="{ wider }">
    <div class="sidebar__wrapper">
      <div class="sidebar__body">
        <div class="sidebar__top">
          <nav class="sidebar__nav">
            <NuxtLink to="/" class="sidebar__logo">
              <img
                src="~/assets/img/sidebar/logo.svg"
                class="sidebar__logo-img"
                alt=""
              />
            </NuxtLink>

            <NuxtLink to="/" class="sidebar__nav-link icon-home"> </NuxtLink>
            <NuxtLink to="/" class="sidebar__nav-link icon-plus"> </NuxtLink>
            <NuxtLink to="/" class="sidebar__nav-link icon-chat"> </NuxtLink>
            <NuxtLink to="/" class="sidebar__nav-link icon-bookmark">
            </NuxtLink>
            <NuxtLink to="/" class="sidebar__nav-link icon-category">
            </NuxtLink>
          </nav>
        </div>

        <div class="sidebar__bottom">
          <button
            class="sidebar__move icon-move"
            @click="wider = !wider"
          ></button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const wider = ref(false);
</script>


<style lang="scss" scoped>
.sidebar {
  background-color: #c0ffca;
  height: 100vh;
  &__wrapper {
    height: 100%;
  }
  &__body {
    @include adaptiv-padding(30, 15, 22, 11, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    overflow: hidden;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include adaptiv-value(row-gap, 30, 15, 1);

    & a {
      display: flex;
      align-items: center;
      @include adaptiv-font(38, 20);
      color: #222;
      width: 100%;
      position: relative;

      &:before {
        border-radius: 11px;
        transition: all 0.3s ease 0s;
        @include adaptiv-value(padding, 8, 4, 1);
        display: flex;
        justify-content: center;
      }

      @media (any-hover: hover) {
        cursor: pointer;
        &:hover {
          &::before {
            color: #000;
            background: #00dd83;
          }
        }
      }
    }
  }
  &__logo {
    width: 100%;
    &-img {
      width: 100%;
      max-width: 50px;
    }
  }

  &__bottom {
    width: 100%;
  }

  &__move {
    @include adaptiv-font(38, 20);
    color: #222;
    @include adaptiv-value(padding, 8, 4, 1);
    background-color: transparent;
    width: 100%;
    // max-width: 50px;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #000;
        background: #00dd83;
        border-radius: 11px;
      }
    }
  }
}
</style>