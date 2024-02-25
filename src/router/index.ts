import { createRouter, createWebHistory } from 'vue-router'
import CookList from '../views/CookList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cookList',
      component: CookList
    },
    {
      path: '/register/cook-menu',
      name: 'cook-menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterCookMenu.vue')
    },
    {
      path: '/*', //設定したurlにいずれもマッチしない場合
      // redirect: '/', ※redirectオプションは任意で設定
      component: CookList //NotFoundコンポーネントに遷移
    }
  ]
})

export default router
