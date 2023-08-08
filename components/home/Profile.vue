<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__body">
        <div class="profile__user">
          <div class="profile__user-left">
            <span class="profile__user-avatar">
              <img src="~/assets/img/profile/avatar.png" alt="" />
            </span>
            <span class="profile__user-username">Darkotan Tester</span>
          </div>
          <div class="profile__user-right">
            <button
              class="profile__user-notification icon-notification"
            ></button>
            <button class="profile__user-settinfs icon-settings"></button>
          </div>
        </div>

        <div class="profile__followers">
          <h4 class="profile__followers-title">
            <img
              src="~/assets/img/profile/people.png"
              alt=""
              class="profile__followers-img"
            />
            People who to follow
          </h4>

          <ul class="profile__followers-list">
            <li class="profile__follower">
              <div class="profile__follower-left">
                <img
                  src="~/assets/img/profile/avatar.png"
                  alt=""
                  class="profile__follower-img"
                />
                <div class="profile__follower-username">Alisa Mai</div>
              </div>

              <div class="profile__follower-right">
                <button class="profile__follower-button">Follow</button>
              </div>
            </li>

            <li class="profile__follower">
              <div class="profile__follower-left">
                <img
                  src="~/assets/img/profile/avatar.png"
                  alt=""
                  class="profile__follower-img"
                />
                <div class="profile__follower-username">Rubert Braun</div>
              </div>

              <div class="profile__follower-right">
                <button class="profile__follower-button active">
                  Following
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  height: 100vh;
  background: #7deaaf;
  width: 100%;
  max-width: 480px;

  &__body {
    @include adaptiv-value(padding, 30, 15, 1);
  }

  &__user {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    &-left {
      display: flex;
      @include adaptiv-value(column-gap, 15, 7.5, 1);
      width: 50%;
      align-items: center;
    }
    &-avatar {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      max-height: 40px;
      max-width: 40px;

      img {
        width: 100%;
      }
    }

    &-username {
      color: #1a202c;
      @include adaptiv-font(16, 14);
      font-weight: 600;
      @include adaptiv-line-height(24, 18);
      letter-spacing: 0.2px;
    }

    &-right {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 25, 14, 1);

      button {
        background: transparent;
        font-size: 23px;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            color: #00a060;
          }
        }
      }
    }
  }

  &__followers {
    @include adaptiv-value(margin-top, 25, 14, 1);
    &-title {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 10, 5, 1);
      color: #000;
      @include adaptiv-font(14, 12);
      font-weight: 600;
      @include adaptiv-line-height(21, 15);
      letter-spacing: 0.2px;
      @include adaptiv-value(margin-bottom, 25, 14, 1);
    }
    &-list {
      display: flex;
      flex-direction: column;
      @include adaptiv-value(row-gap, 15, 5, 1);
    }
  }

  &__follower {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 10, 5, 1);
    }
    &-avatar {
      width: 100%;
      height: 100%;
      max-width: 40px;
      max-height: 40px;
      object-fit: cover;
    }
    &-username {
      color: #000;
      @include adaptiv-font(14, 12);
      font-weight: 600;
      @include adaptiv-line-height(21, 15);
      letter-spacing: 0.2px;
    }
    &-button {
      color: #000;
      @include adaptiv-font(14, 12);
      font-style: normal;
      font-weight: 600;
      @include adaptiv-line-height(21, 15);
      letter-spacing: 0.2px;
      @include adaptiv-padding(3, 1.5, 20, 10, 1);
      border-radius: 27px;
      background: #d9d9d9;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          background: #00dd83;
        }
      }

      &.active {
        @include adaptiv-padding(3, 1.5, 28, 14, 1);
        background: #00dd83;

        @media (any-hover: hover) {
          cursor: pointer;
          transition: all 0.3s ease 0s;
          &:hover {
            background: #d9d9d9;
          }
        }
      }
    }
  }
}
</style>