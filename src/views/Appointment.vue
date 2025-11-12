<script setup>
import { ref, computed, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

// Form data
const name = ref('')
const phone = ref('')
const email = ref('')
const selectedDate = ref('')
const selectedTime = ref('')
const service = ref('Companionship')
const success = ref(false)
const loading = ref(false)

// Time slots for each day (you can adjust)
const allSlots = [
  '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00'
]

// Available slots for selected date
const availableSlots = ref([])

// Compute min date (today)
const today = new Date()
const minDate = computed(() => {
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

// Fetch available slots for selected date
const fetchAvailableSlots = async () => {
  if (!selectedDate.value) return
  loading.value = true
  const q = query(
    collection(db, 'appointments'),
    where('dateTime', '>=', `${selectedDate.value}T00:00`),
    where('dateTime', '<=', `${selectedDate.value}T23:59`)
  )
  const snapshot = await getDocs(q)
  const bookedTimes = snapshot.docs.map(doc => {
    const dt = doc.data().dateTime
    return dt.split('T')[1].substring(0, 5) // get HH:MM
  })
  // Filter slots that are already booked
  availableSlots.value = allSlots.filter(slot => !bookedTimes.includes(slot))
  loading.value = false
}

// Booking function
const bookAppointment = async () => {
  if (!name.value || !phone.value || !selectedDate.value || !selectedTime.value) {
    alert('Please fill all required fields')
    return
  }

  const dateTimeValue = `${selectedDate.value}T${selectedTime.value}`

  loading.value = true
  try {
    // Check again if the slot is booked
    const q = query(
      collection(db, 'appointments'),
      where('dateTime', '==', dateTimeValue)
    )
    const snapshot = await getDocs(q)

    if (!snapshot.empty) {
      alert('This time slot is already booked! Please choose another.')
      loading.value = false
      fetchAvailableSlots()
      return
    }

    // Save appointment
    await addDoc(collection(db, 'appointments'), {
      name: name.value,
      phone: phone.value,
      email: email.value,
      dateTime: dateTimeValue,
      service: service.value,
      createdAt: new Date()
    })

    success.value = true
    name.value = ''
    phone.value = ''
    email.value = ''
    selectedDate.value = ''
    selectedTime.value = ''
    service.value = 'Companionship'
    availableSlots.value = []
  } catch (err) {
    console.error(err)
    alert('Error booking appointment.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-purple-700">Book Appointment</h2>
      <form @submit.prevent="bookAppointment" class="space-y-4">

        <!-- Name -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Name</label>
          <input v-model="name" type="text" placeholder="Your Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Phone Number</label>
          <input v-model="phone" type="tel" placeholder="Enter your phone number" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input v-model="email" type="email" placeholder="Your Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <!-- Date -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Select Date</label>
          <input 
            type="date" 
            v-model="selectedDate" 
            :min="minDate" 
            @change="fetchAvailableSlots" 
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>

        <!-- Time -->
        <div v-if="selectedDate">
          <label class="block text-gray-700 font-semibold mb-1">Select Time</label>
          <select v-model="selectedTime" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option disabled value="">-- Select Time --</option>
            <option v-for="slot in availableSlots" :key="slot">{{ slot }}</option>
          </select>
          <p v-if="availableSlots.length === 0" class="text-red-500 mt-1">No available slots on this date.</p>
        </div>

        <!-- Service -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Service</label>
          <select v-model="service" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Companionship</option>
            <option>Private Dinner</option>
            <option>Event Escort</option>
          </select>
        </div>

        <!-- Submit -->
        <button type="submit" class="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1">
          {{ loading ? 'Booking...' : 'Submit' }}
        </button>

        <p v-if="success" class="text-green-600 text-center mt-2">✅ Appointment booked successfully!</p>
      </form>
    </div>
  </div>
</template>
