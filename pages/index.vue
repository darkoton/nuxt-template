<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__container _container">
        <div class="home__body">
          <HomeSearch />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__body {
    display: flex;
    flex-direction: column;
    @include adaptiv-value(padding, 30, 15, 1);
  }
}
</style>
