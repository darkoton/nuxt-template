<template>
  <section class="auth">
    <div class="auth__wrapper">
      <div class="auth__container _container">
        <div class="auth__body">
          <div class="auth__main">
            <div class="auth__action auth__action-signup">
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
                class="auth__form"
                v-slot="{ errors }"
                :validation-schema="schema"
                @submit="submit"
              >
                <div class="auth__input-body" :class="{ error: errors.email }">
                  <i class="auth__icon icon-mail"></i>
                  <div class="auth__input-box">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      class="auth__input"
                      v-model="email"
                      required
                    />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div
                  class="auth__input-body"
                  :class="{ error: errors.password }"
                >
                  <i class="auth__icon icon-lock"></i>
                  <div class="auth__input-box">
                    <Field
                      type="password"
                      name="password"
                      id="pass"
                      class="auth__input"
                      v-model="pass"
                      required
                    />
                    <label for="pass">Password</label>
                  </div>
                </div>

                <div
                  class="auth__input-body"
                  :class="{ error: validConfirmPass || errors.confirmPassword }"
                >
                  <i class="auth__icon icon-lock"></i>
                  <div class="auth__input-box">
                    <Field
                      type="password"
                      id="confirmPass"
                      class="auth__input"
                      v-model="confirmPass"
                      name="confirmPassword"
                      required
                    />
                    <label for="pass">Confirm password</label>
                  </div>
                </div>

                <div class="auth__error" v-if="error">
                  User already registered
                </div>

                <div
                  class="auth__checkbox-body"
                  @click="
                    checkbox = !checkbox;
                    checkboxError = false;
                  "
                >
                  <div
                    class="auth__checkbox"
                    :class="{ active: checkbox, error: checkboxError }"
                  ></div>
                  <span>Confirm</span>
                </div>

                <button class="auth__submit">Sign Up</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import "~/assets/style/components/auth.scss";
import signUp from "~/plugins/firebase/auth/signUp";
import signInGoogle from "~/plugins/firebase/auth/google";

definePageMeta({
  layout: "clear",
});

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().min(8),
});

const store = useMainStore();
const router = useRouter();

const validConfirmPass = computed(() => pass.value != confirmPass.value);

const email = ref("");
const name = ref("");
const pass = ref("");
const confirmPass = ref("");
const checkbox = ref(false);
const checkboxError = ref(false);
const error = ref(false);

function reset() {
  setTimeout(() => {
    email.value = name.value = pass.value = confirmPass.value = "";
    checkbox.value = false;
    checkboxError.value = false;
  }, 500);
}

function submit() {
  if (checkbox.value) {
    signUp(email.value, pass.value)
      .then((r) => {
        localStorage.setItem("tokenUser", JSON.stringify(r.accessToken));
        localStorage.setItem("user", JSON.stringify(r));

        router.push("/");
      })
      .catch(() => {
        store.newMessage("User already registered");
      });
  } else {
    checkboxError.value = true;
  }
}

function googleAuth() {
  signInGoogle().then((r) => {
    localStorage.setItem("tokenUser", JSON.stringify(r.accessToken));
    localStorage.setItem("user", JSON.stringify(r));

    router.push("/");
  });
}
</script>
