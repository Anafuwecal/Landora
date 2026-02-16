<template>
  <div class="news-page">
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
          News & Updates
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">News</span>
        </nav>
      </div>
    </section>

    <!-- News Content -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- News List -->
        <div class="lg:col-span-2 space-y-8">
          <article
            v-for="post in newsPosts"
            :key="post.id"
            class="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="md:flex">
              <div class="md:w-1/3">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div class="p-6 md:w-2/3">
                <div class="flex items-center text-sm text-landora-muted mb-3">
                  <CalendarIcon class="w-4 h-4 mr-1" />
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span class="mx-2">•</span>
                  <UserIcon class="w-4 h-4 mr-1" />
                  <span>{{ post.author }}</span>
                </div>
                <RouterLink :to="`/news/${post.slug}`">
                  <h2 class="text-xl font-heading font-semibold text-landora-dark mb-3 group-hover:text-landora-primary transition-colors">
                    {{ post.title }}
                  </h2>
                </RouterLink>
                <p class="text-landora-muted mb-4 line-clamp-2">
                  {{ post.excerpt }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    class="text-xs px-2 py-1 bg-landora-light text-landora-muted rounded"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-1 space-y-8">
          <!-- Search -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4">Search</h3>
            <div class="relative">
              <input
                type="text"
                placeholder="Search news..."
                class="form-input pr-10"
              />
              <MagnifyingGlassIcon class="w-5 h-5 text-landora-muted absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <!-- Categories -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4">Categories</h3>
            <ul class="space-y-2">
              <li v-for="category in categories" :key="category">
                <a href="#" class="text-landora-muted hover:text-landora-primary transition-colors">
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Tags -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="tag in tags"
                :key="tag"
                href="#"
                class="px-3 py-1 bg-landora-light text-landora-muted text-sm rounded hover:bg-landora-primary hover:text-white transition-colors"
              >
                {{ tag }}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon,
  CalendarIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const categories = ['Company News', 'Market Insights', 'Projects', 'Tips & Advice', 'Events']
const tags = ['development', 'luxury', 'Lagos', 'investment', 'sustainability', 'design']

const newsPosts = [
  {
    id: 1,
    slug: 'new-development-announced',
    title: 'New Luxury Development Announced in Central Lagos',
    excerpt: 'We are excited to announce our newest development project, featuring 120 premium apartments with stunning city views.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Admin',
    tags: ['development', 'luxury', 'Lagos'],
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    slug: 'market-trends-2024',
    title: 'Real Estate Market Trends to Watch in 2024',
    excerpt: 'Our experts analyze the key trends shaping the real estate market this year and what they mean for buyers.',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Maria K.',
    tags: ['market', 'trends', 'investment'],
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: 3,
    slug: 'sustainability-focus',
    title: 'Sustainability at the Heart of Modern Living',
    excerpt: 'Learn how LANDORA is incorporating sustainable building practices and eco-friendly features in all our developments.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Alex P.',
    tags: ['sustainability', 'eco', 'green'],
    publishedAt: new Date('2024-01-05'),
  },
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>