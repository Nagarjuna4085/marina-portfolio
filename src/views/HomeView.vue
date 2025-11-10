<template>
  <div class="font-sans text-gray-800">

    <!-- Hero Section (100vh) -->
    <header class="relative min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        Welcome to Elegant Companions
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-md">
        Professional escort services with elegance and style
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="#services" class="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
          View Services
        </a>
        <a href="#appointment" class="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1">
          Book Appointment
        </a>
      </div>
      <!-- Optional subtle overlay for hero image feel -->
      <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-60"></div>
    </header>

    <!-- Gallery Preview -->
    <section id="gallery" class="py-16 px-6 bg-white">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Gallery</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Gallery Image" class="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Gallery Image" class="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer">
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Gallery Image" class="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Gallery Image" class="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer">
      </div>
      <div class="text-center mt-8">
        <a href="/gallery" class="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1">
          View Full Gallery
        </a>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 px-6 bg-gray-100">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h3 class="text-xl sm:text-2xl font-semibold mb-2 text-purple-700">Companionship</h3>
          <p class="text-gray-600 mb-4">Enjoy quality time and elegant companionship for events or private meetings.</p>
          <p class="font-bold text-purple-600 text-lg">$150/hour</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h3 class="text-xl sm:text-2xl font-semibold mb-2 text-purple-700">Private Dinner</h3>
          <p class="text-gray-600 mb-4">Professional company for private dinners, travel, or social events.</p>
          <p class="font-bold text-purple-600 text-lg">$200/hour</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h3 class="text-xl sm:text-2xl font-semibold mb-2 text-purple-700">Event Escort</h3>
          <p class="text-gray-600 mb-4">Accompany you to weddings, parties, or corporate events with style.</p>
          <p class="font-bold text-purple-600 text-lg">$250/hour</p>
        </div>
      </div>
    </section>

    <!-- Appointment Section -->
    <section id="appointment" class="py-16 px-6 text-center bg-purple-600 text-white">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">Book Your Appointment</h2>
      <p class="mb-8 text-lg sm:text-xl">Fill out the form and get a confirmation instantly.</p>
      <a href="/appointment" class="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
        Book Now
      </a>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 text-center py-6">
      &copy; 2025 Elegant Companions. All rights reserved.
    </footer>

  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>
