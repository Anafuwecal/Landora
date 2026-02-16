<template>
  <div class="certificates-page">
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
          class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
        >
          <component :is="cert.icon" class="w-12 h-12 text-landora-primary mb-3" />
          <span class="text-sm font-medium text-landora-dark text-center">{{ cert.title }}</span>
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
import { 
  ChevronRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  CheckBadgeIcon,
  TrophyIcon,
  HandThumbUpIcon,
} from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80'

const certificates = [
  { id: 1, title: 'ISO 9001', icon: ShieldCheckIcon },
  { id: 2, title: 'Green Building', icon: SparklesIcon },
  { id: 3, title: 'Energy Star', icon: StarIcon },
  { id: 4, title: 'LEED Certified', icon: CheckBadgeIcon },
  { id: 5, title: 'Safety Award', icon: TrophyIcon },
  { id: 6, title: 'Quality Mark', icon: HandThumbUpIcon },
]
</script>