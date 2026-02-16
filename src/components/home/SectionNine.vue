<template>
  <section class="section-container relative">
    
    <div class="relative z-10">
      <SectionHeader
        subtitle="Trust & Quality"
        title="Property Certificates"
        description="Our developments meet the highest standards and are certified by leading industry bodies."
        centered
      />

      <!-- Certificates Grid -->
      <div 
        ref="certificatesRef"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        <div
          v-for="(cert, index) in certificates"
          :key="cert.id"
          :class="[
            'bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center',
            'hover:shadow-lg transition-all duration-300',
            isCertificatesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <component 
            :is="cert.icon" 
            class="w-12 h-12 text-landora-primary mb-3"
          />
          <span class="text-sm font-medium text-landora-dark text-center">{{ cert.title }}</span>
        </div>
      </div>

      <!-- Additional Trust Info -->
      <div class="mt-16 text-center">
        <p class="text-landora-muted mb-6">
          All our properties undergo rigorous quality checks and are certified to 
          international standards.
        </p>
        <RouterLink to="/pages/certificates" class="btn-secondary inline-flex items-center">
          View All Certificates
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { 
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  StarIcon,
  TrophyIcon,
  SparklesIcon,
  HandThumbUpIcon,
} from '@heroicons/vue/24/outline'

const certificatesRef = ref<HTMLElement | null>(null)
const isCertificatesVisible = ref(false)

const certificates = [
  { id: 1, title: 'ISO 9001', icon: ShieldCheckIcon },
  { id: 2, title: 'Green Building', icon: SparklesIcon },
  { id: 3, title: 'Energy Star', icon: StarIcon },
  { id: 4, title: 'LEED Certified', icon: CheckBadgeIcon },
  { id: 5, title: 'Safety Award', icon: TrophyIcon },
  { id: 6, title: 'Quality Mark', icon: HandThumbUpIcon },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isCertificatesVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (certificatesRef.value) observer.observe(certificatesRef.value)
})
</script>