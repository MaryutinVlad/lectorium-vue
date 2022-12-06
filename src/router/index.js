import { createRouter, createWebHistory } from 'vue-router'

import HomeRoute from '@/views/HomeRoute'
import AuthRoute from '@/views/AuthRoute'
import ClassesRoute from '@/views/ClassesRoute'
import CoursesRoute from '@/views/CoursesRoute'
import LectionsRoute from '@/views/LectionsRoute'
import CommunitiesRoute from '@/views/CommunitiesRoute'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeRoute
  },
  {
    path: '/auth/:option',
    name: 'Auth',
    component: AuthRoute
  },
  {
    path: '/classes',
    name: 'classes',
    component: ClassesRoute
  },
  {
    path: '/classes/:tag',
    name: 'classTag',
    component: ClassesRoute
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesRoute
  },
  {
    path: '/lections',
    name: 'lections',
    component: LectionsRoute
  },
  {
    path: '/communities',
    name: 'communities',
    component: CommunitiesRoute
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router