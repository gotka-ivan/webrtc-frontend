import 'normalize.css'
import '@/assets/less/__variables.less'
import '@/assets/less/__tw.less'
import '@/assets/less/app.less'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
