<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        @click.self="close"
      >
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-4 right-4 p-2 text-white/70 hover:text-white 
                 transition-colors z-10"
        >
          <XMarkIcon class="w-8 h-8" />
        </button>

        <!-- Navigation Arrows -->
        <button
          @click="prev"
          class="absolute left-4 p-3 text-white/70 hover:text-white 
                 transition-colors z-10"
        >
          <ChevronLeftIcon class="w-10 h-10" />
        </button>
        <button
          @click="next"
          class="absolute right-4 p-3 text-white/70 hover:text-white 
                 transition-colors z-10"
        >
          <ChevronRightIcon class="w-10 h-10" />
        </button>

        <!-- Image -->
        <div class="max-w-5xl max-h-[80vh] px-16">
          <Transition :name="transitionName" mode="out-in">
            <img
              :key="currentIndex"
              :src="images[currentIndex]?.url"
              :alt="images[currentIndex]?.title"
              class="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </Transition>
        </div>

        <!-- Caption & Counter -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
          <p v-if="images[currentIndex]?.title" class="text-lg mb-2">
            {{ images[currentIndex].title }}
          </p>
          <p class="text-sm text-white/60">
            {{ currentIndex + 1 }} / {{ images.length }}
          </p>
        </div>

        <!-- Thumbnails -->
        <div class="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2">
          <button
            v-for="(image, index) in images"
            :key="image.id"
            @click="goTo(index)"
            :class="[
              'w-12 h-12 rounded overflow-hidden border-2 transition-all',
              index === currentIndex 
                ? 'border-white opacity-100' 
                : 'border-transparent opacity-50 hover:opacity-75'
            ]"
          >
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

interface Image {
  id: number | string
  url: string
  title?: string
}

interface Props {
  modelValue: boolean
  images: Image[]
  initialIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0,
})

const emit = defineEmits(['update:modelValue'])

const currentIndex = ref(props.initialIndex)
const transitionName = ref('slide-right')

watch(() => props.initialIndex, (newIndex) => {
  currentIndex.value = newIndex
})

watch(() => props.modelValue, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const close = () => {
  emit('update:modelValue', false)
}

const prev = () => {
  transitionName.value = 'slide-left'
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}

const next = () => {
  transitionName.value = 'slide-right'
  currentIndex.value = currentIndex.value === props.images.length - 1 
    ? 0 
    : currentIndex.value + 1
}

const goTo = (index: number) => {
  transitionName.value = index > currentIndex.value ? 'slide-right' : 'slide-left'
  currentIndex.value = index
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.modelValue) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>