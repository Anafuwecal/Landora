<template>
  <div class="sales-offices-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/offices/offices-hero.jpg"
          alt="Sales Offices"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Sales Offices
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Sales Offices</span>
        </nav>
      </div>
    </section>

    <!-- Offices Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Visit Us"
        title="Our Sales Offices"
        description="Find a LANDORA sales office near you. Our team is ready to help you find your perfect home."
        centered
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="office in offices"
          :key="office.id"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-start mb-4">
            <MapPinIcon class="w-6 h-6 text-landora-primary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-lg font-heading font-semibold text-landora-dark mb-1">
                {{ office.name }}
              </h3>
              <p class="text-landora-muted text-sm">{{ office.city }}, {{ office.country }}</p>
            </div>
          </div>
          <p class="text-landora-muted mb-4">{{ office.address }}</p>
          <div class="space-y-2 text-sm text-landora-muted mb-4">
            <p v-if="office.phone" class="flex items-center">
              <PhoneIcon class="w-4 h-4 mr-2 text-landora-primary" />
              {{ office.phone }}
            </p>
            <p v-if="office.email" class="flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-2 text-landora-primary" />
              {{ office.email }}
            </p>
            <p v-if="office.hours" class="flex items-center">
              <ClockIcon class="w-4 h-4 mr-2 text-landora-primary" />
              {{ office.hours }}
            </p>
          </div>
          <a
            :href="office.mapUrl"
            target="_blank"
            class="inline-flex items-center text-landora-primary hover:text-landora-secondary transition-colors font-medium"
          >
            Click for Map
            <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import {
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'

const offices = [
  {
    id: 1,
    name: 'Kyiv - Pechersk Office',
    city: 'Kyiv',
    country: 'Ukraine',
    address: 'Khreshchatyk 15th Street, Floor 17',
    phone: '+380 98 123 4567',
    email: 'pechersk@landora.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 2,
    name: 'Kyiv - Pozniaky Office',
    city: 'Kyiv',
    country: 'Ukraine',
    address: 'Pozniaky District, Building 42',
    phone: '+380 98 234 5678',
    email: 'pozniaky@landora.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 3,
    name: 'Lviv Office',
    city: 'Lviv',
    country: 'Ukraine',
    address: 'Svobody Avenue 28, Floor 5',
    phone: '+380 98 345 6789',
    email: 'lviv@landora.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com',
  },
]
</script>