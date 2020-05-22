
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import {store} from './store/index'
Vue.use(axios)
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
