<template>
  <div class="faq-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <img
          src="/images/faq-hero.jpg"
          alt="FAQ"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50" />
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          FAQ
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">FAQ</span>
        </nav>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="section-container">
      <div class="max-w-3xl mx-auto">
        <SectionHeader
          subtitle="Questions & Answers"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our properties, purchasing process, and services."
          centered
        />

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>

        <!-- FAQ Accordion -->
        <div v-else class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full flex items-center justify-between p-6 text-left
                     bg-white hover:bg-landora-light transition-colors"
            >
              <span class="font-heading font-semibold text-landora-dark pr-8">
                {{ faq.question }}
              </span>
              <span
                :class="[
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                  'transition-all duration-300',
                  openIndex === index 
                    ? 'bg-landora-primary text-white rotate-45' 
                    : 'bg-landora-light text-landora-primary'
                ]"
              >
                <PlusIcon class="w-5 h-5" />
              </span>
            </button>
            
            <Transition name="accordion">
              <div
                v-if="openIndex === index"
                class="px-6 pb-6"
              >
                <div class="pt-4 border-t border-gray-100">
                  <p class="text-landora-muted leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Still Have Questions -->
        <div class="mt-16 text-center p-8 bg-landora-light rounded-lg">
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-4">
            Still Have Questions?
          </h3>
          <p class="text-landora-muted mb-6">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <RouterLink to="/contact" class="btn-primary">
            Contact Us
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { fetchFAQs } from '@/composables/useApi'
import type { FAQ } from '@/types'
import {
  ChevronRightIcon,
  PlusIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'

const faqs = ref<FAQ[]>([])
const loading = ref(true)
const openIndex = ref<number | null>(0)

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

onMounted(async () => {
  try {
    faqs.value = await fetchFAQs()
  } catch (error) {
    console.error('Failed to fetch FAQs:', error)
    // Use mock data as fallback
    faqs.value = [
      {
        id: '1',
        question: 'What types of properties does LANDORA offer?',
        answer: 'LANDORA specializes in luxury residential properties including apartments, penthouses, and family homes. Our portfolio ranges from cozy one-bedroom apartments to spacious three-bedroom family homes, all featuring premium finishes and modern amenities.',
        order: 1,
        active: true,
      },
      {
        id: '2',
        question: 'How can I schedule a property viewing?',
        answer: 'You can schedule a property viewing by contacting our sales team directly via phone, email, or by filling out the contact form on our website. We offer both in-person and virtual tours to accommodate your preferences.',
        order: 2,
        active: true,
      },
      {
        id: '3',
        question: 'What financing options are available?',
        answer: 'We work with several partner banks to offer competitive mortgage rates starting from 3.5%. Our financial advisors can help you explore various financing options and find the best solution for your situation. We also offer flexible payment plans for select properties.',
        order: 3,
        active: true,
      },
      {
        id: '4',
        question: 'Are the properties pet-friendly?',
        answer: 'Yes, most of our properties are pet-friendly. However, specific rules may apply depending on the building and unit type. Please check with our sales team for detailed information about pet policies for your chosen property.',
        order: 4,
        active: true,
      },
      {
        id: '5',
        question: 'What is included in the property price?',
        answer: 'Our property prices include the finished unit with all standard fixtures and fittings. This typically includes flooring, kitchen cabinets, bathroom fixtures, and basic lighting. Furniture packages and premium upgrades are available at additional cost.',
        order: 5,
        active: true,
      },
      {
        id: '6',
        question: 'How long does the purchase process take?',
        answer: 'The typical purchase process takes 4-8 weeks from initial agreement to key handover. This includes property inspection, legal checks, financing approval, and contract signing. Our team will guide you through each step to ensure a smooth process.',
        order: 6,
        active: true,
      },
    ]
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
}
</style>