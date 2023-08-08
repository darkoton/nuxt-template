<template>
  <div class="auth__action auth__action-login">
    <div class="auth__logo">
      <img src="~/assets/img/auth/logo.png" alt="" />
    </div>

    <div class="auth__switch">
      <span
        class="auth__switch-login auth__switch-element active"
        @click="$emit('select', 'login')"
        >Log In</span
      >
      <span class="auth__switch-slash">/</span>
      <span
        class="auth__switch-signup auth__switch-element"
        @click="$emit('select', 'signup')"
        >Sign Up</span
      >
    </div>

    <div class="auth__method">
      <div class="auth__google">
        <img src="~/assets/img/auth/google.png" alt="" />
      </div>
    </div>

    <form action="" class="auth__form">
      <div class="auth__input-body">
        <i class="auth__icon icon-mail"></i>
        <div class="auth__input-box">
          <input type="text" id="email" class="" />
          <label for="email">Email</label>
        </div>
      </div>

      <div class="auth__input-body">
        <i class="auth__icon icon-lock"></i>
        <div class="auth__input-box">
          <input type="text" id="pass" class="auth__input" />
          <label for="pass">Password</label>
        </div>
      </div>

      <button class="auth__submit">Log In</button>
    </form>
  </div>
</template>

<script>
import "~/assets/style/components/auth.scss";
</script>
