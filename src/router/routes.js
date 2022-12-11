import { createRouter, createWebHistory } from 'vue-router'

import HomeRoute from '@/views/HomeRoute'
import SectionRoute from '@/views/SectionRoute'
import SectionTagRoute from '@/views/SectionTagRoute'
import ArticleRoute from '@/views/ArticleRoute'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeRoute
  },
  {
    name: 'section',
    path: '/:section',
    component: SectionRoute,
    children: [
      {
        name: 'sectionTag',
        path: ':tag',
        component: SectionTagRoute,
        children: [
          {
            name: 'article',
            path: ':id',
            component: ArticleRoute
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router