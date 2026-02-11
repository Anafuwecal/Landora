import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  let observer: IntersectionObserver | null = null

  const setupObserver = () => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Optionally disconnect after first intersection
            // observer?.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(elementRef.value)
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible, elementRef }
}

export function useParallax(speed: number = 0.5) {
  const offset = ref(0)

  const handleScroll = () => {
    offset.value = window.scrollY * speed
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { offset }
}

export function useCountUp(
  endValue: number,
  duration: number = 2000,
  startOnMount: boolean = false
) {
  const count = ref(0)
  const isAnimating = ref(false)

  const animate = () => {
    if (isAnimating.value) return

    isAnimating.value = true
    const startTime = performance.now()
    const startValue = 0

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out-cubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      count.value = Math.floor(startValue + (endValue - startValue) * easeProgress)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        count.value = endValue
        isAnimating.value = false
      }
    }

    requestAnimationFrame(step)
  }

  if (startOnMount) {
    onMounted(() => {
      animate()
    })
  }

  return { count, animate, isAnimating }
}