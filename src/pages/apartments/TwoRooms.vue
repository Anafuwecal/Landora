<template>
  <div class="apartment-page">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/apartments/two-rooms-hero.jpg"
          alt="2 Rooms Apartment"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
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
      <div class="max-w-4xl mx-auto">
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

        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/contact" class="btn-primary">
            Schedule a Viewing
          </RouterLink>
          <RouterLink to="/apartments" class="btn-secondary">
            View Other Apartments
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>