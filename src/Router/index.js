import { createRouter, createWebHistory } from 'vue-router'

// Import views (or lazy load)
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import LoginView from '../views/LoginView.vue'
import LoginVue from '../Views/LoginVue.vue'


import store from '../store'  // ✅ import store


// User-related views (nested routes)
import UserView from '../views/user/UserView.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'
import UserDetails from '../views/user/UserDetails.vue'
import GallaryView from '../views/GallaryView.vue'
import Appointment from '../views/Appointment.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: LoginVue },
  { path: '/gallery', component: GallaryView },
    { path: '/appointment', component: Appointment },

  // Nested User Routes
  {
    path: '/user',
    component: UserView,
    meta: { requiresAuth: true },
    children: [
      { path: 'profile', component: UserProfile },      // /user/profile
      { path: 'settings', component: UserSettings },    // /user/settings
      { path: ':id', component: UserDetails, props: true } // /user/123
    ]
  },

  // Redirect example
  { path: '/home', redirect: '/' },

  // Catch-all 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.user.loggedIn
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})


export default router
