<template>
  <div>
    <h2>Lifecycle Demo</h2>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase Count</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'

const count = ref(0)

console.log('🟣 setup() - component initialized')

onBeforeMount(() => {
  console.log('🟠 onBeforeMount - before mounting to DOM')
})

onMounted(() => {
  console.log('🟢 onMounted - DOM is ready')
})

onBeforeUpdate(() => {
  console.log('🟡 onBeforeUpdate - before re-render due to state change')
})

onUpdated(() => {
  console.log('🔵 onUpdated - DOM re-rendered')
})

onBeforeUnmount(() => {
  console.log('🟤 onBeforeUnmount - before component destroyed')
})

onUnmounted(() => {
  console.log('⚫ onUnmounted - component destroyed')
})

onErrorCaptured((err, instance, info) => {
  console.log('🔴 onErrorCaptured - error caught', err, info)
})

onRenderTracked((e) => {
  console.log('🟢 onRenderTracked - reactivity tracked:', e)
})

onRenderTriggered((e) => {
  console.log('🔵 onRenderTriggered - re-render triggered by:', e)
})
</script>

<style scoped>
h2 { color: #42b983; }
button { margin-top: 10px; }
</style>
