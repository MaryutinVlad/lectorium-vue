import { defineStore } from 'pinia'

export const useStore = defineStore('auth',{
  state: () => ({
    loggedIn: true,
    popupShown: {
      signIn: false,
      signUp: false,
      settings: false,
      userSettings: false,
      confirm: false
    },
  }),
  actions: {
    togglePopup(access) {
      this.popupShown[access] = !this.popupShown[access]
    }
  }
})
