import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import helpers from './helpers'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  helpers,
  vuetify,
  VueMeta,
  render: h => h(App)
}).$mount('#app')
