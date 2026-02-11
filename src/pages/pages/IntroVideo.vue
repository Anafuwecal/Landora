<template>
  <div class="intro-video-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/video/video-hero.jpg"
          alt="Intro Video"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Intro Video
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Intro Video</span>
        </nav>
      </div>
    </section>

    <!-- Video Content -->
    <section class="section-container">
      <SectionHeader
        subtitle="Watch Our Story"
        title="Landora Video"
        description="Decorated Flats in Pozniaky – Kyiv. Take a virtual tour of our properties."
        centered
      />

      <!-- Video Player -->
      <div class="max-w-4xl mx-auto">
        <div class="relative aspect-video bg-landora-dark rounded-lg overflow-hidden shadow-2xl">
          <img
            v-if="!isPlaying"
            src="/images/video/video-thumbnail.jpg"
            alt="Video Thumbnail"
            class="w-full h-full object-cover"
          />
          <div
            v-if="!isPlaying"
            class="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <button
              @click="playVideo"
              class="w-20 h-20 rounded-full bg-landora-primary text-white flex items-center justify-center hover:bg-landora-secondary transition-colors hover:scale-110 transform duration-300"
            >
              <PlayIcon class="w-10 h-10 ml-1" />
            </button>
          </div>
          <iframe
            v-if="isPlaying"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Landora Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          />
        </div>

        <div class="mt-8 text-center">
          <p class="text-landora-muted mb-6">
            Discover the LANDORA difference. Our video showcases the exceptional quality, 
            design, and lifestyle that our properties offer.
          </p>
          <RouterLink to="/contact" class="btn-primary">
            Schedule a Visit
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon, PlayIcon } from '@heroicons/vue/24/outline'

const isPlaying = ref(false)

const playVideo = () => {
  isPlaying.value = true
}
</script>