<template>
  <div class="facilities-page">
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
          Facilities
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Facilities</span>
        </nav>
      </div>
    </section>

    <!-- Facilities Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="What We Offer"
        title="Premium Facilities & Amenities"
        description="Every LANDORA property comes with world-class facilities designed to enhance your living experience and provide maximum comfort."
        centered
      />

      <!-- Facilities Grid -->
      <div 
        ref="facilitiesRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(facility, index) in facilities"
          :key="facility.id"
          :class="[
            'group bg-white rounded-lg shadow-md overflow-hidden',
            'transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
            isFacilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Icon/Image -->
          <div class="relative h-48 bg-landora-light flex items-center justify-center group-hover:bg-landora-primary transition-colors duration-300">
            <div class="w-20 h-20 rounded-full bg-landora-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <component
                :is="facility.icon"
                class="w-10 h-10 text-landora-primary group-hover:text-white transition-colors duration-300"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-heading font-semibold text-landora-dark mb-3 group-hover:text-landora-primary transition-colors">
              {{ facility.title }}
            </h3>
            <p class="text-landora-muted">
              {{ facility.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="bg-landora-light">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Quality Living"
              title="Designed for Your Comfort"
              description="We believe that a home should be more than just a place to live. It should be a sanctuary where every detail is considered for your wellbeing."
            />
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <CheckCircleIcon class="w-6 h-6 text-landora-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-landora-dark">24/7 Security</h4>
                  <p class="text-landora-muted text-sm">
                    Round-the-clock security personnel and CCTV surveillance
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-6 h-6 text-landora-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-landora-dark">Maintenance Services</h4>
                  <p class="text-landora-muted text-sm">
                    Professional maintenance team available for all your needs
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-6 h-6 text-landora-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-landora-dark">Green Spaces</h4>
                  <p class="text-landora-muted text-sm">
                    Beautifully landscaped gardens and outdoor areas
                  </p>
                </div>
              </li>
            </ul>
            <RouterLink to="/contact" class="btn-primary inline-flex items-center">
              Learn More
              <ArrowRightIcon class="w-5 h-5 ml-2" />
            </RouterLink>
          </div>
          <div class="relative">
            <img
              :src="comfortImage"
              alt="Comfort Living"
              class="w-full rounded-lg shadow-xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-landora-primary text-white p-6 rounded-lg shadow-lg">
              <p class="text-4xl font-heading font-bold">15+</p>
              <p class="text-sm uppercase tracking-wider">Premium Amenities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import {
  ChevronRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  TruckIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  WifiIcon,
  SparklesIcon,
  SunIcon,
  FireIcon,
  VideoCameraIcon,
  BuildingOfficeIcon,
} from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
const comfortImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const facilitiesRef = ref<HTMLElement | null>(null)
const isFacilitiesVisible = ref(false)

const facilities = [
  {
    id: 1,
    title: 'Flexible Transportation',
    description: 'Convenient access to public transport and major highways. Underground parking available for residents.',
    icon: TruckIcon,
  },
  {
    id: 2,
    title: 'Friendly Living Spaces',
    description: 'Thoughtfully designed common areas that encourage community interaction and relaxation.',
    icon: HomeModernIcon,
  },
  {
    id: 3,
    title: 'Advanced Security',
    description: '24/7 security personnel, CCTV surveillance, and secure access control systems throughout the building.',
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: 'High-Speed Internet',
    description: 'Fiber optic connectivity throughout the building ensuring fast and reliable internet access.',
    icon: WifiIcon,
  },
  {
    id: 5,
    title: 'Premium Finishes',
    description: 'High-quality materials and finishes throughout, from flooring to fixtures and fittings.',
    icon: SparklesIcon,
  },
  {
    id: 6,
    title: 'Natural Lighting',
    description: 'Large windows and open layouts designed to maximize natural light in every apartment.',
    icon: SunIcon,
  },
  {
    id: 7,
    title: 'Individual Heating',
    description: 'Independent heating systems allowing you to control your own comfort and energy consumption.',
    icon: FireIcon,
  },
  {
    id: 8,
    title: 'Video Intercom',
    description: 'Modern video intercom systems for secure visitor management and communication.',
    icon: VideoCameraIcon,
  },
  {
    id: 9,
    title: 'Concierge Services',
    description: 'Professional concierge available to assist with daily needs and special requests.',
    icon: BuildingOfficeIcon,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isFacilitiesVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (facilitiesRef.value) observer.observe(facilitiesRef.value)
})
</script>