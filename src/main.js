import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/normalize.css'
import router from './router/routes'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).mount('#app')
