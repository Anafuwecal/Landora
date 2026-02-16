<template>
  <section class="bg-landora-light">
    <div class="section-container relative">      
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
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-landora-primary/10 flex items-center justify-center group-hover:bg-landora-primary transition-colors">
              <component
                :is="feature.icon"
                class="w-8 h-8 text-landora-primary group-hover:text-white transition-colors"
              />
            </div>
            <h4 class="text-sm font-heading font-semibold text-landora-dark uppercase tracking-wider">
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
import {
  BeakerIcon,
  HomeModernIcon,
  BoltIcon,
  FireIcon,
  ShieldCheckIcon,
  TruckIcon,
  WifiIcon,
  ArrowsUpDownIcon,
  SunIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

const featuresRef = ref<HTMLElement | null>(null)
const isFeaturesVisible = ref(false)

const features = [
  { id: 1, title: 'Water Taps', icon: BeakerIcon },
  { id: 2, title: 'Furniture', icon: HomeModernIcon },
  { id: 3, title: 'Electricity', icon: BoltIcon },
  { id: 4, title: 'Heating', icon: FireIcon },
  { id: 5, title: 'Security', icon: ShieldCheckIcon },
  { id: 6, title: 'Parking', icon: TruckIcon },
  { id: 7, title: 'Internet', icon: WifiIcon },
  { id: 8, title: 'Elevator', icon: ArrowsUpDownIcon },
  { id: 9, title: 'Garden', icon: SunIcon },
  { id: 10, title: 'Gym', icon: HeartIcon },
  { id: 11, title: 'Pool', icon: SparklesIcon },
  { id: 12, title: 'Playground', icon: UserGroupIcon },
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