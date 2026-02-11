<template>
  <div class="photo-gallery-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/gallery-hero.jpg"
          alt="Photo Gallery"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
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
        description="Browse through our collection of stunning property images showcasing 
                     interiors, exteriors, and living spaces."
        centered
      />

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in GALLERY_CATEGORIES"
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

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>

      <!-- Gallery Grid -->
      <TransitionGroup
        v-else
        name="gallery"
        tag="div"
        class="gallery-grid"
      >
        <div
          v-for="(image, index) in filteredImages"
          :key="image.id"
          class="group relative aspect-property overflow-hidden rounded-lg cursor-pointer"
          @click="openLightbox(index)"
        >
          <img
            :src="image.url"
            :alt="image.title || 'Gallery image'"
            class="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                      transition-colors duration-300 flex items-center justify-center">
            <MagnifyingGlassPlusIcon 
              class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300" 
            />
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent
                      translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p class="text-white text-sm font-medium">
              {{ image.title || 'View Image' }}
            </p>
            <p class="text-white/70 text-xs capitalize">
              {{ image.category }}
            </p>
          </div>
        </div>
      </TransitionGroup>

      <!-- Empty State -->
      <div
        v-if="!loading && filteredImages.length === 0"
        class="text-center py-12"
      >
        <PhotoIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p class="text-landora-muted">No images found in this category.</p>
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
import { ref, computed, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import LightboxModal from '@/components/gallery/LightboxModal.vue'
import { GALLERY_CATEGORIES } from '@/utils/constants'
import { fetchGalleryImages } from '@/composables/useApi'
import type { GalleryImage } from '@/types'
import {
  ChevronRightIcon,
  MagnifyingGlassPlusIcon,
  PhotoIcon,
} from '@heroicons/vue/24/outline'

const activeCategory = ref('all')
const images = ref<GalleryImage[]>([])
const loading = ref(true)
const isLightboxOpen = ref(false)
const lightboxIndex = ref(0)

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return images.value
  }
  return images.value.filter(img => img.category === activeCategory.value)
})

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  isLightboxOpen.value = true
}

onMounted(async () => {
  try {
    images.value = await fetchGalleryImages()
  } catch (error) {
    console.error('Failed to fetch gallery images:', error)
    // Use mock data as fallback
    images.value = [
      { id: '1', url: '/images/gallery/gallery-1.jpg', title: 'Modern Living Room', category: 'interior', order: 1, active: true },
      { id: '2', url: '/images/gallery/gallery-2.jpg', title: 'Gourmet Kitchen', category: 'interior', order: 2, active: true },
      { id: '3', url: '/images/gallery/gallery-3.jpg', title: 'Master Bedroom', category: 'interior', order: 3, active: true },
      { id: '4', url: '/images/gallery/gallery-4.jpg', title: 'Building Exterior', category: 'building', order: 4, active: true },
      { id: '5', url: '/images/gallery/gallery-5.jpg', title: 'Rooftop Terrace', category: 'spaces', order: 5, active: true },
      { id: '6', url: '/images/gallery/gallery-6.jpg', title: 'Swimming Pool', category: 'spaces', order: 6, active: true },
      { id: '7', url: '/images/gallery/gallery-7.jpg', title: 'Lobby Entrance', category: 'building', order: 7, active: true },
      { id: '8', url: '/images/gallery/gallery-8.jpg', title: 'Bathroom Suite', category: 'interior', order: 8, active: true },
    ]
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.gallery-move {
  transition: transform 0.5s ease;
}
</style>