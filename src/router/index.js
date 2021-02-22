import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 匹配所有路径
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    // 會匹配以 `/test` 開頭的任意路徑
    path: '/test*'
  },
  {
    // 動態參數
    path: '/user/:id',
    name: 'GetId',
    component: () => import(/* webpackChunkName: "about" */ '../views/GetId.vue')
  },
  {
    // 動態參數
    path: '/props_ref',
    name: 'PropsRef',
    component: () => import(/* webpackChunkName: "about" */ '../views/PropsRef.vue')
  },
  {
    // 動態參數
    path: '/quote',
    name: 'Quote',
    component: () => import(/* webpackChunkName: "about" */ '../views/Quote.vue')
  },
  {
    // 動態參數
    path: '/axios_post',
    name: 'AxiosPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AxiosPost.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
