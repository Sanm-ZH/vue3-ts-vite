import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import HeaderPanelFixed from '../components/HeaderPanelFixed.vue'
import TextTransition from '../views/TextTransition.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () =>
      import(/* webpackChunkName: "todo" */ '@/views/todoList/todo.vue'),
    meta: {
      title: '待办事项',
      keepAlive: true
    }
  },
  {
    path: '/header-panel-fixed',
    name: 'HeaderPanelFixed',
    component: HeaderPanelFixed
  },
  {
    path: '/text-transition',
    name: 'TextTransition',
    component: TextTransition
  }
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
    ? createWebHistory(process.env.BASE_URL)
    : createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 通过前进后台时才触发
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 可以对权限进行一些校验
  // next() 不拦截
  next()
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    location.reload()
  }
})

export default router
