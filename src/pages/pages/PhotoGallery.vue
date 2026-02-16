<template>
  <div class="photo-gallery-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <div 
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage})` }"
        ></div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Photo Gallery
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Photo Gallery</span>
        </nav>
      </div>
    </section>

    <!-- Gallery Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Our Portfolio"
        title="Explore Our Properties"
        description="Browse through our collection of stunning property images showcasing interiors, exteriors, and living spaces."
        centered
      />

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-3 font-heading font-medium text-sm uppercase tracking-wider',
            'rounded-sm transition-all duration-300',
            activeCategory === category.id
              ? 'bg-landora-primary text-white'
              : 'bg-landora-light text-landora-muted hover:bg-landora-primary/10'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in filteredImages"
          :key="image.id"
          class="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          @click="openLightbox(index)"
        >
          <img
            :src="image.url"
            :alt="image.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <MagnifyingGlassPlusIcon 
              class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <LightboxModal
      v-model="isLightboxOpen"
      :images="filteredImages"
      :initial-index="lightboxIndex"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LightboxModal from '@/components/gallery/LightboxModal.vue'
import { ChevronRightIcon, MagnifyingGlassPlusIcon } from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80'

const activeCategory = ref('all')
const isLightboxOpen = ref(false)
const lightboxIndex = ref(0)

const categories = [
  { id: 'all', label: 'All Area' },
  { id: 'interior', label: 'Interior' },
  { id: 'building', label: 'Building' },
  { id: 'spaces', label: 'Spaces' },
]

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Living Room', category: 'interior' },
  { id: 2, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Exterior View', category: 'building' },
  { id: 3, url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Kitchen', category: 'interior' },
  { id: 4, url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Bedroom', category: 'interior' },
  { id: 5, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Building Front', category: 'building' },
  { id: 6, url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Lounge Area', category: 'spaces' },
  { id: 7, url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Dining Room', category: 'interior' },
  { id: 8, url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Garden View', category: 'spaces' },
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return images
  }
  return images.filter(img => img.category === activeCategory.value)
})

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  isLightboxOpen.value = true
}
</script>