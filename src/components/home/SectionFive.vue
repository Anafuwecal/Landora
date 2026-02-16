<template>
  <section class="section-container relative">
    
    <div class="relative z-10">
      <SectionHeader
        subtitle="Our Apartments"
        title="Choose Your Perfect Space"
        description="From cozy studios to spacious three-bedroom apartments, find the layout that fits your lifestyle."
        centered
      />

      <!-- Apartment Cards -->
      <div 
        ref="cardsRef"
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <RouterLink
          v-for="(apartment, index) in apartments"
          :key="apartment.slug"
          :to="`/apartments/${apartment.slug}`"
          :class="[
            'group card overflow-hidden transition-all duration-500',
            isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="apartment.image"
              :alt="apartment.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-landora-primary text-white px-3 py-1 text-sm font-heading font-semibold rounded">
              {{ apartment.area }}m²
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-2 group-hover:text-landora-primary transition-colors">
              {{ apartment.title }}
            </h3>
            <p class="text-landora-muted text-sm mb-4">
              {{ apartment.description }}
            </p>
            
            <!-- Features -->
            <div class="flex items-center justify-between text-sm text-landora-muted pt-4 border-t">
              <div class="flex items-center">
                <HomeIcon class="w-4 h-4 mr-1" />
                <span>{{ apartment.rooms }} {{ apartment.rooms === 1 ? 'Room' : 'Rooms' }}</span>
              </div>
              <div class="flex items-center">
                <CurrencyDollarIcon class="w-4 h-4 mr-1" />
                <span>From ${{ apartment.price.toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <RouterLink to="/apartments" class="btn-secondary">
          View All Apartments
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { HomeIcon, CurrencyDollarIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { images } from '@/utils/images'

const cardsRef = ref<HTMLElement | null>(null)
const isCardsVisible = ref(false)

const apartments = [
  {
    slug: 'one-room',
    title: '1 Room Apartment',
    area: 47,
    rooms: 1,
    price: 85000,
    image: images.property.oneRoom,
    description: 'Perfect for singles or couples, featuring an open-plan living area with modern amenities.',
  },
  {
    slug: 'two-rooms',
    title: '2 Rooms Apartment',
    area: 65,
    rooms: 2,
    price: 120000,
    image: images.property.twoRooms,
    description: 'Ideal for small families, with a separate bedroom and spacious living area.',
  },
  {
    slug: 'three-rooms',
    title: '3 Rooms Apartment',
    area: 90,
    rooms: 3,
    price: 175000,
    image: images.property.threeRooms,
    description: 'Generous family living with multiple bedrooms and premium finishes throughout.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isCardsVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (cardsRef.value) observer.observe(cardsRef.value)
})
</script>