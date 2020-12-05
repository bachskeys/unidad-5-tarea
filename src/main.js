import Vue from 'vue'
import Usuario from "./Usuario.vue"
import store from './store'
import {BootstrapVue,IconsPlugin} from "bootstrap-vue"

import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dists/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  render: h => h(Usuario)
}).$mount('#app')
