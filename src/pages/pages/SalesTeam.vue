<template>
  <div class="sales-team-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/team-hero.jpg"
          alt="Sales Team"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Sales Team
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Sales Team</span>
        </nav>
      </div>
    </section>

    <!-- Team Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Meet Our Experts"
        title="Professional Sales Team"
        description="Our dedicated team of real estate professionals is here to help you find your perfect home."
        centered
      />

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>

      <!-- Team Grid -->
      <div
        v-else
        ref="teamRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="(member, index) in teamMembers"
          :key="member.id"
          :class="[
            'group text-center transition-all duration-500',
            isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Photo -->
          <div class="relative mb-6 overflow-hidden rounded-lg">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full aspect-portrait object-cover transition-transform duration-500
                     group-hover:scale-105"
            />
            <!-- Social Links Overlay -->
            <div class="absolute inset-0 bg-landora-primary/80 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="flex space-x-4">
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
                         text-white hover:bg-white hover:text-landora-primary transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  v-if="member.facebook"
                  :href="member.facebook"
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
                         text-white hover:bg-white hover:text-landora-primary transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a
                  v-if="member.email"
                  :href="`mailto:${member.email}`"
                  class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
                         text-white hover:bg-white hover:text-landora-primary transition-colors"
                >
                  <EnvelopeIcon class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Info -->
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-1">
            {{ member.name }}
          </h3>
          <p class="text-landora-primary font-medium text-sm uppercase tracking-wider mb-2">
            {{ member.role }}
          </p>
          <p v-if="member.phone" class="text-landora-muted text-sm">
            {{ member.phone }}
          </p>
        </div>
      </div>

      <!-- Join Team CTA -->
      <div class="mt-16 text-center p-8 bg-landora-light rounded-lg">
        <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">
          Join Our Team
        </h3>
        <p class="text-landora-muted mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our growing team. 
          If you're passionate about real estate and delivering exceptional customer service, 
          we'd love to hear from you.
        </p>
        <a href="mailto:careers@landora.com" class="btn-primary">
          View Open Positions
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { fetchTeamMembers } from '@/composables/useApi'
import type { TeamMember } from '@/types'
import {
  ChevronRightIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'

const teamMembers = ref<TeamMember[]>([])
const loading = ref(true)
const teamRef = ref<HTMLElement | null>(null)
const isTeamVisible = ref(false)

onMounted(async () => {
  try {
    teamMembers.value = await fetchTeamMembers()
  } catch (error) {
    console.error('Failed to fetch team members:', error)
    // Use mock data as fallback
    teamMembers.value = [
      {
        id: '1',
        name: 'Sasha Alexander',
        role: 'Senior Sales Officer',
        image: '/images/team/team-1.jpg',
        email: 'sasha@landora.com',
        phone: '+380 98 123 4567',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        order: 1,
        active: true,
      },
      {
        id: '2',
        name: 'Maria Kovalenko',
        role: 'Sales Manager',
        image: '/images/team/team-2.jpg',
        email: 'maria@landora.com',
        phone: '+380 98 234 5678',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        order: 2,
        active: true,
      },
      {
        id: '3',
        name: 'Andrii Shevchenko',
        role: 'Property Consultant',
        image: '/images/team/team-3.jpg',
        email: 'andrii@landora.com',
        phone: '+380 98 345 6789',
        linkedin: 'https://linkedin.com',
        order: 3,
        active: true,
      },
      {
        id: '4',
        name: 'Olena Bondarenko',
        role: 'Client Relations',
        image: '/images/team/team-4.jpg',
        email: 'olena@landora.com',
        phone: '+380 98 456 7890',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        order: 4,
        active: true,
      },
    ]
  } finally {
    loading.value = false
  }

  // Setup intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isTeamVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (teamRef.value) observer.observe(teamRef.value)
})
</script>