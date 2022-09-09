import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue3 from './plugins/bootstrap'
import FontAwesomeIcon from './plugins/fontawesome'
import './assets/css/main.styl'


let app = createApp(App)

app.use(router)
.use(BootstrapVue3)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
