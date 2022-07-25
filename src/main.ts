import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Request } from './api/request';
const app=createApp(App)
Request.init();
app.use(router)
app.mount('#app')