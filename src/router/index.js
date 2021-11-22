import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')//采用懒加载的方式
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Me = () => import('views/me/Me.vue')

Vue.use(VueRouter)

const routes = [
    {
      path:'',
      redirect:  '/home'
    },
    {
      path:'/home',
      component: Home,
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/me',
      component: Me
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
