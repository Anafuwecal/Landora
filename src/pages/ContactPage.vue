<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div class="absolute inset-0">
        <div 
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage})` }"
        ></div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">
          Contact Us
        </h1>
        <nav class="flex items-center justify-center text-sm">
          <RouterLink to="/" class="hover:text-landora-accent transition-colors">
            Home
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 mx-2" />
          <span class="text-landora-accent">Contact</span>
        </nav>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <SectionHeader
            subtitle="Get in Touch"
            title="We'd Love to Hear From You"
            description="Have questions about our properties? Want to schedule a visit? Reach out to us and we'll get back to you as soon as possible."
          />

          <!-- Visit Us -->
          <div class="mb-8">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4 flex items-center">
              <MapPinIcon class="w-5 h-5 text-landora-primary mr-2" />
              Visit Us
            </h3>
            <p class="text-landora-muted ml-7">
              {{ ADDRESS }}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              class="inline-flex items-center ml-7 mt-2 text-landora-primary hover:text-landora-secondary transition-colors"
            >
              Click for map
              <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-1" />
            </a>
          </div>

          <!-- Say Hello -->
          <div class="mb-8">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4 flex items-center">
              <ChatBubbleLeftRightIcon class="w-5 h-5 text-landora-primary mr-2" />
              Say Hello
            </h3>
            <div class="ml-7 space-y-2">
              <a
                :href="`mailto:${CONTACT_EMAIL}`"
                class="block text-landora-muted hover:text-landora-primary transition-colors"
              >
                {{ CONTACT_EMAIL }}
              </a>
              <a
                :href="`tel:${CONTACT_PHONE}`"
                class="block text-landora-muted hover:text-landora-primary transition-colors"
              >
                {{ CONTACT_PHONE }}
              </a>
            </div>
          </div>

          <!-- Working Hours -->
          <div class="mb-8">
            <h3 class="text-lg font-heading font-semibold text-landora-dark mb-4 flex items-center">
              <ClockIcon class="w-5 h-5 text-landora-primary mr-2" />
              Working Hours
            </h3>
            <div class="ml-7 text-landora-muted">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <!-- Map -->
          <div class="rounded-lg overflow-hidden shadow-lg h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310757624!2d3.1191427001003134!3d6.5483693711779205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2snl!4v1771190291609!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <div class="bg-landora-light rounded-lg p-8">
            <h3 class="text-2xl font-heading font-semibold text-landora-dark mb-6">
              Send Us a Message
            </h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-landora-muted mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  :class="{ 'border-red-500': errors.name }"
                  placeholder="John Doe"
                  required
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-landora-muted mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  :class="{ 'border-red-500': errors.email }"
                  placeholder="john@example.com"
                  required
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone (Optional) -->
              <div>
                <label for="phone" class="block text-sm font-medium text-landora-muted mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="form-input"
                  placeholder="0802-345-6743"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-landora-muted mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="form-input"
                  :class="{ 'border-red-500': errors.subject }"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Property Inquiry">Property Inquiry</option>
                  <option value="Schedule a Visit">Schedule a Visit</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
                <p v-if="errors.subject" class="mt-1 text-sm text-red-500">
                  {{ errors.subject }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-landora-muted mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-input min-h-[150px] resize-none"
                  :class="{ 'border-red-500': errors.message }"
                  placeholder="How can we help you?"
                  rows="5"
                  required
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn-primary w-full"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <!-- Success Message -->
              <div
                v-if="submitSuccess"
                class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
              >
                <p class="font-medium">Thank you for your message!</p>
                <p class="text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { CONTACT_EMAIL, CONTACT_PHONE, ADDRESS } from '@/utils/constants'
import {
  ChevronRightIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'

const heroImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'

const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const validateForm = (): boolean => {
  let isValid = true

  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject) {
    errors.subject = 'Please select a subject'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitSuccess.value = false

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  submitSuccess.value = true
  toast.success('Message sent successfully!')

  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''

  isSubmitting.value = false
}
</script>