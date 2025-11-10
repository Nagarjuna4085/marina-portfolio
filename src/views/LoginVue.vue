<template>
  <div>
    <h1>Login Page</h1>
    <p v-if="message">{{ message }}</p>

    <input v-model="name" placeholder="Enter name" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const name = ref('')

const message = computed(() => store.getters['user/welcomeMessage'])

async function login() {
  if (name.value.trim() === '') return alert('Enter a name')
  await store.dispatch('user/loginAsync', { name: name.value })
  router.push('/user/profile') // redirect to user dashboard
}
</script>
