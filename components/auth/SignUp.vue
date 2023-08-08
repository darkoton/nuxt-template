<template>
  <div class="auth__action auth__action-signup">
    <div class="auth__logo">
      <img src="~/assets/img/auth/logo.png" alt="" />
    </div>

    <div class="auth__switch">
      <span
        class="auth__switch-login auth__switch-element"
        @click="$emit('select', 'login')"
        >Log In</span
      >
      <span class="auth__switch-slash">/</span>
      <span
        class="auth__switch-signup auth__switch-element active"
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
          <input type="text" id="email" class="" v-model="email" />
          <label for="email">Email</label>
        </div>
      </div>

      <div class="auth__input-body">
        <i class="auth__icon icon-lock"></i>
        <div class="auth__input-box">
          <input type="text" id="pass" class="auth__input" v-model="pass" />
          <label for="pass">Password</label>
        </div>
      </div>

      <div class="auth__input-body">
        <i class="auth__icon icon-lock"></i>
        <div class="auth__input-box">
          <input
            type="text"
            id="confirmPass"
            class="auth__input"
            v-model="confirmPass"
          />
          <label for="pass">Confirm password</label>
        </div>
      </div>

      <div class="auth__checkbox-body" @click="checkbox = !checkbox">
        <div class="auth__checkbox" :class="{ active: checkbox }"></div>
        <span>Confirm</span>
      </div>

      <button class="auth__submit">Log In</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import "~/assets/style/components/auth.scss";

const email = ref("");
const pass = ref("");
const confirmPass = ref("");
const checkbox = ref(false);
</script>
