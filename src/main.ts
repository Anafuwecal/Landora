import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Create Vue app instance
const app = createApp(App)

// Lazy loading directive
app.directive('lazy', {
  mounted(el: HTMLImageElement, binding: any) {
    const loadImage = () => {
      el.src = binding.value
      el.classList.add('loaded')
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  }
})

// Use plugins
app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: 'bottom-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
})

// Mount the app
app.mount('#app')