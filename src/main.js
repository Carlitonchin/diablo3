import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/css/main.styl'

import { library } from '@fortawesome/fontawesome-svg-core'
// Iconos de tipo "Solid"
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
// Iconos de tipo "Brand" (marcas o logos de empresas)
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
// El componente que vamos a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faSkull,
    faCrown,
    faDungeon,
    faHatWizard,
    faHammer,
    faGem,
    faVuejs,
    faBootstrap,
    faFontAwesome,
    faGithub,
    faBattleNet
  )

let app = createApp(App)

app.use(router)
.use(BootstrapVue3)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
