<template>
  <div class="apartment-page">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/apartments/three-rooms-hero.jpg"
          alt="3 Rooms Apartment"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Three Rooms 90m²
        </h1>
        <p class="text-xl text-white/80 mb-6">
          Luxury Family Living at Its Finest
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
          <span class="text-landora-accent">3 Rooms 90m²</span>
        </nav>
      </div>
    </section>

    <!-- Property Stats -->
    <section class="bg-landora-primary py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">Price of Property</p>
            <p class="text-3xl font-heading font-bold">$175,000</p>
          </div>
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">Total Area</p>
            <p class="text-3xl font-heading font-bold">90m²</p>
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
          title="Three Rooms 90m² Landora Flat"
        />
        <div class="prose prose-lg max-w-none text-landora-muted mb-12">
          <p class="mb-4">
            Our premium three-room apartment offers generous family living with 90m² of beautifully 
            designed space. This property features a master bedroom with ensuite, two additional bedrooms, 
            and a spacious open-plan living area.
          </p>
          <p class="mb-4">
            The gourmet kitchen is equipped with top-of-the-line appliances and ample storage. 
            Floor-to-ceiling windows provide stunning views and flood the apartment with natural light. 
            Premium finishes throughout reflect the quality and attention to detail that LANDORA is known for.
          </p>
          <p>
            This apartment is perfect for families who want space, comfort, and style in a prime location.
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