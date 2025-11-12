<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12">
    
    <!-- Back Button -->
    <button
      @click="goBack"
      class="self-start mb-6 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
    >
      &larr; Back
    </button>

    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-purple-700 mb-12 text-center">
      Gallery
    </h1>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-7xl">
      <div
        v-for="(item, index) in gallery"
        :key="index"
        class="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
        <img
          :src="item.url"
          :alt="item.title"
          class="w-full h-64 sm:h-52 md:h-60 lg:h-64 object-cover"
          @click="openLightbox(index)"
        />
      </div>
    </div>

    <!-- Lightbox Overlay -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <!-- Close Button -->
      <button
        @click="closeLightbox"
        class="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300 transition"
      >
        &times;
      </button>

      <!-- Navigation Buttons -->
      <button
        @click="prev"
        class="absolute left-6 text-white text-5xl font-bold hover:text-gray-300 transition"
      >&lt;</button>
      <button
        @click="next"
        class="absolute right-6 text-white text-5xl font-bold hover:text-gray-300 transition"
      >&gt;</button>

      <!-- Image -->
      <img
        :src="gallery[currentIndex].url"
        :alt="gallery[currentIndex].title"
        class="max-w-full max-h-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import g12 from "../assets/FullGallary/IMG-20251112-WA0012.jpg";
import g14 from "../assets/FullGallary/IMG-20251112-WA0014.jpg";
import g15 from "../assets/FullGallary/IMG-20251112-WA0015.jpg";
import g17 from "../assets/FullGallary/IMG-20251112-WA0017.jpg";
import g18 from "../assets/FullGallary/IMG-20251112-WA0018.jpg";
import g19 from "../assets/FullGallary/IMG-20251112-WA0019.jpg";
import g22 from "../assets/FullGallary/IMG-20251112-WA0022.jpg";
import g23 from "../assets/FullGallary/IMG-20251112-WA0023.jpg";
import g26 from "../assets/FullGallary/IMG-20251112-WA0026.jpg";
import g27 from "../assets/FullGallary/IMG-20251112-WA0027.jpg";
import g29 from "../assets/FullGallary/IMG-20251112-WA0029.jpg";
import g30 from "../assets/FullGallary/IMG-20251112-WA0030.jpg";

export default {
  setup() {
    const router = useRouter();

    const gallery = ref([
      { url: g12, title: "Image 12" },
      { url: g14, title: "Image 14" },
      { url: g15, title: "Image 15" },
      { url: g17, title: "Image 17" },
      { url: g18, title: "Image 18" },
      { url: g19, title: "Image 19" },
      { url: g22, title: "Image 22" },
      { url: g23, title: "Image 23" },
      { url: g26, title: "Image 26" },
      { url: g27, title: "Image 27" },
      { url: g29, title: "Image 29" },
      { url: g30, title: "Image 30" },
    ]);

    const showLightbox = ref(false);
    const currentIndex = ref(0);

    const openLightbox = (index) => {
      currentIndex.value = index;
      showLightbox.value = true;
    };

    const closeLightbox = () => {
      showLightbox.value = false;
    };

    const prev = () => {
      currentIndex.value =
        (currentIndex.value - 1 + gallery.value.length) % gallery.value.length;
    };

    const next = () => {
      currentIndex.value =
        (currentIndex.value + 1) % gallery.value.length;
    };

    const goBack = () => {
      router.back();
    };

    return {
      gallery,
      showLightbox,
      currentIndex,
      openLightbox,
      closeLightbox,
      prev,
      next,
      goBack,
    };
  },
};
</script>

<style>
/* Optional: smooth transitions for lightbox images */
img {
  transition: transform 0.3s ease;
}
</style>
