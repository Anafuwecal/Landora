<template>
  <div class="certificates-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/certificates/cert-hero.jpg"
          alt="Certificates"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Certificates
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Certificates</span>
        </nav>
      </div>
    </section>

    <!-- Certificates Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Quality Assurance"
        title="Our Certifications"
        description="LANDORA properties meet the highest international standards. View our certifications below."
        centered
      />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <img
            :src="cert.image"
            :alt="cert.title"
            class="max-h-20 w-auto"
          />
        </div>
      </div>

      <div class="mt-16 max-w-3xl mx-auto text-center">
        <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">
          Committed to Excellence
        </h3>
        <p class="text-landora-muted">
          Our certifications demonstrate our unwavering commitment to quality, sustainability, 
          and safety. Every LANDORA property undergoes rigorous inspections and meets all 
          regulatory requirements to ensure your peace of mind.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const certificates = [
  { id: 1, title: 'ISO 9001', image: '/images/certificates/iso-9001.png' },
  { id: 2, title: 'Green Building', image: '/images/certificates/green-building.png' },
  { id: 3, title: 'Energy Star', image: '/images/certificates/energy-star.png' },
  { id: 4, title: 'LEED Certified', image: '/images/certificates/leed.png' },
  { id: 5, title: 'Safety Award', image: '/images/certificates/safety.png' },
  { id: 6, title: 'Quality Mark', image: '/images/certificates/quality.png' },
]
</script>