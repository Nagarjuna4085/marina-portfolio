import { createApp } from 'vue'
import router from './Router'
import './style.css'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
