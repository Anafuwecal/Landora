import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Check if we have valid Supabase credentials
const isValidUrl = (url: string): boolean => {
  if (!url) return false
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && url.includes('.supabase.co')
  } catch {
    return false
  }
}

const hasValidCredentials = isValidUrl(supabaseUrl) && supabaseAnonKey.length > 0

// Create a mock client for development without Supabase
const createMockClient = (): SupabaseClient => {
  console.warn(
    'Supabase not configured. Running in demo mode.\n' +
    'To connect to Supabase, create a .env file with:\n' +
    'VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
    'VITE_SUPABASE_ANON_KEY=your-anon-key'
  )

  const mockData = { data: null, error: null }

  const createChainable = (): any => {
    const chainable: any = {}
    const methods = [
      'select', 'insert', 'update', 'delete', 'upsert',
      'eq', 'neq', 'gt', 'gte', 'lt', 'lte',
      'like', 'ilike', 'is', 'in', 'contains',
      'containedBy', 'range', 'overlaps', 'textSearch',
      'filter', 'not', 'or', 'and',
      'order', 'limit', 'offset', 'range',
      'single', 'maybeSingle', 'csv'
    ]
    
    methods.forEach(method => {
      chainable[method] = () => chainable
    })
    
    chainable.then = (resolve: (value: any) => void) => {
      return Promise.resolve(mockData).then(resolve)
    }
    
    return chainable
  }

  const mockClient = {
    from: () => createChainable(),
    rpc: () => Promise.resolve(mockData),
    channel: () => ({
      on: () => ({ subscribe: () => ({}) }),
      subscribe: () => ({}),
    }),
    removeChannel: () => Promise.resolve({ error: null }),
    getChannels: () => [],
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: { path: 'mock-path' }, error: null }),
        download: () => Promise.resolve({ data: null, error: null }),
        remove: () => Promise.resolve({ data: null, error: null }),
        list: () => Promise.resolve({ data: [], error: null }),
        getPublicUrl: () => ({ data: { publicUrl: 'https://via.placeholder.com/400' } }),
        createSignedUrl: () => Promise.resolve({ data: { signedUrl: '' }, error: null }),
      }),
      listBuckets: () => Promise.resolve({ data: [], error: null }),
      createBucket: () => Promise.resolve({ data: null, error: null }),
      deleteBucket: () => Promise.resolve({ data: null, error: null }),
      emptyBucket: () => Promise.resolve({ data: null, error: null }),
    },
    auth: {
      signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithOAuth: () => Promise.resolve({ data: { provider: '', url: '' }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
      resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
      updateUser: () => Promise.resolve({ data: { user: null }, error: null }),
    },
    functions: {
      invoke: () => Promise.resolve({ data: null, error: null }),
    },
    realtime: {
      connect: () => {},
      disconnect: () => {},
    },
  }

  return mockClient as unknown as SupabaseClient
}

// Create the Supabase client
let supabase: SupabaseClient

if (hasValidCredentials) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
    console.log('Supabase connected successfully')
  } catch (error) {
    console.error('Failed to initialize Supabase:', error)
    supabase = createMockClient()
  }
} else {
  supabase = createMockClient()
}

// Export the client and helper flag
export { supabase }
export const isSupabaseConfigured = hasValidCredentials

// Helper function for file uploads
export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
): Promise<string | null> => {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured. File upload skipped.')
    return 'https://via.placeholder.com/400'
  }

  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) {
      console.error('Upload error:', error)
      return null
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path)

    return publicUrl
  } catch (error) {
    console.error('Upload error:', error)
    return null
  }
}

// Helper for getting public URL
export const getPublicUrl = (bucket: string, path: string): string => {
  if (!isSupabaseConfigured) {
    return 'https://via.placeholder.com/400'
  }

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)
  
  return publicUrl
}