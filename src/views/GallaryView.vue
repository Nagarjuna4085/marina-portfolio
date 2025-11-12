<template>
  <div class="min-h-screen bg-white px-6 py-12">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-12">Gallery</h1>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in gallery"
        :key="index"
        class="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition transform cursor-pointer"
      >
        <img
          :src="item.url"
          :alt="item.title"
          class="w-full h-48 object-cover"
          @click="openLightbox(index)"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white text-3xl font-bold"
      >&times;</button>
      <img
        :src="gallery[currentIndex].url"
        class="max-h-full max-w-full rounded-lg"
      />
      <button
        @click="prev"
        class="absolute left-4 text-white text-4xl font-bold"
      >&lt;</button>
      <button
        @click="next"
        class="absolute right-4 text-white text-4xl font-bold"
      >&gt;</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import g12 from "../assets/FullGallary/IMG-20251112-WA0012.jpg"
import g14 from "../assets/FullGallary/IMG-20251112-WA0014.jpg"
import g15 from "../assets/FullGallary/IMG-20251112-WA0015.jpg"
import g17 from "../assets/FullGallary/IMG-20251112-WA0017.jpg"
import g18 from "../assets/FullGallary/IMG-20251112-WA0018.jpg"
import g19 from "../assets/FullGallary/IMG-20251112-WA0019.jpg"
import g22 from "../assets/FullGallary/IMG-20251112-WA0022.jpg"
import g23 from "../assets/FullGallary/IMG-20251112-WA0023.jpg"
import g26 from "../assets/FullGallary/IMG-20251112-WA0026.jpg"
import g27 from "../assets/FullGallary/IMG-20251112-WA0027.jpg"
import g29 from "../assets/FullGallary/IMG-20251112-WA0029.jpg"
import g30 from "../assets/FullGallary/IMG-20251112-WA0030.jpg"

export default {
  setup() {
    const gallery = ref([
      { url: g12, title: "Image 1" },
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
      currentIndex.value = (currentIndex.value - 1 + gallery.value.length) % gallery.value.length;
    };

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % gallery.value.length;
    };

    return { gallery, showLightbox, currentIndex, openLightbox, closeLightbox, prev, next };
  },
};
</script>
