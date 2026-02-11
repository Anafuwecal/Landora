<template>
  <section class="section-container relative">
    <!-- Section Number -->
    <span class="section-number">03</span>
    
    <div class="relative z-10">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <SectionHeader
          subtitle="Gallery"
          title="Property Inner Gallery"
          description="Take a visual tour of our stunning properties and living spaces."
          class="mb-0"
        />
        <RouterLink
          to="/pages/gallery"
          class="btn-secondary mt-6 md:mt-0"
        >
          See All Gallery
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </RouterLink>
      </div>

      <!-- Gallery Grid -->
      <div 
        ref="galleryRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="(image, index) in galleryImages"
          :key="image.id"
          :class="[
            'group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500',
            index === 0 && 'sm:col-span-2 sm:row-span-2',
            isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
          @click="openLightbox(index)"
        >
          <img
            :src="image.url"
            :alt="image.title"
            class="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-110"
            :class="index === 0 ? 'h-[400px] sm:h-full' : 'h-48 sm:h-56'"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                      transition-colors duration-300 flex items-center justify-center">
            <MagnifyingGlassPlusIcon 
              class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300" 
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <LightboxModal
      v-model="isLightboxOpen"
      :images="galleryImages"
      :initial-index="lightboxIndex"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LightboxModal from '@/components/gallery/LightboxModal.vue'
import { ArrowRightIcon, MagnifyingGlassPlusIcon } from '@heroicons/vue/24/outline'

const galleryRef = ref<HTMLElement | null>(null)
const isGalleryVisible = ref(false)
const isLightboxOpen = ref(false)
const lightboxIndex = ref(0)

const galleryImages = [
  { id: 1, url: '/images/gallery/gallery-1.jpg', title: 'Living Room' },
  { id: 2, url: '/images/gallery/gallery-2.jpg', title: 'Kitchen' },
  { id: 3, url: '/images/gallery/gallery-3.jpg', title: 'Bedroom' },
  { id: 4, url: '/images/gallery/gallery-4.jpg', title: 'Bathroom' },
  { id: 5, url: '/images/gallery/gallery-5.jpg', title: 'Balcony' },
]

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  isLightboxOpen.value = true
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isGalleryVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (galleryRef.value) observer.observe(galleryRef.value)
})
</script>