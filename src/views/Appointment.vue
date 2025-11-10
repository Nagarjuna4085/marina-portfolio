<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-purple-700">Book Appointment</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Name</label>
          <input type="text" placeholder="Your Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>
        <div>
  <label class="block text-gray-700 font-semibold mb-1" for="phone">Phone Number</label>
  <input 
    id="phone"
    type="tel" 
    placeholder="Enter your phone number" 
    required
    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
  />
</div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input type="email" placeholder="Your Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Date & Time</label>
          <input type="datetime-local" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"/>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Service</label>
          <select class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Companionship</option>
            <option>Private Dinner</option>
            <option>Event Escort</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>
