<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <LoadingSpinner v-if="loading" class="w-5 h-5 mr-2" />
    <component v-if="icon && !loading" :is="icon" class="w-5 h-5 mr-2" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  icon?: any
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false,
})

defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-landora-primary text-white hover:bg-landora-secondary focus:ring-landora-accent',
    secondary: 'bg-transparent text-landora-primary border-2 border-landora-primary hover:bg-landora-primary hover:text-white focus:ring-landora-primary',
    white: 'bg-white text-landora-primary hover:bg-gray-100 focus:ring-white',
    ghost: 'bg-transparent text-landora-primary hover:bg-landora-light focus:ring-landora-primary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-sm',
    md: 'px-6 py-3 text-sm rounded-sm',
    lg: 'px-8 py-4 text-sm rounded-sm',
  }

  return [
    base,
    variants[props.variant],
    sizes[props.size],
    props.fullWidth && 'w-full',
  ]
})
</script>