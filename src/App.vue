<template>
  <div class="page">
    <AuthForm
      :data="signIn"
      v-show="popupShown.signIn"
    />
    <AuthForm
      :data="signUp"
      v-show="popupShown.signUp"
    />
    <ConfirmationComponent
      :data="confirm"
      v-show="popupShown.confirm"
    />
    <SettingsComponent
      :data="settings"
      v-show="popupShown.settings"
    />
    <SettingsComponent
      :data="userSettings"
      v-show="popupShown.userSettings"
    />
    <HeaderComponent
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
import { storeToRefs } from 'pinia'

import { useStore } from './stores/index'
import AuthForm from '@/components/popups/AuthForm'
import SettingsComponent from '@/components/popups/SettingsComponent'
import ConfirmationComponent from '@/components/popups/ConfirmationComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import NavigationComponent from '@/components/navigation/NavigationComponent'
import FooterComponent from '@/components/footer/FooterComponent'
import popupsData from '@/resources/popupsData.json'

export default {
  name: 'App',
  components: {
    ConfirmationComponent,
    SettingsComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    AuthForm
  },
  setup() {
    const authStore = useStore()

    const { loggedIn, popupShown } = storeToRefs(authStore)

    return {
      loggedIn,
      popupShown
    }
  },
  methods: {
    handleConfirm(value) {
      console.log(value)
    },
  },
  data() {
    return popupsData
  },
  created() {
    console.log(this.loggedIn)
  }

}
</script>

<style>
  @import url('@/styles/page/page.css');
  @import url('@/styles/main/main.css');
</style>
