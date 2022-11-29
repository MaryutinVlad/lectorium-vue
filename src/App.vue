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
import initialData from './resources/resources'

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
    }
  },
  data() {
    return initialData
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
