import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Property } from '@/types'
import { fetchProperties, fetchPropertyBySlug } from '@/composables/useApi'

export const usePropertiesStore = defineStore('properties', () => {
  // State
  const properties = ref<Property[]>([])
  const currentProperty = ref<Property | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const availableProperties = computed(() => 
    properties.value.filter(p => p.status === 'AVAILABLE')
  )

  const propertiesByType = computed(() => (type: string) =>
    properties.value.filter(p => p.type === type)
  )

  const featuredProperties = computed(() => 
    properties.value.slice(0, 6)
  )

  // Actions
  const loadProperties = async (filters?: Record<string, any>) => {
    loading.value = true
    error.value = null
    try {
      properties.value = await fetchProperties(filters)
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  const loadProperty = async (slug: string) => {
    loading.value = true
    error.value = null
    try {
      currentProperty.value = await fetchPropertyBySlug(slug)
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  const clearCurrentProperty = () => {
    currentProperty.value = null
  }

  return {
    properties,
    currentProperty,
    loading,
    error,
    availableProperties,
    propertiesByType,
    featuredProperties,
    loadProperties,
    loadProperty,
    clearCurrentProperty
  }
})