import { counterRoutes, countryRoutes, homeRoutes, notFoundRoutes } from '@/router/modules'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...homeRoutes, ...notFoundRoutes, ...counterRoutes, ...countryRoutes]
})

export default router
