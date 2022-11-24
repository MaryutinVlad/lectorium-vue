<template>
  <div class="page">
    <AuthForm
      @hide-form="hidePopup"
      :data="signIn"
      :services="services"
      v-show="signIn.isShown"
    />
    <AuthForm
      @hide-form="hidePopup"
      :data="signUp"
      :services="services"
      v-show="signUp.isShown"
    />
    <SettingsComponent
    @hide-settings="hidePopup"
      :data="settings"
      v-show="settings.isShown"
    />
    <HeaderComponent
      @show-form="showPopup"
      :loggedIn="loggedIn"
    />
    <NavigationComponent />
    <MainContent />
    <FooterComponent />
  </div>
</template>

<script>
import AuthForm from './components/AuthForm.vue'
import SettingsComponent from './components/SettingsComponent'
import HeaderComponent from './components/HeaderComponent'
import NavigationComponent from './components/NavigationComponent'
import MainContent from './components/MainContent'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    AuthForm,
    SettingsComponent,
    HeaderComponent,
    NavigationComponent,
    MainContent,
    FooterComponent
  },
  data() {
    return {
        loggedIn: true,
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
          title: 'Sign In',
          access: 'signIn',
          items: ['email', 'password'],
          isShown: false
        },
        signUp: {
          title: 'Sign Up',
          access: 'signUp',
          items: ['username', 'email', 'password'],
          isShown: false
        },
        settings: {
          title: 'Settings',
          access: 'settings',
          isShown: false,
          items: [
            {
              title: 'Color mode',
              type: 'button'
            },
            {
              title: 'Allow notifications',
              type: 'button'
            },
            {
              title: 'Enable Cookies',
              type: 'button'
            },
            {
              title: 'Text size',
              type: 'number'
            }
          ]
        }
      
    }
  },
  methods: {
    showPopup(prop) {
      this[prop].isShown = true
    },
    hidePopup(prop, result) {
      this[prop].isShown = result
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
