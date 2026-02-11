import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isMobileMenuOpen = ref(false)
  const isLoading = ref(false)
  const currentLanguage = ref<'EN' | 'UA'>('EN')
  const scrollY = ref(0)

  // Getters
  const isScrolled = computed(() => scrollY.value > 100)

  // Actions
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
  }

  const setLoading = (value: boolean) => {
    isLoading.value = value
  }

  const setLanguage = (lang: 'EN' | 'UA') => {
    currentLanguage.value = lang
  }

  const updateScrollY = (value: number) => {
    scrollY.value = value
  }

  return {
    isMobileMenuOpen,
    isLoading,
    currentLanguage,
    scrollY,
    isScrolled,
    toggleMobileMenu,
    closeMobileMenu,
    setLoading,
    setLanguage,
    updateScrollY
  }
})