import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persist'
import 'element-plus/dist/index.css';
const app=createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')