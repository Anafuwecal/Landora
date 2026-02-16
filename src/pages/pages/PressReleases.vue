<template>
  <div class="press-releases-page">
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
            <div class="w-full h-full bg-landora-light rounded flex items-center justify-center">
              <NewspaperIcon class="w-8 h-8 text-landora-primary" />
            </div>
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
import { ChevronRightIcon, NewspaperIcon } from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const pressReleases = [
  {
    id: 1,
    mediaName: 'Punch',
    headline: 'LANDORA Sets New Standard for Luxury Living in Lagos',
    url: 'https://nytimes.com',
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    mediaName: 'Punch',
    headline: 'Top 10 Developers to Watch in 2024',
    url: 'https://example.com',
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: 3,
    mediaName: 'Governors',
    headline: 'How LANDORA is Transforming Urban Living',
    url: 'https://forbes.com',
    publishedAt: new Date('2023-12-20'),
  },
  {
    id: 4,
    mediaName: 'Punch',
    headline: 'Award-Winning Design at Landora Blocks',
    url: 'https://example.com',
    publishedAt: new Date('2023-12-15'),
  },
  {
    id: 5,
    mediaName: 'Punch',
    headline: 'LANDORA Announces New Development Project',
    url: 'https://example.com',
    publishedAt: new Date('2023-12-01'),
  },
  {
    id: 6,
    mediaName: 'Punch',
    headline: 'Sustainable Building Practices at LANDORA',
    url: 'https://example.com',
    publishedAt: new Date('2023-11-25'),
  },
]
</script>