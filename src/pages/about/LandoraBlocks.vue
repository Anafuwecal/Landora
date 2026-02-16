<template>
  <div class="landora-blocks-page">
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
          Landora Blocks
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Landora Blocks</span>
        </nav>
      </div>
    </section>

    <!-- Blocks Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Our Developments"
        title="Landora Residential Blocks"
        description="Explore our portfolio of residential developments, each designed with modern living in mind."
        centered
      />

      <!-- Blocks Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="block in blocks"
          :key="block.id"
          class="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="block.image"
              :alt="block.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-landora-primary text-white px-3 py-1 text-sm font-medium rounded">
              {{ block.status }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-2 group-hover:text-landora-primary transition-colors">
              {{ block.name }}
            </h3>
            <p class="text-landora-muted text-sm mb-4">{{ block.location }}</p>
            <div class="flex items-center justify-between text-sm text-landora-muted">
              <span>{{ block.units }} Units</span>
              <span>{{ block.floors }} Floors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

// Use online placeholder images
const heroImage = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1935&q=80'

const blocks = [
  {
    id: 1,
    name: 'Block A - City Tower',
    location: 'Ikeja, Lagos',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    units: 120,
    floors: 16,
    status: 'Available',
  },
  {
    id: 2,
    name: 'Block B - Sunrise View',
    location: 'Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    units: 80,
    floors: 12,
    status: 'Sold Out',
  },
  {
    id: 3,
    name: 'Block C - Garden Center',
    location: 'Ajah, Lagos',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    units: 60,
    floors: 10,
    status: 'Coming Soon',
  },
]
</script>