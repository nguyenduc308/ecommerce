import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/HomeIndex'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home,
      meta: { requiresAuth: true }
    },
    {
      name:'Login',
      path:'/login',
      component:Login,
      beforeEnter(to, from , next){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
          next(false)
        }
        else{
          next()
        }
      }
    },
    {
      name:'Register',
      path:'/register',
      component:Register
    },
  ]
})
router.beforeEach((to, props, next) =>{
  const user = JSON.parse(localStorage.getItem('user'))
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!user){
      next('/login')
    }
    else{
      if(!user){
        next('/login')
      }
      next()
    }
  }
  else{
    next()
  }
})

export default router 