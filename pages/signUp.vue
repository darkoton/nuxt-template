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
                      v-model="formData.email"
                      required
                    />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div class="auth__input-body" :class="{ error: errors.name }">
                  <i class="auth__icon icon-profile"></i>
                  <div class="auth__input-box">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      class="auth__input"
                      v-model="formData.name"
                      required
                    />
                    <label for="name">Name</label>
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
                      v-model="formData.password"
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
                      v-model="formData.confirmPass"
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
                    formData.checkbox = !formData.checkbox;
                    checkboxError = false;
                  "
                >
                  <div
                    class="auth__checkbox"
                    :class="{ active: formData.checkbox, error: checkboxError }"
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
  name: yup.string().required(),
  confirmPassword: yup.string().required().min(8),
});

const store = useStore();
const router = useRouter();

const validConfirmPass = computed(
  () => formData.value.password != formData.value.confirmPass
);

const formData = ref({
  email: "",
  name: "",
  password: "",
  confirmPass: "",
  checkbox: false,
});
const checkboxError = ref(false);
const error = ref(false);

async function submit() {
  if (formData.value.checkbox) {
    try {
      await signUp(formData.value);
      router.push("/");
    } catch (e) {
      store.newMessage("User already registered");
      throw e;
    }
  } else {
    checkboxError.value = true;
  }
}

async function googleAuth() {
  await store.google();
  router.push("/");
}
</script>
