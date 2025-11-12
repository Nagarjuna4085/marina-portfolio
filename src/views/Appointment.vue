<script setup>
import { ref } from 'vue'
import { db } from '../firebase' // your firebase.js file
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

const name = ref('')
const phone = ref('')
const email = ref('')
const dateTime = ref('')
const service = ref('Companionship')
const success = ref(false)
const loading = ref(false)

// Booking function
const bookAppointment = async () => {
  if (!name.value || !phone.value || !dateTime.value) {
    alert('Please fill all required fields')
    return
  }

  loading.value = true

  // Check if the slot is already booked
  const q = query(
    collection(db, 'appointments'),
    where('dateTime', '==', dateTime.value)
  )
  const snapshot = await getDocs(q)
  if (!snapshot.empty) {
    alert('This time slot is already booked! Please choose another.')
    loading.value = false
    return
  }

  // Save appointment to Firestore
  await addDoc(collection(db, 'appointments'), {
    name: name.value,
    phone: phone.value,
    email: email.value,
    dateTime: dateTime.value,
    service: service.value,
    createdAt: new Date()
  })

  success.value = true
  loading.value = false

  // Clear form
  name.value = ''
  phone.value = ''
  email.value = ''
  dateTime.value = ''
  service.value = 'Companionship'
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-purple-700">Book Appointment</h2>
      <form @submit.prevent="bookAppointment" class="space-y-4">

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Name</label>
          <input v-model="name" type="text" placeholder="Your Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Phone Number</label>
          <input v-model="phone" type="tel" placeholder="Enter your phone number" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input v-model="email" type="email" placeholder="Your Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Date & Time</label>
          <input v-model="dateTime" type="datetime-local" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Service</label>
          <select v-model="service" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Companionship</option>
            <option>Private Dinner</option>
            <option>Event Escort</option>
          </select>
        </div>

        <button type="submit" class="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1">
          {{ loading ? 'Booking...' : 'Submit' }}
        </button>

        <p v-if="success" class="text-green-600 text-center mt-2">✅ Appointment booked successfully!</p>
      </form>
    </div>
  </div>
</template>
