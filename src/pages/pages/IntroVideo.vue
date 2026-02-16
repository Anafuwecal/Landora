<template>
  <div class="intro-video-page">
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
        description="Decorated Flats in lagos Ikeja. Take a virtual tour of our properties."
        centered
      />

      <!-- Video Player -->
      <div class="max-w-6xl mx-auto px-4">
        <div class="relative bg-landora-dark rounded-lg overflow-hidden shadow-2xl" style="height: 70vh; min-height: 400px; max-height: 700px;">
          <img
            v-if="!isPlaying"
            :src="thumbnailImage"
            alt="Video Thumbnail"
            class="w-full h-full object-cover"
          />
          <div
            v-if="!isPlaying"
            class="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <button
              @click="playVideo"
              class="w-24 h-24 rounded-full bg-landora-primary text-white flex items-center justify-center hover:bg-landora-secondary transition-colors hover:scale-110 transform duration-300"
            >
              <PlayIcon class="w-12 h-12 ml-1" />
            </button>
          </div>
          <iframe
            v-if="isPlaying"
            src="https://www.youtube.com/embed/IbRhf1o9UFM?autoplay=1"
            title="Landora Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon, PlayIcon } from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
const thumbnailImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80'

const isPlaying = ref(false)

const playVideo = () => {
  isPlaying.value = true
}
</script>