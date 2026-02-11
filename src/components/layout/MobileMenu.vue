<template>
  <Transition name="mobile-menu">
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 lg:hidden"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/60"
        @click="closeMobileMenu"
      />

      <!-- Menu Panel -->
      <div class="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b">
            <span class="text-xl font-heading font-bold text-landora-primary">
              LANDORA
            </span>
            <button
              @click="closeMobileMenu"
              class="p-2 text-landora-dark hover:text-landora-primary"
            >
              <XMarkIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Navigation -->
          <nav class="flex-1 overflow-y-auto p-4">
            <div
              v-for="item in NAV_ITEMS"
              :key="item.label"
              class="mb-4"
            >
              <template v-if="item.children">
                <button
                  @click="toggleSubmenu(item.label)"
                  class="flex items-center justify-between w-full py-3 text-left 
                         font-heading font-medium text-landora-dark"
                >
                  <span>{{ item.label }}</span>
                  <ChevronDownIcon
                    :class="[
                      'w-5 h-5 transition-transform',
                      openSubmenu === item.label && 'rotate-180'
                    ]"
                  />
                </button>
                <Transition name="submenu">
                  <div
                    v-if="openSubmenu === item.label"
                    class="pl-4 mt-2 space-y-2"
                  >
                    <RouterLink
                      v-for="child in item.children"
                      :key="child.label"
                      :to="child.path!"
                      class="block py-2 text-landora-muted hover:text-landora-primary 
                             transition-colors"
                      @click="closeMobileMenu"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </Transition>
              </template>
              <template v-else>
                <RouterLink
                  :to="item.path!"
                  class="block py-3 font-heading font-medium text-landora-dark 
                         hover:text-landora-primary transition-colors"
                  @click="closeMobileMenu"
                >
                  {{ item.label }}
                </RouterLink>
              </template>
            </div>
          </nav>

          <!-- Footer -->
          <div class="p-4 border-t bg-landora-light">
            <RouterLink
              to="/contact"
              class="btn-primary w-full text-center"
              @click="closeMobileMenu"
            >
              GET A CONSULTATION
            </RouterLink>

            <div class="mt-4 flex items-center justify-center space-x-4">
              <button
                @click="setLanguage('EN')"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  currentLanguage === 'EN' 
                    ? 'bg-landora-primary text-white' 
                    : 'text-landora-muted hover:text-landora-primary'
                ]"
              >
                EN
              </button>
              <button
                @click="setLanguage('UA')"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  currentLanguage === 'UA' 
                    ? 'bg-landora-primary text-white' 
                    : 'text-landora-muted hover:text-landora-primary'
                ]"
              >
                UA
              </button>
            </div>

            <div class="mt-4 text-center text-sm text-landora-muted">
              <a :href="`tel:${CONTACT_PHONE}`" class="block hover:text-landora-primary">
                {{ CONTACT_PHONE }}
              </a>
              <a :href="`mailto:${CONTACT_EMAIL}`" class="block hover:text-landora-primary">
                {{ CONTACT_EMAIL }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { NAV_ITEMS, CONTACT_PHONE, CONTACT_EMAIL } from '@/utils/constants'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const appStore = useAppStore()
const { isMobileMenuOpen, currentLanguage } = storeToRefs(appStore)
const { closeMobileMenu, setLanguage } = appStore

const openSubmenu = ref<string | null>(null)

const toggleSubmenu = (label: string) => {
  openSubmenu.value = openSubmenu.value === label ? null : label
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active > div:last-child,
.mobile-menu-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from > div:last-child,
.mobile-menu-leave-to > div:last-child {
  transform: translateX(100%);
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  max-height: 0;
}

.submenu-enter-to,
.submenu-leave-from {
  max-height: 500px;
}
</style>