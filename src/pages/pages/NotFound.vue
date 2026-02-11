<template>
  <div class="not-found-page min-h-screen flex items-center justify-center bg-landora-light">
    <div class="text-center px-4">
      <!-- 404 Text -->
      <h1 class="text-[150px] md:text-[200px] font-heading font-bold text-landora-primary/10 
                 leading-none select-none">
        404
      </h1>
      
      <div class="-mt-16 md:-mt-24 relative z-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-landora-dark mb-4 uppercase tracking-wider">
          Page Not Found
        </h2>
        
        <p class="text-landora-muted text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink to="/" class="btn-primary">
            <HomeIcon class="w-5 h-5 mr-2" />
            Go Homepage
          </RouterLink>
          <button @click="goBack" class="btn-secondary">
            <ArrowLeftIcon class="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <!-- Helpful Links -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="text-sm text-landora-muted mb-4">
            Here are some helpful links:
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <RouterLink
              to="/apartments"
              class="text-landora-primary hover:text-landora-secondary transition-colors"
            >
              View Apartments
            </RouterLink>
            <RouterLink
              to="/contact"
              class="text-landora-primary hover:text-landora-secondary transition-colors"
            >
              Contact Us
            </RouterLink>
            <RouterLink
              to="/pages/faq"
              class="text-landora-primary hover:text-landora-secondary transition-colors"
            >
              FAQ
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { HomeIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>