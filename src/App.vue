<template>
  <div class="page">
    <ConfirmationComponent
      @confirm-action="handleConfirm"
      @hide-popup="hidePopup"
      v-show="confirm.isShown"
      :data="confirm"
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
import { useAuthStore } from './stores/index'
import SettingsComponent from '@/components/SettingsComponent'
import HeaderComponent from '@/components/HeaderComponent'
import NavigationComponent from '@/components/NavigationComponent'
import FooterComponent from '@/components/FooterComponent'
import ConfirmationComponent from '@/components/ConfirmationComponent'
import initialData from '@/resources/initialData'
import { storeToRefs } from 'pinia'

export default {
  name: 'App',
  components: {
    ConfirmationComponent,
    SettingsComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  },
  setup() {
    const authStore = useAuthStore()

    const { loggedIn } = storeToRefs(authStore)

    return {
      loggedIn
    }
  },
  methods: {
    showPopup(prop) {
      this[prop].isShown = true
    },
    hidePopup(prop, result) {
      this[prop].isShown = result
    },
    handleConfirm(value) {
      console.log(value)
    },
  },
  data() {
    return initialData
  },
  created() {
    console.log(this.loggedIn)
  }

}
</script>

<style>
  @import url('./styles/page/page.css');
  @import url('./styles/main/main.css');
</style>
