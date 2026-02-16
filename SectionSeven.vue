<template>
  <section class="section-container relative">
    <!-- Section Number -->
    <span class="section-number">07</span>
    
    <div class="relative z-10">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <SectionHeader
          subtitle="Latest News"
          title="News & Updates"
          description="Stay informed about our latest projects, market insights, and company news."
          class="mb-0"
        />
        <RouterLink to="/news" class="btn-secondary mt-6 md:mt-0">
          More News
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </RouterLink>
      </div>

      <!-- News Grid -->
      <div 
        ref="newsRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <article
          v-for="(post, index) in recentNews"
          :key="post.id"
          :class="[
            'group card transition-all duration-500',
            isNewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-landora-primary text-white px-3 py-1 text-xs font-heading font-semibold uppercase rounded">
              {{ post.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Meta -->
            <div class="flex items-center text-sm text-landora-muted mb-3">
              <CalendarIcon class="w-4 h-4 mr-1" />
              <span>{{ formatDate(post.publishedAt) }}</span>
              <span class="mx-2">•</span>
              <UserIcon class="w-4 h-4 mr-1" />
              <span>{{ post.author }}</span>
            </div>

            <!-- Title -->
            <RouterLink 
              :to="`/news/${post.slug}`"
              class="block"
            >
              <h3 class="text-lg font-heading font-semibold text-landora-dark mb-3 group-hover:text-landora-primary transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
            </RouterLink>

            <!-- Excerpt -->
            <p class="text-landora-muted text-sm line-clamp-3 mb-4">
              {{ post.excerpt }}
            </p>

            <!-- Tags -->
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
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { formatDate } from '@/utils/helpers'
import { ArrowRightIcon, CalendarIcon, UserIcon } from '@heroicons/vue/24/outline'
import { getNewsImage } from '@/utils/images'

const newsRef = ref<HTMLElement | null>(null)
const isNewsVisible = ref(false)

const recentNews = [
  {
    id: 1,
    slug: 'new-development-announced',
    title: 'New Luxury Development Announced in Central Kyiv',
    excerpt: 'We are excited to announce our newest development project, featuring 120 premium apartments with stunning city views.',
    image: getNewsImage(0),
    author: 'Admin',
    category: 'Projects',
    tags: ['development', 'luxury', 'kyiv'],
    publishedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    slug: 'market-trends-2024',
    title: 'Real Estate Market Trends to Watch in 2024',
    excerpt: 'Our experts analyze the key trends shaping the real estate market this year and what they mean for buyers.',
    image: getNewsImage(1),
    author: 'Maria K.',
    category: 'Insights',
    tags: ['market', 'trends', 'investment'],
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: 3,
    slug: 'sustainability-focus',
    title: 'Sustainability at the Heart of Modern Living',
    excerpt: 'Learn how LANDORA is incorporating sustainable building practices and eco-friendly features in all our developments.',
    image: getNewsImage(2),
    author: 'Alex P.',
    category: 'Company',
    tags: ['sustainability', 'eco', 'green'],
    publishedAt: new Date('2024-01-05'),
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isNewsVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (newsRef.value) observer.observe(newsRef.value)
})
</script>