import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/HomeIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home
    },
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
