import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './assets/cssResst.less'
import { createPinia } from 'pinia'
import Tables from './components/tables.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persist'
import 'element-plus/dist/index.css';
import * as echarts from 'echarts'
const app=createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.component('Tables',Tables)
app.config.globalProperties.$echarts = echarts
app.mount('#app')