import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/HomeIndex'
import Category from '../components/Admin/Category/Category'
import CategoryEdit from '../components/Admin/Category/CategoryEdit'
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
      name:'Category',
      path:'/admin/category',
      component:Category
    },
    {
      name:'Category',
      path:'/admin/category/edit',
      component:CategoryEdit
    },
    {
      name:'Login',
      path:'/login',
      component:Login,
      beforeEnter(to, from , next){
        const token = JSON.parse(localStorage.getItem('token'))
        if(token){
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


export default router 