<template>
  <section class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- Swiper -->
    <Swiper
      :modules="[Autoplay, Pagination, EffectFade, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
      class="h-full"
      @slideChange="onSlideChange"
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
          <div class="absolute inset-0 bg-black/40" />
        </div>

        <!-- Content -->
        <div class="relative h-full flex items-center justify-center text-center text-white px-4">
          <div class="max-w-4xl">
            <Transition name="slide-up" appear>
              <h1
                v-if="currentSlide === slide.id"
                class="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase 
                       tracking-wider mb-4"
              >
                {{ slide.title }}
              </h1>
            </Transition>
            
            <Transition name="slide-up" appear>
              <p
                v-if="currentSlide === slide.id"
                class="text-lg md:text-xl lg:text-2xl font-light mb-8 
                       transition-all delay-100"
              >
                {{ slide.subtitle }}
              </p>
            </Transition>
            
            <Transition name="slide-up" appear>
              <div v-if="currentSlide === slide.id" class="transition-all delay-200">
                <RouterLink
                  :to="slide.ctaLink"
                  class="btn-primary bg-landora-primary hover:bg-landora-secondary"
                >
                  {{ slide.ctaText }}
                </RouterLink>
              </div>
            </Transition>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import { HERO_SLIDES } from '@/utils/constants'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const currentSlide = ref(HERO_SLIDES[0].id)

const onSlideChange = (swiper: any) => {
  currentSlide.value = HERO_SLIDES[swiper.realIndex].id
}
</script>

<style>
.custom-bullet {
  @apply w-3 h-3 rounded-full bg-white/50 mx-1 cursor-pointer transition-all duration-300;
}

.custom-bullet-active {
  @apply bg-white w-8 rounded-full;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.slide-up-enter-active {
  transition: all 0.6s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>