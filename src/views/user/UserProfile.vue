<template>
  <div>
    <h2>User Profile</h2>
    <p>{{ welcomeMessage }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const welcomeMessage = computed(() => store.getters['user/welcomeMessage'])

function logout() {
  store.commit('user/logout')
  router.push('/login') // redirect to login
}
</script>
