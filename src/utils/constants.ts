import type { HeroSlide, NavItem } from '@/types'

export const SITE_NAME = 'LANDORA'
export const SITE_TAGLINE = 'Luxury Real Estate'
export const CONTACT_EMAIL = 'hello@landora.com'
export const CONTACT_PHONE = '+234(0)813-282-5644'
export const ADDRESS = 'Igbolomu 10th Street, Floor 3, Ikorodu, Lagos'

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'LANDORA',
    children: [
      { label: 'Zaga Construction', path: '/about/zaga-construction' },
      { label: 'About Landora', path: '/about/landora' },
      { label: 'Landora Blocks', path: '/about/blocks' },
    ]
  },
  {
    label: 'PAGES',
    children: [
      { label: 'Sales Offices', path: '/pages/sales-offices' },
      { label: 'Press Releases', path: '/pages/press-releases' },
      { label: 'Photo Gallery', path: '/pages/gallery' },
      { label: 'Intro Video', path: '/pages/video' },
      { label: 'Certificates', path: '/pages/certificates' },
      { label: 'FAQ', path: '/pages/faq' },
      { label: 'Sales Team', path: '/pages/team' },
      { label: '404 Error', path: '/404' },
    ]
  },
  {
    label: 'APARTMENTS',
    children: [
      { label: '1 Room 37m²', path: '/apartments/one-room' },
      { label: '2 Rooms 65m²', path: '/apartments/two-rooms' },
      { label: '3 Rooms 50m²', path: '/apartments/three-rooms' },
    ]
  },
  { label: 'FACILITIES', path: '/facilities' },
  { label: 'NEWS', path: '/news' },
  { label: 'CONTACT', path: '/contact' },
]

// Hero Slides
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/slide-1.jpg',
    title: 'Luxury Residences',
    subtitle: 'Living Spaces in Pechersk – Kyiv',
    ctaText: 'GET A CONSULTATION',
    ctaLink: '/contact'
  },
  {
    id: 2,
    image: '/images/hero/slide-2.jpg',
    title: 'Modern Living',
    subtitle: 'Premium Apartments with City Views',
    ctaText: 'GET A CONSULTATION',
    ctaLink: '/contact'
  },
  {
    id: 3,
    image: '/images/hero/slide-3.jpg',
    title: 'Your Dream Home',
    subtitle: 'Exclusive Properties for Discerning Buyers',
    ctaText: 'GET A CONSULTATION',
    ctaLink: '/contact'
  }
]

// Property Stats
export const PROPERTY_STATS = [
  { number: '0', label: 'Min to Subway', suffix: 'min' },
  { number: '250', label: 'Total Spaces', suffix: '+' },
  { number: '15', label: 'Years Experience', suffix: '+' },
  { number: '12000', label: 'Square Meters', suffix: 'm²' }
]

// Facility Categories
export const FACILITY_CATEGORIES = [
  { id: 'water', title: 'Water Taps', icon: 'water-drop' },
  { id: 'furniture', title: 'Furniture', icon: 'furniture' },
  { id: 'electricity', title: 'Electricity', icon: 'bolt' },
  { id: 'heating', title: 'Heating', icon: 'fire' },
  { id: 'security', title: 'Security', icon: 'shield' },
  { id: 'parking', title: 'Parking', icon: 'car' },
]

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Area' },
  { id: 'interior', label: 'Interior' },
  { id: 'building', label: 'Building' },
  { id: 'spaces', label: 'Spaces' },
]

// Social Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/landora', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com/landora', icon: 'instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/landora', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/landora', icon: 'twitter' },
]