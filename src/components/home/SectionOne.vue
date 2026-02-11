<template>
  <section class="section-container relative">
    <!-- Section Number -->
    <span class="section-number">01</span>
    
    <div class="relative z-10">
      <SectionHeader
        subtitle="Welcome to LANDORA"
        title="Pozniaky Construction LLC"
        description="Living spaces for creative professionals who value quality, design, and community."
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div ref="contentRef" :class="['transition-all duration-700', isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
          <p class="text-landora-muted mb-6">
            LANDORA brings you exceptional living spaces that combine modern architecture 
            with thoughtful design. Our developments are created for those who appreciate 
            the finer things in life – from premium finishes to sustainable building practices.
          </p>
          <p class="text-landora-muted mb-8">
            Each property in our portfolio represents our commitment to quality and 
            attention to detail. We believe that your home should be a sanctuary, 
            a place where every element works together to create the perfect environment 
            for your lifestyle.
          </p>
          <RouterLink to="/about/landora" class="btn-secondary">
            See Our Projects
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
        </div>

        <!-- Feature Grid -->
        <div 
          ref="gridRef" 
          :class="[
            'grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 delay-200',
            isGridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="group text-center p-6 bg-landora-light rounded-lg 
                   hover:bg-landora-primary hover:text-white transition-all duration-300"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-landora-primary/10 
                        flex items-center justify-center
                        group-hover:bg-white/20 transition-colors">
              <component 
                :is="feature.icon" 
                class="w-8 h-8 text-landora-primary group-hover:text-white transition-colors" 
              />
            </div>
            <h4 class="font-heading font-semibold text-sm uppercase tracking-wider">
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
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import {
  HomeModernIcon,
  SparklesIcon,
  ShieldCheckIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
} from '@heroicons/vue/24/outline'

const contentRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const isContentVisible = ref(false)
const isGridVisible = ref(false)

const features = [
  { title: 'Modern Design', icon: HomeModernIcon },
  { title: 'Premium Quality', icon: SparklesIcon },
  { title: 'Secure Living', icon: ShieldCheckIcon },
  { title: 'Natural Light', icon: SunIcon },
  { title: 'Smart Features', icon: WrenchScrewdriverIcon },
  { title: 'Community', icon: HeartIcon },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === contentRef.value && entry.isIntersecting) {
          isContentVisible.value = true
        }
        if (entry.target === gridRef.value && entry.isIntersecting) {
          isGridVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (contentRef.value) observer.observe(contentRef.value)
  if (gridRef.value) observer.observe(gridRef.value)
})
</script>