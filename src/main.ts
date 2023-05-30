import { createApp } from 'vue'
import App from '@/App.vue'
import TheHeader from './components/TheHeader.vue'
import TheNavigation from './components/TheNavigation.vue'
import HomeLayout from './components/HomeLayout.vue'
import ServicesLayout from './components/ServicesLayout.vue'
import SparesStoreLayout from './components/SparesStoreLayout.vue'
import PriceListLayout from './components/PriceListLayout.vue'
import AboutLayout from './components/AboutLayout.vue'
import ContactsLayout from './components/ContactsLayout.vue'
import TheFooter from './components/TheFooter.vue'
import TOLayout from './components/TOLayout.vue'
import '@/assets/style.css'
import '@/assets/Fonts/Font.ttf'
import '@/assets/Fonts/MultiroundPro.otf'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-navigation', TheNavigation)
app.component('home-layout', HomeLayout)
app.component('services-layout', ServicesLayout)
app.component('spares-store-layout', SparesStoreLayout)
app.component('price-list-layout', PriceListLayout)
app.component('about-layout', AboutLayout)
app.component('contacts-layout', ContactsLayout)
app.component('the-footer', TheFooter)
app.component('TO-layout', TOLayout)

app.mount('#app')
