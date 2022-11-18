<template>
  <div class="page" @keyup="closeFormOnKey" @click="closeFormOnClick">
    <AuthForm
      :data="auth.signIn"
      :services="auth.services"
      v-show="signInIsShown"
    />
    <AuthForm
      :data="auth.signUp"
      :services="auth.services"
      v-show="signUpIsShown"
    />
    <HeaderComponent
      @toggle-sign-in-form="toggleSignInForm"
      @toggle-sign-up-form="toggleSignUpForm"
      :text="auth.signIn.text"
    />
    <NavigationComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import AuthForm from './components/AuthForm.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    AuthForm
  },
  data() {
    return {
      signInIsShown: false,
      signUpIsShown: false,
      auth: {
        services: [
          {
            title: 'Google',
            src: 'Google_Authenticator_for_Android_icon.svg'
          },
          {
            title: 'Apple',
            src: 'apple-social-logo-outline_icon-icons.com_74064.svg'
          },
          {
            title: 'Facebook',
            src: 'fb_icon-icons.com_65434.svg'
          }
        ],
        signIn: {
          text: 'Sign In',
          items: ['email', 'password']
        },
        signUp: {
          text: 'Sign Up',
          items: ['username', 'email', 'password']
        }
      }
    }
  },
  methods: {
    toggleSignInForm() {
      this.signInIsShown = true
    },
    toggleSignUpForm() {
      this.signUpIsShown = true
    },
    closeFormOnKey(e) {
      if (e.key === 'Escape') {
        this.signInIsShown = false;
        this.signUpIsShown = false;
      }
    },
    closeFormOnClick(e) {
      if (e.target.classList.contains('overlay')) {
        this.signInIsShown = false;
        this.signUpIsShown = false;
      }
    }
  }
}
</script>

<style>
@import url('./fonts/fonts.css');

.page {
  display: flex;
  flex-direction: column;
  margin: 0 25px;
  padding: 0;
  background-color: #FEFEFA;
}
</style>
