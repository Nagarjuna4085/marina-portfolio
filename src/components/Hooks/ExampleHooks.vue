<template>
  <div class="p-4">
    <h2>User Dashboard</h2>

    <div v-if="loading">Loading users...</div>
    <div v-else-if="error">⚠️ Error: {{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>

    <button @click="refreshUsers">🔄 Refresh Users</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'

// ✅ State
const users = ref([])
const loading = ref(false)
const error = ref(null)
let timer = null

console.log('🟣 setup() - Component initialized')

// 🟠 Runs before DOM is rendered
onBeforeMount(() => {
  console.log('🟠 onBeforeMount - preparing initial data')
})

// 🟢 Runs after DOM mounted (good for data fetching)
onMounted(async () => {
  console.log('🟢 onMounted - DOM ready, fetching users')
  await fetchUsers()

  // simulate periodic updates
  timer = setInterval(() => {
    console.log('⏰ Auto-refreshing user list')
    refreshUsers()
  }, 10000)
})

// 🟡 Runs before DOM re-renders (state changes)
onBeforeUpdate(() => {
  console.log('🟡 onBeforeUpdate - data changing, DOM will update soon')
})

// 🔵 Runs after DOM re-render
onUpdated(() => {
  console.log('🔵 onUpdated - DOM updated successfully')
})

// 🟤 Before unmounting
onBeforeUnmount(() => {
  console.log('🟤 onBeforeUnmount - clearing timers, listeners')
  clearInterval(timer)
})

// ⚫ After component destroyed
onUnmounted(() => {
  console.log('⚫ onUnmounted - cleanup complete')
})

// 🔴 Error handling
onErrorCaptured((err, instance, info) => {
  console.log('🔴 onErrorCaptured:', err, info)
  error.value = 'Something went wrong!'
  return false // prevent further propagation
})

// 🧪 Debug hooks (optional, for dev)
onRenderTracked((e) => {
  console.log('🧩 onRenderTracked - tracking:', e)
})

onRenderTriggered((e) => {
  console.log('🧩 onRenderTriggered - triggered by:', e)
})

// ✅ Function to fetch users
async function fetchUsers() {
  loading.value = true
  error.value = null
  try {
    // Fake API call
    await new Promise((res) => setTimeout(res, 1000))
    users.value = [
      { id: 1, name: 'Nagarjuna' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ]
    console.log('✅ Users fetched successfully')
  } catch (err) {
    error.value = 'Failed to fetch users'
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
  }
}

// ✅ Manual refresh
function refreshUsers() {
  console.log('🔄 Manual refresh')
  fetchUsers()
}
</script>

<style scoped>
h2 {
  color: #42b983;
}
ul {
  margin: 10px 0;
}
button {
  margin-top: 10px;
}
</style>
