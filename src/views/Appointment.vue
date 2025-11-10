<template>
  <div class="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">Book Appointment</h1>
      
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block font-semibold mb-1">Your Name</label>
          <input v-model="form.name" type="text" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>

        <div>
          <label class="block font-semibold mb-1">Contact Info</label>
          <input v-model="form.contact" type="text" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>

        <div>
          <label class="block font-semibold mb-1">Date & Time</label>
          <input v-model="form.dateTime" type="datetime-local" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>

        <div>
          <label class="block font-semibold mb-1">Special Requests</label>
          <textarea v-model="form.requests" rows="3" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
        </div>

        <button type="submit" class="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-purple-700 transition">Submit</button>
      </form>

      <p v-if="success" class="mt-4 text-green-600 font-semibold text-center">Appointment submitted successfully!</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const form = ref({
      name: "",
      contact: "",
      dateTime: "",
      requests: "",
    });

    const success = ref(false);

    const submitForm = () => {
      console.log("Form submitted:", form.value);
      // Here, call your backend API to save the appointment
      success.value = true;
      form.value = { name: "", contact: "", dateTime: "", requests: "" };
    };

    return { form, submitForm, success };
  },
};
</script>
