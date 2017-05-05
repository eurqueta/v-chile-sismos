// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import '../node_modules/materialize-css/bin/materialize.css'
import '../node_modules/leaflet/dist/leaflet.css'
Vue.config.productionTip = false

Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
