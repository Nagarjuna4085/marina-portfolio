<template>
  <div>
    <h1>User Info</h1>
    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Logged In:</strong> {{ loggedIn }}</p>
    <p><strong>Message:</strong> {{ welcomeMessage }}</p>

    <div style="margin-top: 10px;">
      <input v-model="inputName" placeholder="Enter name" />
      <button @click="loginUser">Login</button>
      <button @click="logoutUser">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'UserComponent',
  setup() {
    const store = useStore()

    // ----------------------
    // State
    // ----------------------
    const name = computed(() => store.state.user.name)
    const loggedIn = computed(() => store.state.user.loggedIn)

    // ----------------------
    // Getters
    // ----------------------
    const welcomeMessage = computed(() => store.getters['user/welcomeMessage'])

    // ----------------------
    // Mutations
    // ----------------------
    const loginUser = () => {
      if (inputName.value.trim() !== '') {
        store.commit('user/login', inputName.value)
        inputName.value = ''
      }
    }
    const logoutUser = () => store.commit('user/logout')

    // ----------------------
    // Local state
    // ----------------------
    const inputName = ref('')

    return {
      name,
      loggedIn,
      welcomeMessage,
      inputName,
      loginUser,
      logoutUser
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 5px;
}
input {
  padding: 5px;
}
</style>
