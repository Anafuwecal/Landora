<template>
  <div class="news-detail-page">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/news/news-1.jpg"
          alt="News Article"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span class="inline-block bg-landora-primary px-4 py-1 text-sm font-medium rounded mb-4">
          Company News
        </span>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
          New Luxury Development Announced in Central Kyiv
        </h1>
        <div class="flex items-center justify-center text-sm">
          <CalendarIcon class="w-4 h-4 mr-1" />
          <span>January 15, 2024</span>
          <span class="mx-3">•</span>
          <UserIcon class="w-4 h-4 mr-1" />
          <span>Admin</span>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="section-container">
      <div class="max-w-3xl mx-auto">
        <article class="prose prose-lg max-w-none">
          <p class="text-xl text-landora-muted leading-relaxed mb-6">
            We are excited to announce our newest development project, featuring 120 premium 
            apartments with stunning city views. This landmark project represents a new chapter 
            in luxury urban living.
          </p>
          <p class="text-landora-muted mb-6">
            Located in the prestigious Pechersk district of Kyiv, this development will offer 
            residents unparalleled access to the city's cultural attractions, business districts, 
            and entertainment venues. The project is designed to meet the highest international 
            standards while celebrating local architectural heritage.
          </p>
          <h2 class="text-2xl font-heading font-semibold text-landora-dark mt-8 mb-4">
            Project Highlights
          </h2>
          <ul class="list-disc pl-6 text-landora-muted mb-6">
            <li>120 premium apartments ranging from 45m² to 150m²</li>
            <li>Rooftop terrace with panoramic city views</li>
            <li>State-of-the-art fitness center and spa</li>
            <li>Underground parking with EV charging stations</li>
            <li>24/7 concierge and security services</li>
          </ul>
          <p class="text-landora-muted mb-6">
            Construction is scheduled to begin in Q2 2024, with completion expected by late 2025. 
            Early bird pricing and exclusive viewing appointments are now available for interested buyers.
          </p>
        </article>

        <!-- Share & Tags -->
        <div class="mt-12 pt-8 border-t">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <span class="text-landora-muted">Tags:</span>
              <span class="px-3 py-1 bg-landora-light text-landora-muted text-sm rounded">#development</span>
              <span class="px-3 py-1 bg-landora-light text-landora-muted text-sm rounded">#luxury</span>
              <span class="px-3 py-1 bg-landora-light text-landora-muted text-sm rounded">#kyiv</span>
            </div>
          </div>
        </div>

        <!-- Back to News -->
        <div class="mt-8">
          <RouterLink to="/news" class="btn-secondary">
            <ArrowLeftIcon class="w-5 h-5 mr-2" />
            Back to News
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
</script>