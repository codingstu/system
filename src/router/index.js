import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    meta:{
      isShow:false
    },
    component: Home,
    children:[
      {
        path: '/personal',
        name: 'personal',
        meta:{
          isShow:true,
          title:'个人中心',
        },
        component: () => import(/* webpackChunkName: "personal" */ '../views/personal.vue')
      },
      {
        path: '/music',
        name: 'music',
        meta:{
          isShow:true,
          title:'none'
        },
        component: () => import(/* webpackChunkName: "teacherlist" */ '../views/music.vue')
      },
      {
        path: '/courselist',
        name: 'courselist',
        meta:{
          isShow:true,
          title: '新闻列表'
        },
        component: () => import(/* webpackChunkName: "courselist" */ '../views/courselist.vue')
      },
      
    ]
  },
  {
    path: '/',
    name: 'login',
    meta:{
      isShow:false
    },
    component: login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta:{
      isShow:false
    },
    component: register
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
