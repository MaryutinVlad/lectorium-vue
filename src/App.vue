<template>
  <div class="page">
    <AuthForm
      @hide-form="hidePopup"
      @auth-user="auth"
      :data="signIn"
      :services="services"
      v-show="signIn.isShown"
    />
    <AuthForm
      @hide-form="hidePopup"
      @auth-user="auth"
      :data="signUp"
      :services="services"
      v-show="signUp.isShown"
    />
    <SettingsComponent
      @hide-settings="hidePopup"
      :data="settings"
      v-show="settings.isShown"
    />
    <SettingsComponent
      @hide-settings="hidePopup"
      :data="userSettings"
      v-show="userSettings.isShown"
    />
    <HeaderComponent
      @show-form="showPopup"
      :loggedIn="loggedIn"
    />
    <NavigationComponent />
    <main class="main">
      <router-view>
      </router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import { apiAuth } from './helpers/apiAuth'
//import authStore from '@/stores/index'
import AuthForm from '@/components/AuthForm.vue'
import SettingsComponent from '@/components/SettingsComponent'
import HeaderComponent from '@/components/HeaderComponent'
import NavigationComponent from '@/components/NavigationComponent'
import FooterComponent from '@/components/FooterComponent'
import initialData from '@/resources/initialData'

export default {
  name: 'App',
  components: {
    AuthForm,
    SettingsComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  },
  methods: {
    showPopup(prop) {
      this[prop].isShown = true
    },
    hidePopup(prop, result) {
      this[prop].isShown = result
    },
    async fetchData() {
      const res = await fetch('http://localhost:5000/data')
      const data = await res.json()

      return data
    },
    async auth(values) {
      if (!values.username) {
        console.log('sign in')
        const { data } = await apiAuth.signIn(values)
        localStorage.setItem('lectorium-jwt', data.token)

      } else {
        console.log('sign up')
        const { data } = await apiAuth.signUp(values)
        
        if (data) {
          this.$data.signUp.title = 'signed up'
        }
      }
    }
  },
  data() {
    return initialData
  },
  created() {
    this.$data.loggedIn = false
  }

}
</script>

<style>
  @import url('./styles/page/page.css');
  @import url('./styles/main/main.css');
</style>
