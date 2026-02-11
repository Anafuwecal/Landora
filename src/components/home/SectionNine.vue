<template>
  <section class="section-container relative">
    <!-- Section Number -->
    <span class="section-number">09</span>
    
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
            'bg-white rounded-lg shadow-sm p-6 flex items-center justify-center',
            'hover:shadow-lg transition-all duration-300',
            isCertificatesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <img
            :src="cert.image"
            :alt="cert.title"
            class="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      <!-- Additional Trust Info -->
      <div class="mt-16 text-center">
        <p class="text-landora-muted mb-6">
          All our properties undergo rigorous quality checks and are certified to 
          international standards.
        </p>
        <RouterLink to="/pages/certificates" class="btn-secondary">
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
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const certificatesRef = ref<HTMLElement | null>(null)
const isCertificatesVisible = ref(false)

const certificates = [
  { id: 1, title: 'ISO 9001', image: '/images/certificates/iso-9001.png' },
  { id: 2, title: 'Green Building', image: '/images/certificates/green-building.png' },
  { id: 3, title: 'Energy Star', image: '/images/certificates/energy-star.png' },
  { id: 4, title: 'LEED Certified', image: '/images/certificates/leed.png' },
  { id: 5, title: 'Safety Award', image: '/images/certificates/safety.png' },
  { id: 6, title: 'Quality Mark', image: '/images/certificates/quality.png' },
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