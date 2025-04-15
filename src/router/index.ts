import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// import Login from '@/pages/login/login.vue'
// import Home from '@/pages/home/home.vue'

const routes = [
  { path: '/', component: HelloWorld },
//   { path: '/login', component: Login },
//   { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
