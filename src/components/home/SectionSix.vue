<template>
  <section class="relative py-24 bg-landora-dark overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" 
           style="background-image: url('/images/pattern.svg'); background-size: 100px;">
      </div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="text-9xl font-heading font-bold text-white/5 absolute left-1/2 
                   -translate-x-1/2 -top-8">
        06
      </span>
      
      <span class="inline-block text-sm font-heading font-medium uppercase 
                   tracking-widest text-landora-accent mb-4">
        Get Started Today
      </span>
      
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
        Are You Interested in Landora?
      </h2>
      
      <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        Schedule a visit to our sales office and let our experts help you find 
        your dream home. We're here to guide you every step of the way.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <RouterLink to="/contact" class="btn-primary">
          Schedule a Visit
          <CalendarIcon class="w-5 h-5 ml-2" />
        </RouterLink>
        <a :href="`tel:${CONTACT_PHONE}`" class="btn-secondary border-white text-white 
                                                  hover:bg-white hover:text-landora-dark">
          <PhoneIcon class="w-5 h-5 mr-2" />
          Call Us Now
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="mt-16 pt-8 border-t border-white/10">
        <div class="flex flex-wrap items-center justify-center gap-8">
          <div class="flex items-center text-gray-400">
            <ShieldCheckIcon class="w-6 h-6 text-landora-accent mr-2" />
            <span>Certified Developer</span>
          </div>
          <div class="flex items-center text-gray-400">
            <StarIcon class="w-6 h-6 text-landora-accent mr-2" />
            <span>5-Star Rated</span>
          </div>
          <div class="flex items-center text-gray-400">
            <UserGroupIcon class="w-6 h-6 text-landora-accent mr-2" />
            <span>500+ Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CalendarIcon, 
  PhoneIcon, 
  ShieldCheckIcon, 
  StarIcon, 
  UserGroupIcon 
} from '@heroicons/vue/24/outline'
import { CONTACT_PHONE } from '@/utils/constants'
</script>