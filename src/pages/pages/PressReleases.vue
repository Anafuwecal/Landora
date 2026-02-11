<template>
  <div class="press-releases-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/press/press-hero.jpg"
          alt="Press Releases"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Press Releases
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Press Releases</span>
        </nav>
      </div>
    </section>

    <!-- Press Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="In The News"
        title="Media Coverage"
        description="See what the media is saying about LANDORA and our developments."
        centered
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          v-for="press in pressReleases"
          :key="press.id"
          :href="press.url"
          target="_blank"
          class="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div class="h-16 mb-6 flex items-center">
            <img
              :src="press.logo"
              :alt="press.mediaName"
              class="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <h3 class="text-lg font-heading font-semibold text-landora-dark mb-2 group-hover:text-landora-primary transition-colors">
            {{ press.headline }}
          </h3>
          <p class="text-sm text-landora-muted">
            {{ press.mediaName }} • {{ formatDate(press.publishedAt) }}
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { formatDate } from '@/utils/helpers'

const pressReleases = [
  {
    id: 1,
    mediaName: 'New York Times',
    headline: 'LANDORA Sets New Standard for Luxury Living in Ukraine',
    logo: '/images/press/nyt-logo.png',
    url: 'https://nytimes.com',
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    mediaName: 'Real Estate Magazine',
    headline: 'Top 10 Developers to Watch in 2024',
    logo: '/images/press/rem-logo.png',
    url: 'https://example.com',
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: 3,
    mediaName: 'Forbes Ukraine',
    headline: 'How LANDORA is Transforming Urban Living',
    logo: '/images/press/forbes-logo.png',
    url: 'https://forbes.com',
    publishedAt: new Date('2023-12-20'),
  },
  {
    id: 4,
    mediaName: 'Architecture Today',
    headline: 'Award-Winning Design at Landora Blocks',
    logo: '/images/press/arch-logo.png',
    url: 'https://example.com',
    publishedAt: new Date('2023-12-15'),
  },
  {
    id: 5,
    mediaName: 'Business Weekly',
    headline: 'LANDORA Announces New Development Project',
    logo: '/images/press/bw-logo.png',
    url: 'https://example.com',
    publishedAt: new Date('2023-12-01'),
  },
  {
    id: 6,
    mediaName: 'Property Times',
    headline: 'Sustainable Building Practices at LANDORA',
    logo: '/images/press/pt-logo.png',
    url: 'https://example.com',
    publishedAt: new Date('2023-11-25'),
  },
]
</script>