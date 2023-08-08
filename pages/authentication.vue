<template>
  <section class="auth">
    <div class="auth__wrapper">
      <div class="auth__container _container">
        <div class="auth__body">
          <div class="auth__main">
            <div class="auth__main-body login" :class="action">
              <AuthLogIn @select="select" />
              <AuthSignUp @select="select" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "clear",
});

const action = ref("login");

function select(value: string) {
  action.value = value;
}
</script>

<style lang="scss">
.auth {
  flex: 1 1 auto;

  &__wrapper,
  &__container,
  &__body {
    height: 100%;
  }
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__main {
    width: 100%;
    max-width: 850px;
    // border-radius: 40px;
    // background: #c0f8d6;
    height: 100%;
    max-height: 675px;
    position: relative;

    &-body {
      height: 100%;
      transition: all 0.8s ease 0s;
      transform-style: preserve-3d;

      &.login {
        transform: rotateY(0deg);
      }
      &.signup {
        transform: rotateY(-180deg);
      }
    }
  }
}
</style>