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

export default {
  setup() {
    const gallery = ref([
      { url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 1" },
      { url: "https://images.unsplash.com/photo-1612831455541-3e7bce7d44df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 2" },
      { url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 3" },
      { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 4" },
      { url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 5" },
      { url: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 6" },
      { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 7" },
      { url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Image 8" },
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
