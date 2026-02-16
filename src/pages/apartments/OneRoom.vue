<template>
  <div class="apartment-page">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div class="absolute inset-0">
        <div 
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${apartment.heroImage})` }"
        ></div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          {{ apartment.title }}
        </h1>
        <p class="text-xl text-white/80 mb-6">
          {{ apartment.subtitle }}
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
          <span class="text-landora-accent">1 Room 47m²</span>
        </nav>
      </div>
    </section>

    <!-- Property Stats -->
    <section class="bg-landora-primary py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">
              Price of Property
            </p>
            <p class="text-3xl font-heading font-bold">
              ${{ apartment.price.toLocaleString() }}
            </p>
          </div>
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">
              Total Area
            </p>
            <p class="text-3xl font-heading font-bold">
              {{ apartment.area }}m²
            </p>
          </div>
          <div class="text-center text-white">
            <p class="text-sm uppercase tracking-wider text-white/70 mb-2">
              Mortgage Rate
            </p>
            <p class="text-3xl font-heading font-bold">
              {{ apartment.mortgageRate }}%
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Content Column -->
        <div class="lg:col-span-2">
          <SectionHeader
            subtitle="Property Overview"
            :title="apartment.title"
          />

          <!-- Description -->
          <div class="prose prose-lg max-w-none mb-12">
            <p 
              v-for="(paragraph, index) in apartment.description" 
              :key="index" 
              class="text-landora-muted mb-4"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Image Gallery -->
          <div class="mb-12">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
              Property Gallery
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in apartment.gallery"
                :key="index"
                class="group relative aspect-video overflow-hidden rounded-lg cursor-pointer"
                @click="openGallery(index)"
              >
                <img
                  :src="image"
                  :alt="`Gallery image ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          <!-- Features List -->
          <div class="mb-12">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
              Property Features
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="feature in apartment.features"
                :key="feature"
                class="flex items-center"
              >
                <CheckCircleIcon class="w-5 h-5 text-landora-primary mr-3 flex-shrink-0" />
                <span class="text-landora-muted">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Specifications -->
          <div>
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
              Specifications
            </h3>
            <div class="bg-landora-light rounded-lg overflow-hidden">
              <div
                v-for="(spec, index) in apartment.specifications"
                :key="spec.label"
                :class="[
                  'flex justify-between items-center px-6 py-4',
                  index % 2 === 0 ? 'bg-white' : 'bg-landora-light'
                ]"
              >
                <span class="text-landora-muted">{{ spec.label }}</span>
                <span class="font-semibold text-landora-dark">{{ spec.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Contact Card -->
          <div class="bg-landora-light rounded-lg p-6 mb-8 sticky top-24">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">
              Interested in this property?
            </h3>
            <p class="text-landora-muted text-sm mb-6">
              Contact our sales team to schedule a viewing or get more information.
            </p>
            <RouterLink to="/contact" class="btn-primary w-full mb-4 text-center">
              Schedule a Visit
            </RouterLink>
            <a :href="`tel:${CONTACT_PHONE}`" class="btn-secondary w-full inline-flex items-center justify-center">
              <PhoneIcon class="w-5 h-5 mr-2" />
              Call Now
            </a>

            <!-- Agent Card -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <p class="text-sm text-landora-muted mb-4">Your Sales Agent</p>
              <div class="flex items-center">
                <img
                  :src="agentImage"
                  alt="Sales Agent"
                  class="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p class="font-semibold text-landora-dark">Jake Alexander</p>
                  <p class="text-sm text-landora-muted">Senior Sales Officer</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Apartments -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4">
              Other Apartments
            </h3>
            <div class="space-y-4">
              <RouterLink to="/apartments/two-rooms" class="block group">
                <div class="flex items-center">
                  <img
                    :src="otherApartments.twoRooms"
                    alt="2 Rooms"
                    class="w-20 h-16 rounded object-cover mr-4"
                  />
                  <div>
                    <p class="font-medium text-landora-dark group-hover:text-landora-primary transition-colors">
                      2 Rooms 65m²
                    </p>
                    <p class="text-sm text-landora-muted">From $120,000</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink to="/apartments/three-rooms" class="block group">
                <div class="flex items-center">
                  <img
                    :src="otherApartments.threeRooms"
                    alt="3 Rooms"
                    class="w-20 h-16 rounded object-cover mr-4"
                  />
                  <div>
                    <p class="font-medium text-landora-dark group-hover:text-landora-primary transition-colors">
                      3 Rooms 90m²
                    </p>
                    <p class="text-sm text-landora-muted">From $175,000</p>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-landora-dark py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote class="text-xl md:text-2xl lg:text-3xl font-heading font-light text-white italic mb-8">
          "LANDORA made finding our perfect home an absolute pleasure. The quality of their 
          properties and the professionalism of their team exceeded all our expectations."
        </blockquote>
        <div class="flex items-center justify-center">
          <img
            :src="testimonialImage"
            alt="Client"
            class="w-14 h-14 rounded-full object-cover mr-4"
          />
          <div class="text-left">
            <p class="text-white font-semibold">Viktor & Anna Rosavelt</p>
            <p class="text-gray-400 text-sm">Homeowners since 2023</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <LightboxModal
      v-model="isGalleryOpen"
      :images="galleryImages"
      :initial-index="galleryIndex"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LightboxModal from '@/components/gallery/LightboxModal.vue'
import { CONTACT_PHONE } from '@/utils/constants'
import { ChevronRightIcon, CheckCircleIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const isGalleryOpen = ref(false)
const galleryIndex = ref(0)

// Online images
const agentImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
const testimonialImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'

const otherApartments = {
  twoRooms: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  threeRooms: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
}

const apartment = {
  title: 'One Room 47m² Landora Flat',
  subtitle: 'Cozy Living Space for Modern Lifestyle',
  heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1980&q=80',
  price: 85000,
  area: 47,
  mortgageRate: 3.5,
  description: [
    'Welcome to this beautifully designed one-room apartment that perfectly balances comfort and functionality. Located in the heart of Lagos, this 47m² living space offers everything you need for a modern, convenient lifestyle.',
    'The open-plan layout maximizes the sense of space, with large windows flooding the apartment with natural light. The fully equipped kitchen features premium appliances and ample storage, while the versatile living area can be arranged to suit your needs.',
    'This property is ideal for young professionals, couples, or anyone seeking a low-maintenance home in a prime location with excellent transport links and local amenities.',
  ],
  gallery: [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ],
  features: [
    'Open-plan living area',
    'Fully equipped modern kitchen',
    'Built-in wardrobes',
    'Premium bathroom fixtures',
    'Double-glazed windows',
    'Underfloor heating',
    'Video intercom system',
    'Secure parking space',
    'Storage unit included',
    'Balcony with city views',
  ],
  specifications: [
    { label: 'Total Area', value: '47 m²' },
    { label: 'Living Area', value: '32 m²' },
    { label: 'Kitchen', value: '10 m²' },
    { label: 'Bathroom', value: '5 m²' },
    { label: 'Floor', value: '8 of 16' },
    { label: 'Ceiling Height', value: '2.8 m' },
    { label: 'Balcony', value: 'Yes (4 m²)' },
    { label: 'Parking', value: 'Underground' },
    { label: 'Heating', value: 'Individual' },
    { label: 'Year Built', value: '2023' },
  ],
}

const galleryImages = computed(() => 
  apartment.gallery.map((url, index) => ({
    id: index,
    url,
    title: `Interior view ${index + 1}`,
  }))
)

const openGallery = (index: number) => {
  galleryIndex.value = index
  isGalleryOpen.value = true
}
</script>