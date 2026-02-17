<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    ]"
  >
    <!-- Top Bar -->
    <div
      v-if="!isScrolled"
      class="hidden lg:block border-b border-white/20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-2 text-sm">
          <div class="flex items-center space-x-6 text-white">
            <a 
              :href="`tel:${CONTACT_PHONE}`" 
              class="flex items-center hover:text-landora-accent transition-colors whitespace-nowrap"
            >
              <PhoneIcon class="w-4 h-4 mr-2 flex-shrink-0" />
              <span class="whitespace-nowrap">{{ CONTACT_PHONE }}</span>
            </a>
            <a 
              :href="`mailto:${CONTACT_EMAIL}`" 
              class="flex items-center hover:text-landora-accent transition-colors whitespace-nowrap"
            >
              <EnvelopeIcon class="w-4 h-4 mr-2 flex-shrink-0" />
              <span class="whitespace-nowrap">{{ CONTACT_EMAIL }}</span>
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <div class="flex items-center space-x-2 text-white">
              <button
                @click="setLanguage('EN')"
                :class="[
                  'px-2 py-1 text-xs font-medium transition-colors',
                  currentLanguage === 'EN' ? 'text-landora-accent' : 'hover:text-landora-accent'
                ]"
              >
                EN
              </button>
              <span class="text-white/50">|</span>
              <button
                @click="setLanguage('UA')"
                :class="[
                  'px-2 py-1 text-xs font-medium transition-colors',
                  currentLanguage === 'UA' ? 'text-landora-accent' : 'hover:text-landora-accent'
                ]"
              >
                UA
              </button>
            </div>
            <div class="flex items-center space-x-2">
              <a
                v-for="social in SOCIAL_LINKS"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="text-white hover:text-landora-accent transition-colors"
                :aria-label="social.name"
              >
                <component :is="getSocialIcon(social.icon)" class="w-2 h-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 outline-none focus:outline-none border-none">
          <!-- Logo Icon -->
          <svg
            class="w-10 h-10 sm:w-12 sm:h-12"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Background -->
            <rect 
              width="64" 
              height="64" 
              rx="12" 
              :fill="isScrolled ? '' : ''"
            />
            <!-- House -->
            <path 
              d="M32 14L50 30V50H14V30L32 14Z" 
              :fill="isScrolled ? '#065f46' : 'white'"
            />
            <!-- Inner section -->
            <path 
              d="M32 22L44 32V46H20V32L32 22Z" 
              :fill="isScrolled ? 'white' : '#065f46'"
            />
            <!-- Door -->
            <rect 
              x="28" 
              y="35" 
              width="8" 
              height="11" 
              rx="1" 
              :fill="isScrolled ? '#065f46' : 'white'"
            />
            <!-- Windows -->
            <rect 
              x="22" 
              y="34" 
              width="4" 
              height="4" 
              rx="0.5" 
              :fill="isScrolled ? '#065f46' : 'white'"
            />
            <rect 
              x="38" 
              y="34" 
              width="4" 
              height="4" 
              rx="0.5" 
              :fill="isScrolled ? '#065f46' : 'white'"
            />
          </svg>
          
          <!-- Logo Text -->
          <span
            :class="[
              'text-xl sm:text-2xl font-heading font-bold tracking-wider transition-colors',
              isScrolled ? 'text-landora-primary' : 'text-white'
            ]"
          >
            LANDORA
          </span>
        </RouterLink>


        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <div
            v-for="item in NAV_ITEMS"
            :key="item.label"
            class="relative group"
          >
            <template v-if="item.children">
              <button
                :class="[
                  'nav-link flex items-center space-x-1 py-2',
                  isScrolled ? 'text-landora-dark' : 'text-white'
                ]"
              >
                <span>{{ item.label }}</span>
                <ChevronDownIcon class="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <!-- Dropdown -->
              <div
                class="absolute top-full left-0 pt-2 opacity-0 invisible 
                       group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <div class="bg-white rounded-lg shadow-xl py-2 min-w-[200px]">
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.label"
                    :to="child.path!"
                    class="block px-4 py-2 text-sm text-landora-dark hover:bg-landora-light 
                           hover:text-landora-primary transition-colors"
                  >
                    {{ child.label }}
                  </RouterLink>
                </div>
              </div>
            </template>
            <template v-else>
              <RouterLink
                :to="item.path!"
                :class="[
                  'nav-link py-2',
                  isScrolled ? 'text-landora-dark' : 'text-white'
                ]"
              >
                {{ item.label }}
              </RouterLink>
            </template>
          </div>
        </nav>

        <!-- CTA Button (Desktop) -->
        <div class="hidden lg:block">
          <RouterLink
            to="/contact"
            :class="[
              'btn-primary text-xs',
              !isScrolled && 'bg-white/20 hover:bg-white hover:text-landora-primary'
            ]"
          >
            GET A CONSULTATION
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-md"
          :class="isScrolled ? 'text-landora-dark' : 'text-white'"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { NAV_ITEMS, CONTACT_PHONE, CONTACT_EMAIL, SOCIAL_LINKS } from '@/utils/constants'
import {
  PhoneIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const appStore = useAppStore()
const { isScrolled, isMobileMenuOpen, currentLanguage } = storeToRefs(appStore)
const { toggleMobileMenu, setLanguage } = appStore

// Social icon mapping
const getSocialIcon = (icon: string) => {
  const icons: Record<string, any> = {
    facebook: defineAsyncComponent(() => import('@/components/icons/FacebookIcon.vue')),
    instagram: defineAsyncComponent(() => import('@/components/icons/InstagramIcon.vue')),
    linkedin: defineAsyncComponent(() => import('@/components/icons/LinkedInIcon.vue')),
    twitter: defineAsyncComponent(() => import('@/components/icons/TwitterIcon.vue')),
  }
  return icons[icon] || 'span'
}

import { defineAsyncComponent } from 'vue'
</script>