import { defineStore } from 'pinia'
import { fetchWrapper } from '@/helpers'
import { router } from 'json-server'
//import { router } from '@/router/'
//change later baseUel to imported from env value
const baseUrl = 'http://localhost:8080'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(username, password) {
      const user = await fetchWrapper.post(`${baseUrl}/login`, { username, password })

      this.user = user
      localStorage.setItem('user', JSON.stringify(user))

      router.push(this.returnUrl || '/')
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/login')
    }
  }
})