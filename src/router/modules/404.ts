import NotFoundView from '@/views/404View.vue'

export const notFoundRoutes = [
  {
    path: '/404',
    name: '404',
    alias: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]
