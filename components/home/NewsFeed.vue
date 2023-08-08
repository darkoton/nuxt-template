<template>
  <div class="newsfeed">
    <div class="newsfeed__wrapper">
      <div class="newsfeed__body">
        <ul class="newsfeed__filter">
          <li class="newsfeed__category active">For you</li>
          <li class="newsfeed__category">Following</li>
          <li class="newsfeed__category">Popular</li>
        </ul>

        <ul class="newsfeed__feed">
          <li class="newsfeed__post"></li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.newsfeed {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__filter {
    display: flex;
    @include adaptiv-value(column-gap, 20, 10, 1);
    width: 100%;
  }
  &__category {
    @include adaptiv-padding(5, 2, 18, 15, 1);
    border-radius: 20px;
    border: 2px solid #44fa98;
    color: #000;
    @include adaptiv-font(18, 14);
    font-style: normal;
    font-weight: 600;
    @include adaptiv-line-height(24, 18);
    letter-spacing: 0.2px;

    &.active {
      background-color: #44fa98;
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background-color: #44fa98;
      }
    }
  }
  &__feed {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    padding: 20px 0;
    height: 100px;
  }
}
</style>