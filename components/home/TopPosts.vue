<template>
  <div class="posts">
    <div class="posts__post">
      <div class="posts__post-left">
        <div class="posts__post-left-top">
          <h3 class="posts__post-title">
            NAVI: S1MPLE, ELECTRONIC AGREED TO NEW DEALS UNTIL 2022
          </h3>
        </div>

        <div class="posts__post-left-bottom">
          <button class="posts__post-bookmark">
            <img src="~/assets/img/home/bookmark.svg" alt="" />
            <img src="~/assets/img/home/bookmark-active.svg" alt="" />
          </button>

          <div class="posts__post-passed">47m ago</div>
        </div>
      </div>
      <div class="posts__post-right">
        <img src="~/assets/img/home/bgc.png" alt="" class="posts__img" />
      </div>
    </div>

    <div class="posts__post">
      <div class="posts__post-left">
        <div class="posts__post-left-top">
          <h3 class="posts__post-title">
            NAVI: S1MPLE, ELECTRONIC AGREED TO NEW DEALS UNTIL 2022
          </h3>
        </div>

        <div class="posts__post-left-bottom">
          <button class="posts__post-bookmark">
            <img src="~/assets/img/home/bookmark.svg" alt="" />
            <img src="~/assets/img/home/bookmark-active.svg" alt="" />
          </button>

          <div class="posts__post-passed">47m ago</div>
        </div>
      </div>
      <div class="posts__post-right">
        <img src="~/assets/img/home/bgc.png" alt="" class="posts__img" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.posts {
  display: flex;
  width: 100%;
  @include adaptiv-padding(0, 0, 20, 10, 1);
  justify-content: space-between;
  @include adaptiv-value(column-gap, 40, 20, 1);
  @include adaptiv-value(padding-bottom, 30, 15, 1);
  border-bottom: 2px solid #48d05e;

  &__post {
    display: flex;
    @include adaptiv-value(column-gap, 20, 10, 1);
    background: #8ce2ae;
    @include adaptiv-padding(17, 12, 20, 10, 1);
    border-radius: 25px;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-bottom {
        display: flex;
        justify-content: space-between;
      }
    }

    &-title {
      color: #000;
      @include adaptiv-font(25, 16);
      font-weight: 600;
      @include adaptiv-line-height(37, 27);
      letter-spacing: 0.2px;
    }

    &-bookmark {
      background: transparent;
      position: relative;

      img {
        transition: all 0.3s ease 0s;

        &:nth-child(2) {
          z-index: -1;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          img {
            &:nth-child(1) {
              opacity: 0;
              z-index: -1;
            }

            &:nth-child(2) {
              opacity: 1;
              z-index: 2;
            }
          }
        }
      }

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00dd83;
        }
      }
    }
  }
}
</style>