<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__container _container">
        <div class="home__body">
          <div class="home__left">
            <HomeSearch class="home__search" />
            <HomeTopPosts />
            <HomeNewsFeed class="home__feed" />
          </div>

          <HomeProfile class="home__right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>




<style lang="scss" scoped>
.home {
  &__container {
    padding: 0;
  }
  &__body {
    display: flex;
  }
  &__left {
    display: flex;
    flex-direction: column;
    @include adaptiv-value(padding, 30, 15, 1);
  }
  &__search {
    @include adaptiv-value(margin-bottom, 45, 25, 1);
  }
  &__feed {
    @include adaptiv-value(margin-top, 20, 10, 1);
  }
}
</style>
