import { createRouter, createWebHistory } from 'vue-router'
const SearchView = () => import('../views/SearchView.vue')
const DetailView = () => import('../views/DetailView.vue')

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/movie/:id',
    name: 'detail',
    component: DetailView,
    // Pass the route param as a prop to the component,
    // keeping the component decoupled from $route.
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
