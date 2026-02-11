<template>
  <div class="zaga-construction-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/about/zaga-hero.jpg"
          alt="Zaga Construction"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Zaga Construction
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Zaga Construction</span>
        </nav>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            subtitle="Our Partner"
            title="Building Excellence Since 1995"
            description="Zaga Construction is one of Ukraine's leading construction companies, known for delivering high-quality residential and commercial projects."
          />
          <div class="prose prose-lg max-w-none text-landora-muted">
            <p class="mb-4">
              With over 25 years of experience in the construction industry, Zaga Construction 
              has established itself as a trusted name in premium property development. Their 
              commitment to quality, innovation, and sustainability makes them the perfect partner 
              for LANDORA's luxury residential projects.
            </p>
            <p class="mb-4">
              Every project undertaken by Zaga Construction adheres to the highest international 
              standards, ensuring that each property is built to last while providing maximum 
              comfort and value to homeowners.
            </p>
            <p>
              Their team of skilled architects, engineers, and craftsmen work together to bring 
              visionary designs to life, creating living spaces that exceed expectations.
            </p>
          </div>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/contact" class="btn-primary">
              Contact Us
            </RouterLink>
            <RouterLink to="/apartments" class="btn-secondary">
              View Projects
            </RouterLink>
          </div>
        </div>
        <div class="relative">
          <img
            src="/images/about/zaga-building.jpg"
            alt="Zaga Construction Building"
            class="w-full rounded-lg shadow-xl"
          />
          <div class="absolute -bottom-6 -left-6 bg-landora-primary text-white p-6 rounded-lg shadow-lg">
            <p class="text-4xl font-heading font-bold">25+</p>
            <p class="text-sm uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-landora-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-heading font-bold text-landora-primary">150+</p>
            <p class="text-landora-muted mt-2">Projects Completed</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-heading font-bold text-landora-primary">500+</p>
            <p class="text-landora-muted mt-2">Happy Families</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-heading font-bold text-landora-primary">25+</p>
            <p class="text-landora-muted mt-2">Years Experience</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-heading font-bold text-landora-primary">50+</p>
            <p class="text-landora-muted mt-2">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>