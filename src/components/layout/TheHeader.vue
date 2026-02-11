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
            <a :href="`tel:${CONTACT_PHONE}`" class="flex items-center hover:text-landora-accent transition-colors">
              <PhoneIcon class="w-4 h-4 mr-2" />
              {{ CONTACT_PHONE }}
            </a>
            <a :href="`mailto:${CONTACT_EMAIL}`" class="flex items-center hover:text-landora-accent transition-colors">
              <EnvelopeIcon class="w-4 h-4 mr-2" />
              {{ CONTACT_EMAIL }}
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
            <!-- Social Links -->
            <div class="flex items-center space-x-3">
              <a
                v-for="social in SOCIAL_LINKS"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="text-white hover:text-landora-accent transition-colors"
              >
                <component :is="getSocialIcon(social.icon)" class="w-4 h-4" />
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
        <RouterLink to="/" class="flex items-center">
          <span
            :class="[
              'text-2xl font-heading font-bold tracking-wider transition-colors',
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