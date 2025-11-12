import { createRouter, createWebHistory } from 'vue-router'

// Import views
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginVue from '../views/LoginVue.vue'
import UserView from '../views/user/UserView.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'
import UserDetails from '../views/user/UserDetails.vue'
import GallaryView from '../views/GallaryView.vue'
import Appointment from '../views/Appointment.vue'
import BookingList from '../views/BookingList.vue'

import store from '../store'

// Define your secret key (manual)
const CLIENT_SECRET = 'my-client-secret' // change this to any secret string

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: LoginVue },

  // Bookings page with secret key protection
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingList,
    beforeEnter: (to, from, next) => {
      if (to.query.key === CLIENT_SECRET) {
        next()
      } else {
        alert('Access denied! You need the client key to view this page.')
        next('/') // redirect to home
      }
    }
  },

  { path: '/gallery', component: GallaryView },
  { path: '/appointment', component: Appointment },

  // Nested User Routes
  {
    path: '/user',
    component: UserView,
    meta: { requiresAuth: true },
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'settings', component: UserSettings },
      { path: ':id', component: UserDetails, props: true }
    ]
  },

  { path: '/home', redirect: '/' },

  // Catch-all 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard for user auth
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.user.loggedIn
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
