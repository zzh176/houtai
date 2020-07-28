import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Holist from '@/components/holist'
import Quanxian from '@/components/quanxian'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:"holist",
          component:Holist,
          meta:{
            title:"用户列表"
          }
        },
        {
          path:"quanxian",
          component:Quanxian,
          meta:{
            title:"权限管理"
          }
        },
      ]
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/",
      redirect:"/home"
    }
  ]
})
