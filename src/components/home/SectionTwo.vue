<template>
  <section class="bg-landora-light">
    <div class="section-container relative">
      
      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div 
          ref="imageRef"
          :class="[
            'relative overflow-hidden rounded-lg shadow-2xl transition-all duration-700',
            isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <img
            :src="images.property.featured"
            alt="Featured Property"
            class="w-full h-[500px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="text-sm uppercase tracking-wider text-landora-accent">
              Featured Property
            </span>
            <h3 class="text-2xl font-heading font-bold mt-2">
              Landora Property
            </h3>
            <p class="text-white/80">Decorated Flats in Lagos</p>
          </div>
        </div>

        <!-- Stats & Content -->
        <div 
          ref="statsRef"
          :class="[
            'transition-all duration-700 delay-200',
            isStatsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <SectionHeader
            subtitle="Featured Development"
            title="Landora Property"
            description="Experience the pinnacle of modern living in the heart of Lagos. Our flagship development offers unparalleled comfort and style."
          />

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="stats-card bg-white rounded-lg shadow-md"
            >
              <div class="stats-number flex items-baseline justify-center">
                <span>{{ stat.displayValue }}</span>
                <span class="text-2xl ml-1">{{ stat.suffix }}</span>
              </div>
              <p class="stats-label">{{ stat.label }}</p>
            </div>
          </div>

          <RouterLink to="/apartments" class="btn-primary">
            Explore Property
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { PROPERTY_STATS } from '@/utils/constants'
import { images } from '@/utils/images'

const imageRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const isImageVisible = ref(false)
const isStatsVisible = ref(false)

const stats = ref(
  PROPERTY_STATS.map(stat => ({
    ...stat,
    displayValue: '0'
  }))
)

const animateCount = (index: number, endValue: number) => {
  const duration = 2000
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    
    stats.value[index].displayValue = Math.floor(endValue * easeProgress).toString()

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === imageRef.value && entry.isIntersecting) {
          isImageVisible.value = true
        }
        if (entry.target === statsRef.value && entry.isIntersecting) {
          isStatsVisible.value = true
          PROPERTY_STATS.forEach((stat, index) => {
            setTimeout(() => {
              animateCount(index, parseInt(stat.number))
            }, index * 200)
          })
        }
      })
    },
    { threshold: 0.3 }
  )

  if (imageRef.value) observer.observe(imageRef.value)
  if (statsRef.value) observer.observe(statsRef.value)
})
</script>