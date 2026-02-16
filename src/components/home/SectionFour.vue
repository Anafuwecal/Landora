<template>
  <section class="relative py-24 overflow-hidden">
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-landora-primary/90"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white">
          <span class="inline-block text-sm font-heading font-medium uppercase tracking-widest text-landora-accent mb-4">
            Calculate Your Investment
          </span>
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">
            Landora Living Spaces
          </h2>
          <p class="text-white/80 mb-6">
            Decorated Flats in Lagos. Use our calculator to estimate 
            your mortgage payments and find the perfect property within your budget.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <CheckCircleIcon class="w-5 h-5 text-landora-accent mr-3 flex-shrink-0" />
              <span>Flexible payment options available</span>
            </li>
            <li class="flex items-center">
              <CheckCircleIcon class="w-5 h-5 text-landora-accent mr-3 flex-shrink-0" />
              <span>Low mortgage rates from 3.5%</span>
            </li>
            <li class="flex items-center">
              <CheckCircleIcon class="w-5 h-5 text-landora-accent mr-3 flex-shrink-0" />
              <span>No hidden fees or charges</span>
            </li>
          </ul>
          <button class="btn-white inline-flex items-center">
            Living Space Calculator
            <CalculatorIcon class="w-5 h-5 ml-2" />
          </button>
        </div>

        <!-- Calculator Card -->
        <div class="bg-white rounded-lg shadow-2xl p-8">
          <h3 class="text-xl font-heading font-semibold text-landora-dark mb-6">
            Quick Estimate
          </h3>
          <form @submit.prevent="calculateMortgage" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-landora-muted mb-2">
                Property Price ($)
              </label>
              <input
                v-model.number="calculator.price"
                type="number"
                class="form-input"
                placeholder="Enter property price"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-landora-muted mb-2">
                Down Payment (%)
              </label>
              <input
                v-model.number="calculator.downPayment"
                type="number"
                class="form-input"
                placeholder="Enter down payment percentage"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-landora-muted mb-2">
                Loan Term (years)
              </label>
              <select v-model.number="calculator.term" class="form-input">
                <option :value="10">10 years</option>
                <option :value="15">15 years</option>
                <option :value="20">20 years</option>
                <option :value="25">25 years</option>
                <option :value="30">30 years</option>
              </select>
            </div>
            <button type="submit" class="btn-primary w-full">
              Calculate Monthly Payment
            </button>
            <div v-if="monthlyPayment !== null" class="text-center pt-4 border-t">
              <p class="text-sm text-landora-muted">Estimated Monthly Payment</p>
              <p class="text-3xl font-heading font-bold text-landora-primary">
                ${{ monthlyPayment.toLocaleString() }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CheckCircleIcon, CalculatorIcon } from '@heroicons/vue/24/outline'

// Use an external image URL instead of local file
const backgroundImage = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80'

const calculator = reactive({
  price: 150000,
  downPayment: 20,
  term: 25,
})

const monthlyPayment = ref<number | null>(null)

const calculateMortgage = () => {
  const principal = calculator.price * (1 - calculator.downPayment / 100)
  const monthlyRate = 0.035 / 12
  const numPayments = calculator.term * 12

  const payment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)

  monthlyPayment.value = Math.round(payment)
}
</script>