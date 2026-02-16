<template>
  <div class="about-landora-page">
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
          About Landora
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">About Us</span>
        </nav>
      </div>
    </section>

    <!-- About Content -->
    <section class="section-container">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          subtitle="Who We Are"
          title="Your Trusted Real Estate Partner"
          description="LANDORA is a premier real estate consulting firm dedicated to helping clients find their perfect home."
          centered
        />
        
        <div class="prose prose-lg max-w-none text-landora-muted text-center mb-12">
          <p class="mb-6">
            Founded with a vision to transform the real estate experience, LANDORA has grown to 
            become one of the most trusted names in luxury property consulting. We believe that 
            finding a home should be an exciting journey, not a stressful process.
          </p>
          <p>
            Our team of experienced professionals is committed to providing personalized service, 
            expert guidance, and unparalleled market knowledge to help you make informed decisions 
            about your most important investment.
          </p>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="text-center p-8 bg-landora-light rounded-lg">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-landora-primary/10 flex items-center justify-center">
            <HeartIcon class="w-8 h-8 text-landora-primary" />
          </div>
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">Our Mission</h3>
          <p class="text-landora-muted">
            To provide exceptional real estate services that exceed client expectations and 
            create lasting relationships built on trust and integrity.
          </p>
        </div>
        <div class="text-center p-8 bg-landora-light rounded-lg">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-landora-primary/10 flex items-center justify-center">
            <EyeIcon class="w-8 h-8 text-landora-primary" />
          </div>
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">Our Vision</h3>
          <p class="text-landora-muted">
            To be the leading real estate consultancy known for innovation, excellence, 
            and transforming how people find and experience their homes.
          </p>
        </div>
        <div class="text-center p-8 bg-landora-light rounded-lg">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-landora-primary/10 flex items-center justify-center">
            <StarIcon class="w-8 h-8 text-landora-primary" />
          </div>
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">Our Values</h3>
          <p class="text-landora-muted">
            Integrity, transparency, and client-first approach guide everything we do. 
            We treat every client like family.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-landora-primary py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p class="text-white/80 text-lg mb-8">
          Let us help you navigate the real estate market and find the perfect property for your needs.
        </p>
        <RouterLink to="/contact" class="btn-white">
          Get Started Today
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon, HeartIcon, EyeIcon, StarIcon } from '@heroicons/vue/24/outline'

// Use online placeholder images
const heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
</script>