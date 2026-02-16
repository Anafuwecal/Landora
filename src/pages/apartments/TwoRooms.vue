<template>
  <div class="apartment-page">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div class="absolute inset-0">
        <div 
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage})` }"
        ></div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Two Rooms 65m²
        </h1>
        <p class="text-xl text-white/80 mb-6">
          Spacious Living for Growing Families
        </p>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <RouterLink to="/apartments" class="hover:text-landora-accent transition-colors">
            Apartments
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">2 Rooms 65m²</span>
        </nav>
      </div>
    </section>

    <!-- Property Stats -->
    <section class="bg-landora-primary py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">Price of Property</p>
            <p class="text-3xl font-heading font-bold">$120,000</p>
          </div>
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">Total Area</p>
            <p class="text-3xl font-heading font-bold">65m²</p>
          </div>
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">Mortgage Rate</p>
            <p class="text-3xl font-heading font-bold">3.5%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2">
          <SectionHeader
            subtitle="Property Overview"
            title="Two Rooms 65m² Landora Flat"
          />
          <div class="prose prose-lg max-w-none text-landora-muted mb-12">
            <p class="mb-4">
              This spacious two-room apartment offers the perfect balance of privacy and shared living space. 
              With 65m² of thoughtfully designed floor space, this property is ideal for small families or 
              professionals who need a dedicated home office.
            </p>
            <p class="mb-4">
              The separate bedroom provides a peaceful retreat, while the open-plan living and dining area 
              creates a welcoming space for entertaining. Large windows ensure plenty of natural light 
              throughout the day.
            </p>
            <p>
              Premium finishes, modern appliances, and smart home features come standard, making this 
              apartment ready for immediate occupancy.
            </p>
          </div>

          <!-- Gallery -->
          <div class="mb-12">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
              Property Gallery
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in galleryImages"
                :key="index"
                class="relative aspect-video overflow-hidden rounded-lg"
              >
                <img
                  :src="image"
                  :alt="`Gallery image ${index + 1}`"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="mb-12">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
              Property Features
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="feature in features" :key="feature" class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-landora-primary mr-3 flex-shrink-0" />
                <span class="text-landora-muted">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-landora-light rounded-lg p-6 sticky top-24">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">
              Interested in this property?
            </h3>
            <p class="text-landora-muted text-sm mb-6">
              Contact our sales team to schedule a viewing.
            </p>
            <RouterLink to="/contact" class="btn-primary w-full mb-4 text-center">
              Schedule a Visit
            </RouterLink>
            <RouterLink to="/apartments" class="btn-secondary w-full text-center">
              View Other Apartments
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const galleryImages = [
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
]

const features = [
  'Two spacious bedrooms',
  'Open-plan living/dining area',
  'Fully equipped modern kitchen',
  'Two bathrooms',
  'Built-in wardrobes',
  'Premium fixtures',
  'Double-glazed windows',
  'Underfloor heating',
  'Video intercom system',
  'Secure parking space',
]
</script>