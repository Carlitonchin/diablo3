import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/Home/Index.vue'
import AboutView from '../views/About.vue'
import ProfileView from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: IndexView
    },
    {
      path:"/about",
      name: "About",
      component:AboutView
    },
    {
      path:"/profile",
      name: "Profile",
      component:ProfileView
    }
  ]
})

export default router
