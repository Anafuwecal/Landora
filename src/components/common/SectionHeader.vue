<template>
  <div :class="['relative mb-12', centered && 'text-center']">
    <!-- Section Number -->
    <span
      v-if="number"
      class="section-number"
      :class="centered ? 'left-1/2 -translate-x-1/2' : ''"
    >
      {{ number }}
    </span>
    
    <!-- Subtitle -->
    <span
      v-if="subtitle"
      class="inline-block text-sm font-heading font-medium uppercase tracking-widest 
             text-landora-primary mb-2"
    >
      {{ subtitle }}
    </span>
    
    <!-- Title -->
    <h2
      :class="[
        'font-heading font-bold text-landora-dark',
        titleSize === 'sm' && 'text-2xl md:text-3xl',
        titleSize === 'md' && 'text-3xl md:text-4xl',
        titleSize === 'lg' && 'text-4xl md:text-5xl',
      ]"
    >
      {{ title }}
    </h2>
    
    <!-- Description -->
    <p
      v-if="description"
      :class="[
        'mt-4 text-landora-muted max-w-2xl',
        centered && 'mx-auto'
      ]"
    >
      {{ description }}
    </p>

    <!-- Decorative Line -->
    <div
      v-if="showLine"
      :class="[
        'mt-6 h-1 w-16 bg-landora-primary',
        centered && 'mx-auto'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  number?: string
  subtitle?: string
  title: string
  description?: string
  titleSize?: 'sm' | 'md' | 'lg'
  centered?: boolean
  showLine?: boolean
}

withDefaults(defineProps<Props>(), {
  titleSize: 'md',
  centered: false,
  showLine: false,
})
</script>