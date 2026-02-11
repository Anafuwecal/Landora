<template>
  <section class="bg-landora-light">
    <div class="section-container relative">
      <!-- Section Number -->
      <span class="section-number text-gray-200">08</span>
      
      <div class="relative z-10">
        <SectionHeader
          subtitle="Property Features"
          title="What We Offer"
          description="Every LANDORA property comes equipped with premium features and amenities for modern living."
          centered
        />

        <!-- Features Grid -->
        <div 
          ref="featuresRef"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            :class="[
              'group text-center p-6 bg-white rounded-lg shadow-sm',
              'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
              isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <div class="w-16 h-16 mx-auto mb-4">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="w-full h-full object-contain 
                       group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 class="text-sm font-heading font-semibold text-landora-dark uppercase 
                       tracking-wider">
              {{ feature.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'

const featuresRef = ref<HTMLElement | null>(null)
const isFeaturesVisible = ref(false)

const features = [
  { id: 1, title: 'Water Taps', icon: '/images/icons/water.svg' },
  { id: 2, title: 'Furniture', icon: '/images/icons/furniture.svg' },
  { id: 3, title: 'Electricity', icon: '/images/icons/electricity.svg' },
  { id: 4, title: 'Heating', icon: '/images/icons/heating.svg' },
  { id: 5, title: 'Security', icon: '/images/icons/security.svg' },
  { id: 6, title: 'Parking', icon: '/images/icons/parking.svg' },
  { id: 7, title: 'Internet', icon: '/images/icons/internet.svg' },
  { id: 8, title: 'Elevator', icon: '/images/icons/elevator.svg' },
  { id: 9, title: 'Garden', icon: '/images/icons/garden.svg' },
  { id: 10, title: 'Gym', icon: '/images/icons/gym.svg' },
  { id: 11, title: 'Pool', icon: '/images/icons/pool.svg' },
  { id: 12, title: 'Playground', icon: '/images/icons/playground.svg' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isFeaturesVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (featuresRef.value) observer.observe(featuresRef.value)
})
</script>