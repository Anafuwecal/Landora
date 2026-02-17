<template>
  <section class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- Swiper -->
    <Swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="autoplayConfig"
      :pagination="paginationConfig"
      :navigation="navigationConfig"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      class="h-full"
      @slide-change="onSlideChange"
    >
      <SwiperSlide
        v-for="slide in HERO_SLIDES"
        :key="slide.id"
        class="relative"
      >
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Content -->
        <div class="relative h-full flex items-center justify-center text-center text-white px-4">
          <div class="max-w-4xl">
            <h1
              class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-wider mb-4"
            >
              {{ slide.title }}
            </h1>
            
            <p
              class="text-lg md:text-xl lg:text-2xl font-light mb-8"
            >
              {{ slide.subtitle }}
            </p>
            
            <RouterLink
              :to="slide.ctaLink"
              class="btn-primary bg-landora-primary hover:bg-landora-secondary"
            >
              {{ slide.ctaText }}
            </RouterLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Custom Navigation -->
    <button
      class="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
             w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
             flex items-center justify-center text-white
             hover:bg-white hover:text-landora-primary transition-all duration-300"
    >
      <ChevronLeftIcon class="w-6 h-6" />
    </button>
    <button
      class="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
             w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
             flex items-center justify-center text-white
             hover:bg-white hover:text-landora-primary transition-all duration-300"
    >
      <ChevronRightIcon class="w-6 h-6" />
    </button>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <ChevronDownIcon class="w-8 h-8 text-white" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { HERO_SLIDES } from '@/utils/constants'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const currentSlide = ref(HERO_SLIDES[0].id)

// Swiper modules
const swiperModules = [Autoplay, Pagination, EffectFade, Navigation]

// Swiper config objects
const autoplayConfig = {
  delay: 6000,
  disableOnInteraction: false,
}

const paginationConfig = {
  clickable: true,
  bulletClass: 'swiper-pagination-bullet custom-bullet',
  bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
}

const navigationConfig = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

const onSlideChange = (swiper: any) => {
  currentSlide.value = HERO_SLIDES[swiper.realIndex].id
}
</script>

<style>
.custom-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-bullet-active {
  background: white;
  width: 32px;
  border-radius: 9999px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
</style>