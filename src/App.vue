<template>
  <div class="page">
    <AuthForm
      @hide-form="hideForm"
      :data="auth.signIn"
      :services="auth.services"
      v-show="auth.signIn.isShown"
    />
    <AuthForm
      @hide-form="hideForm"
      :data="auth.signUp"
      :services="auth.services"
      v-show="auth.signUp.isShown"
    />
    <HeaderComponent
      @show-form="showForm"
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
          access: 'signIn',
          items: ['email', 'password'],
          isShown: false
        },
        signUp: {
          text: 'Sign Up',
          access: 'signUp',
          items: ['username', 'email', 'password'],
          isShown: false
        }
      }
    }
  },
  methods: {
    showForm(prop) {
      this.auth[prop].isShown = true
    },
    hideForm(prop) {
      this.auth[prop].isShown = false
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
