import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'Login',
      path:'/login',
      component:Login
    },
    {
      name:'Register',
      path:'/register',
      component:Register
    },
  ]
})
