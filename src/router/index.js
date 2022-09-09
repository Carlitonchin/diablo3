import { createRouter, createWebHistory } from 'vue-router'

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/profile?region=:region&profile=:battleTag', name: 'Profile' },
  { path: '/hero?region=:region&profile=:battleTag&hero=:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r=>{
  return {
    ...r,
    component: ()=>import(`../views/${r.name}/Index.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
