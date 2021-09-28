import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFormWizard from 'vue-form-wizard'

import 'vuesax/dist/vuesax.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import 'animate.css/animate.min.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFormWizard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
