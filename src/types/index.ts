// Property Types
export interface Property {
  id: string
  title: string
  slug: string
  description: string
  price: number
  area: number
  rooms: number
  bathrooms: number
  floor?: number
  totalFloors?: number
  mortgage?: number
  features: string[]
  images: string[]
  status: PropertyStatus
  type: PropertyType
  location: string
  address?: string
  createdAt: Date
  updatedAt: Date
}

export type PropertyStatus = 'AVAILABLE' | 'SOLD' | 'RESERVED' | 'COMING_SOON'
export type PropertyType = 'APARTMENT' | 'HOUSE' | 'PENTHOUSE' | 'STUDIO'

// News Types
export interface NewsPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  tags: string[]
  category: string
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
}

// Team Types
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio?: string
  email?: string
  phone?: string
  linkedin?: string
  facebook?: string
  twitter?: string
  order: number
  active: boolean
}

// Office Types
export interface Office {
  id: string
  name: string
  address: string
  city: string
  country: string
  phone?: string
  email?: string
  mapUrl?: string
  hours?: string
  order: number
  active: boolean
}

// Contact Types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  property?: string
}

// Gallery Types
export interface GalleryImage {
  id: string
  title?: string
  url: string
  category: string
  order: number
  active: boolean
}

// FAQ Types
export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  order: number
  active: boolean
}

// Facility Types
export interface Facility {
  id: string
  title: string
  description: string
  icon: string
  order: number
  active: boolean
}

// Press Release Types
export interface PressRelease {
  id: string
  mediaName: string
  headline: string
  logo?: string
  url?: string
  publishedAt: Date
  order: number
  active: boolean
}

// Certificate Types
export interface Certificate {
  id: string
  title: string
  image: string
  order: number
  active: boolean
}

// Slider Types
export interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

// Navigation Types
export interface NavItem {
  label: string
  path?: string
  children?: NavItem[]
}