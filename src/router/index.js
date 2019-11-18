import Vue from 'vue'
import Router from 'vue-router'

// pages
import Main from '@/pages/Main'

// views
import Home from '@/views/Home'
import About from '@/views/About'
import Products from '@/views/Products'
import Contact from '@/views/Contact'

//components

Vue.use(Router)

const routesMaps = [
  // {
  //   path:'/',
  //   redirect:'/index'
  //   // component: Main
  // },
  {
    path:'/',
    redirect:'/home',
    component:{
      render (c) { return c('router-view') }
    },
    children:[
      {
        path:'home',
        redirect:'home/index',
        component:Main,
        children: [
          {
            path: 'index',
            name: 'index',
            component: Home
          },
          {
            path: 'about',
            name: 'about',
            component: About
          },
          {
            path: 'products',
            name: 'products',
            component: Products
          },
          {
            path: 'contact',
            name: 'contact',
            component: Contact
          }
        ]
      }
    ]
  }
]

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: routesMaps
})

export default router