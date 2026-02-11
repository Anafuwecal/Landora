import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Home | LANDORA' }
  },
  // About section
  {
    path: '/about/zaga-construction',
    name: 'ZagaConstruction',
    component: () => import('@/pages/about/ZagaConstruction.vue'),
    meta: { title: 'Zaga Construction | LANDORA' }
  },
  {
    path: '/about/landora',
    name: 'AboutLandora',
    component: () => import('@/pages/about/AboutLandora.vue'),
    meta: { title: 'About Us | LANDORA' }
  },
  {
    path: '/about/blocks',
    name: 'LandoraBlocks',
    component: () => import('@/pages/about/LandoraBlocks.vue'),
    meta: { title: 'Landora Blocks | LANDORA' }
  },
  // Pages section
  {
    path: '/pages/sales-offices',
    name: 'SalesOffices',
    component: () => import('@/pages/pages/SalesOffices.vue'),
    meta: { title: 'Sales Offices | LANDORA' }
  },
  {
    path: '/pages/press-releases',
    name: 'PressReleases',
    component: () => import('@/pages/pages/PressReleases.vue'),
    meta: { title: 'Press Releases | LANDORA' }
  },
  {
    path: '/pages/gallery',
    name: 'PhotoGallery',
    component: () => import('@/pages/pages/PhotoGallery.vue'),
    meta: { title: 'Photo Gallery | LANDORA' }
  },
  {
    path: '/pages/video',
    name: 'IntroVideo',
    component: () => import('@/pages/pages/IntroVideo.vue'),
    meta: { title: 'Intro Video | LANDORA' }
  },
  {
    path: '/pages/certificates',
    name: 'Certificates',
    component: () => import('@/pages/pages/Certificates.vue'),
    meta: { title: 'Certificates | LANDORA' }
  },
  {
    path: '/pages/faq',
    name: 'FAQ',
    component: () => import('@/pages/pages/FAQ.vue'),
    meta: { title: 'FAQ | LANDORA' }
  },
  {
    path: '/pages/team',
    name: 'SalesTeam',
    component: () => import('@/pages/pages/SalesTeam.vue'),
    meta: { title: 'Sales Team | LANDORA' }
  },
  // Apartments section
  {
    path: '/apartments',
    name: 'Apartments',
    component: () => import('@/pages/apartments/ApartmentsIndex.vue'),
    meta: { title: 'Apartments | LANDORA' }
  },
  {
    path: '/apartments/one-room',
    name: 'OneRoom',
    component: () => import('@/pages/apartments/OneRoom.vue'),
    meta: { title: '1 Room 47m² | LANDORA' }
  },
  {
    path: '/apartments/two-rooms',
    name: 'TwoRooms',
    component: () => import('@/pages/apartments/TwoRooms.vue'),
    meta: { title: '2 Rooms 65m² | LANDORA' }
  },
  {
    path: '/apartments/three-rooms',
    name: 'ThreeRooms',
    component: () => import('@/pages/apartments/ThreeRooms.vue'),
    meta: { title: '3 Rooms 90m² | LANDORA' }
  },
  // Other pages
  {
    path: '/facilities',
    name: 'Facilities',
    component: () => import('@/pages/FacilitiesPage.vue'),
    meta: { title: 'Facilities | LANDORA' }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/NewsPage.vue'),
    meta: { title: 'News | LANDORA' }
  },
  {
    path: '/news/:slug',
    name: 'NewsDetail',
    component: () => import('@/pages/NewsDetail.vue'),
    meta: { title: 'News Article | LANDORA' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: { title: 'Contact | LANDORA' }
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/pages/NotFound.vue'),
    meta: { title: '404 - Page Not Found | LANDORA' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'LANDORA'
  next()
})

export default router