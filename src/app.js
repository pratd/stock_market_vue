import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'bootstrap'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../src/assets/styles/importer.css'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})