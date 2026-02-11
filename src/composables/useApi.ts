import { ref, type Ref } from 'vue'
import { supabase } from '@/lib/supabase'

interface UseApiReturn<T> {
  data: Ref<T | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  execute: () => Promise<void>
}

export function useApi<T>(
  tableName: string,
  options: {
    select?: string
    filter?: Record<string, any>
    order?: { column: string; ascending?: boolean }
    limit?: number
    single?: boolean
  } = {}
): UseApiReturn<T> {
  const data = ref<T | null>(null) as Ref<T | null>
  const loading = ref(false)
  const error = ref<string | null>(null)

  const execute = async () => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from(tableName)
        .select(options.select || '*')

      // Apply filters
      if (options.filter) {
        Object.entries(options.filter).forEach(([key, value]) => {
          query = query.eq(key, value)
        })
      }

      // Apply ordering
      if (options.order) {
        query = query.order(options.order.column, {
          ascending: options.order.ascending ?? true
        })
      }

      // Apply limit
      if (options.limit) {
        query = query.limit(options.limit)
      }

      // Execute query
      const result = options.single
        ? await query.single()
        : await query

      if (result.error) throw result.error
      data.value = result.data as T
    } catch (e: any) {
      error.value = e.message || 'An error occurred'
      console.error('API Error:', e)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, execute }
}

// Specific API functions
export async function fetchProperties(filters?: Record<string, any>) {
  let query = supabase
    .from('Property')
    .select('*')
    .eq('status', 'AVAILABLE')
    .order('createdAt', { ascending: false })

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value)
    })
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function fetchPropertyBySlug(slug: string) {
  const { data, error } = await supabase
    .from('Property')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}

export async function fetchNews(limit?: number) {
  let query = supabase
    .from('NewsPost')
    .select('*')
    .eq('published', true)
    .order('publishedAt', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function fetchNewsPost(slug: string) {
  const { data, error } = await supabase
    .from('NewsPost')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) throw error
  return data
}

export async function fetchTeamMembers() {
  const { data, error } = await supabase
    .from('TeamMember')
    .select('*')
    .eq('active', true)
    .order('order', { ascending: true })

  if (error) throw error
  return data
}

export async function fetchFAQs() {
  const { data, error } = await supabase
    .from('FAQ')
    .select('*')
    .eq('active', true)
    .order('order', { ascending: true })

  if (error) throw error
  return data
}

export async function fetchGalleryImages(category?: string) {
  let query = supabase
    .from('GalleryImage')
    .select('*')
    .eq('active', true)
    .order('order', { ascending: true })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

export async function fetchOffices() {
  const { data, error } = await supabase
    .from('Office')
    .select('*')
    .eq('active', true)
    .order('order', { ascending: true })

  if (error) throw error
  return data
}

export async function submitContactForm(formData: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  property?: string
}) {
  const { data, error } = await supabase
    .from('ContactSubmission')
    .insert([formData])
    .select()
    .single()

  if (error) throw error
  return data
}