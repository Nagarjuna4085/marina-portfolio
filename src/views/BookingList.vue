<script setup>
import { ref, onMounted, computed } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

// State
const bookings = ref([])
const loading = ref(false)
const filterDate = ref('')
const filterTime = ref('')

// Fetch all bookings ordered by dateTime descending
const fetchBookings = async () => {
  loading.value = true
  try {
    const q = query(collection(db, 'appointments'), orderBy('dateTime', 'desc'))
    const snapshot = await getDocs(q)
    bookings.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching bookings:', error)
  } finally {
    loading.value = false
  }
}

// Filtered bookings based on date & time
const filteredBookings = computed(() => {
  return bookings.value.filter(b => {
    const [bookingDate, bookingTime] = b.dateTime.split('T')
    const bookingTimeShort = bookingTime?.substring(0,5)

    const dateMatch = filterDate.value ? bookingDate === filterDate.value : true
    const timeMatch = filterTime.value ? bookingTimeShort === filterTime.value : true

    return dateMatch && timeMatch
  })
})

onMounted(fetchBookings)
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold text-center mb-6 text-purple-700">All Bookings</h1>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
      <div>
        <label class="block font-semibold mb-1 text-gray-700">Filter by Date</label>
        <input 
          v-model="filterDate" 
          type="date" 
          class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
        />
      </div>

      <div>
        <label class="block font-semibold mb-1 text-gray-700">Filter by Time</label>
        <input 
          v-model="filterTime" 
          type="time" 
          class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
        />
      </div>
    </div>

    <!-- Loading state -->
    <p v-if="loading" class="text-center text-purple-600 font-semibold">Loading bookings...</p>

    <!-- Bookings table -->
    <div v-else class="overflow-x-auto shadow rounded-lg">
      <table class="min-w-full bg-white rounded-lg">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="py-3 px-4 text-left">Name</th>
            <th class="py-3 px-4 text-left">Phone</th>
            <th class="py-3 px-4 text-left">Email</th>
            <th class="py-3 px-4 text-left">Service</th>
            <th class="py-3 px-4 text-left">Date & Time</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="booking in filteredBookings" 
            :key="booking.id" 
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="py-2 px-4">{{ booking.name }}</td>
            <td class="py-2 px-4">{{ booking.phone }}</td>
            <td class="py-2 px-4">{{ booking.email }}</td>
            <td class="py-2 px-4">{{ booking.service }}</td>
            <td class="py-2 px-4">{{ booking.dateTime.replace('T', ' ') }}</td>
          </tr>
          <tr v-if="filteredBookings.length === 0">
            <td colspan="5" class="text-center py-4 text-gray-500">No bookings found for the selected filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
