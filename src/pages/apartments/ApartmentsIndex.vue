<template>
  <div class="apartments-index-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/apartments/apartments-hero.jpg"
          alt="Apartments"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Our Apartments
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Apartments</span>
        </nav>
      </div>
    </section>

    <!-- Apartments Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Find Your Space"
        title="Choose Your Perfect Apartment"
        description="From cozy studios to spacious family homes, find the layout that fits your lifestyle."
        centered
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RouterLink
          v-for="apartment in apartments"
          :key="apartment.slug"
          :to="`/apartments/${apartment.slug}`"
          class="group card overflow-hidden"
        >
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
          <div class="p-6">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-2 group-hover:text-landora-primary transition-colors">
              {{ apartment.title }}
            </h3>
            <p class="text-landora-muted text-sm mb-4">
              {{ apartment.description }}
            </p>
            <div class="flex items-center justify-between text-sm text-landora-muted pt-4 border-t">
              <div class="flex items-center">
                <HomeIcon class="w-4 h-4 mr-1" />
                <span>{{ apartment.rooms }} {{ apartment.rooms === 1 ? 'Room' : 'Rooms' }}</span>
              </div>
              <div class="flex items-center font-semibold text-landora-primary">
                From ${{ apartment.price.toLocaleString() }}
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/24/outline'

const apartments = [
  {
    slug: 'one-room',
    title: '1 Room Apartment',
    area: 47,
    rooms: 1,
    price: 85000,
    image: '/images/apartments/one-room.jpg',
    description: 'Perfect for singles or couples, featuring an open-plan living area with modern amenities.',
  },
  {
    slug: 'two-rooms',
    title: '2 Rooms Apartment',
    area: 65,
    rooms: 2,
    price: 120000,
    image: '/images/apartments/two-rooms.jpg',
    description: 'Ideal for small families, with a separate bedroom and spacious living area.',
  },
  {
    slug: 'three-rooms',
    title: '3 Rooms Apartment',
    area: 90,
    rooms: 3,
    price: 175000,
    image: '/images/apartments/three-rooms.jpg',
    description: 'Generous family living with multiple bedrooms and premium finishes throughout.',
  },
]
</script>