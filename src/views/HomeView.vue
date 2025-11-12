<template>
  <div class="font-sans text-gray-800">

    <!-- Hero Section -->
    <header 
      class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-60"></div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
        Welcome to Marina
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-md relative z-10">
        Professional escort services with elegance and style
      </p>

      <div class="flex flex-wrap justify-center gap-4 relative z-10">
        <a href="#services" class="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
          View Services
        </a>
        <button 
          @click="showDialog = true"
          class="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
        >
          Book Appointment
        </button>
      </div>
    </header>

    <!-- Gallery -->
    <section id="gallery" class="py-16 px-6 bg-white">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Gallery</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <img v-for="i in 5" :key="i" 
             :src="gallery[i - 1]" 
             alt="Gallery Image" 
             class="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer">
      </div>
      <div class="text-center mt-8">
        <a href="/gallery" class="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1">
          View Full Gallery
        </a>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-16 px-6 bg-gray-100">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.title" 
             class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h3 class="text-xl sm:text-2xl font-semibold mb-2 text-purple-700">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.desc }}</p>
          <p class="font-bold text-purple-600 text-lg">{{ service.price }}</p>
        </div>
      </div>
    </section>

    <!-- Appointment CTA -->
    <section id="appointment" class="py-16 px-6 text-center bg-purple-600 text-white">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">Book Your Appointment</h2>
      <p class="mb-8 text-lg sm:text-xl">Fill out the form and get a confirmation instantly.</p>
      <button 
        @click="showDialog = true"
        class="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
      >
        Book Now
      </button>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 text-center py-6">
      &copy; 2025 Marina. All rights reserved.
    </footer>

    <!-- Modal -->
    <transition name="fade">
      <div 
        v-if="showDialog" 
        class="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
      >
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg relative overflow-y-auto">
          <button 
            @click="showDialog = false" 
            class="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
          >
            ✕
          </button>
          <div class="p-4 sm:p-6">
            <Appointment />
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import bgImage from '../assets/bg.jpg'
import Appointment from '../views/Appointment.vue'

const showDialog = ref(false)

const gallery = [
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80'
]

const services = [
  { title: 'Companionship', desc: 'Enjoy quality time and elegant companionship for events or private meetings.', price: '$150/hour' },
  { title: 'Private Dinner', desc: 'Professional company for private dinners, travel, or social events.', price: '$200/hour' },
  { title: 'Event Escort', desc: 'Accompany you to weddings, parties, or corporate events with style.', price: '$250/hour' }
]
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
