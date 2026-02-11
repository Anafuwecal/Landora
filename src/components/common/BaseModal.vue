<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/70"
          @click="closeOnBackdrop && close()"
        />

        <!-- Modal Content -->
        <div
          :class="[
            'relative bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-auto',
            sizeClasses
          ]"
        >
          <!-- Close Button -->
          <button
            v-if="showClose"
            @click="close"
            class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 
                   transition-colors z-10"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>

          <!-- Header -->
          <div v-if="title || $slots.header" class="px-6 py-4 border-b">
            <slot name="header">
              <h3 class="text-xl font-heading font-semibold text-landora-dark">
                {{ title }}
              </h3>
            </slot>
          </div>

          <!-- Body -->
          <div :class="['px-6 py-4', !title && !$slots.header && 'pt-12']">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="px-6 py-4 border-t bg-gray-50">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showClose?: boolean
  closeOnBackdrop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showClose: true,
  closeOnBackdrop: true,
})

const emit = defineEmits(['update:modelValue', 'close'])

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-md',
    lg: 'w-full max-w-lg',
    xl: 'w-full max-w-xl',
    full: 'w-full max-w-4xl',
  }
  return sizes[props.size]
})

// Lock body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95);
  opacity: 0;
}
</style>