import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import '../dist/styles/importer.css'


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})