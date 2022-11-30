import { createRouter, createWebHistory } from 'vue-router'

import HomeRoute from '../views/HomeRoute'
import ClassesRoute from '../views/ClassesRoute'
import CoursesRoute from '../views/CoursesRoute'
import LectionsRoute from '../views/LectionsRoute'
import CommunitiesRoute from '../views/CommunitiesRoute'

const routes = [
  {
    path: '/',
    name: HomeRoute,
    component: HomeRoute
  },
  {
    path: '/classes',
    name: ClassesRoute,
    component: ClassesRoute
  },
  {
    path: '/courses',
    name: CoursesRoute,
    component: CoursesRoute
  },
  {
    path: '/lections',
    name: LectionsRoute,
    component: LectionsRoute
  },
  {
    path: '/communities',
    name: CommunitiesRoute,
    component: CommunitiesRoute
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router