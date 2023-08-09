<template>
  <section class="auth">
    <div class="auth__wrapper">
      <div class="auth__container _container">
        <div class="auth__body">
          <div class="auth__main">
            <div class="auth__action auth__action-login">
              <div class="auth__logo">
                <img src="~/assets/img/auth/logo.png" alt="" />
              </div>

              <div class="auth__switch">
                <nuxt-link
                  to="/logIn"
                  class="auth__switch-login auth__switch-element"
                  @click="$emit('selectAction', 'login')"
                  >Log In
                </nuxt-link>
                <span class="auth__switch-slash">/</span>
                <nuxt-link
                  to="/signUp"
                  class="auth__switch-signup auth__switch-element"
                  @click="$emit('selectAction', 'signup')"
                  >Sign Up
                </nuxt-link>
              </div>

              <div class="auth__method">
                <div class="auth__google" @click="googleAuth">
                  <img src="~/assets/img/auth/google.png" alt="" />
                </div>
              </div>

              <Form
                :validation-schema="schema"
                @submit="submit"
                class="auth__form"
                v-slot="{ errors }"
              >
                <div class="auth__input-body" :class="{ error: errors.email }">
                  <i class="auth__icon icon-mail"></i>
                  <div class="auth__input-box">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      required
                      class="auth__input"
                      v-model="formData.email"
                    />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div class="auth__input-body" :class="{ error: errors.email }">
                  <i class="auth__icon icon-lock"></i>
                  <div class="auth__input-box">
                    <Field
                      type="password"
                      name="password"
                      required
                      id="pass"
                      class="auth__input"
                      v-model="formData.password"
                    />
                    <label for="pass">Password</label>
                  </div>
                </div>

                <button class="auth__submit">Log In</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import * as yup from "yup";

import "~/assets/style/components/auth.scss";
import logIn from "~/plugins/firebase/auth/logIn";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

definePageMeta({
  layout: "clear",
});

const router = useRouter();
const store = useStore();

const formData = ref({
  email: "",
  password: "",
});

async function submit() {
  try {
    await logIn(formData.value);
    router.push("/");
  } catch (e) {
    if (e.code == "auth/wrong-password") {
      store.newMessage("Incorrect password");
    } else if (e.code == "auth/user-not-found") {
      store.newMessage("Account could not be found");
    } else {
      store.newMessage("Oops, something went wrong");
    }
    throw e;
  }
}

async function googleAuth() {
  await store.google();
  router.push("/");
}
</script>
