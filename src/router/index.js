import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/home.vue'
import Find from '../components/Find/find.vue'
import Indent from '../components/Indent/indent.vue'
import Mine from '../components/Mine/mine.vue'
import ShopDetail from '../components/ProductList/shopDetail.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  history: true,
  routes: [{
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    redirect: '/home',
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/indent',
    name: 'indent',
    component: Indent
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/shopDetail/:shopId',
    name: 'shopDetail',
    component: ShopDetail
  }]
})
