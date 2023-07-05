import { createApp } from 'vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ExtraHeader from '@/components/ExtraHeader.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import TheSpares from '@/components/TheSpares.vue'
import TheContacts from '@/components/TheContacts.vue'
import TheForm from '@/components/TheForm.vue'
import '@/assets/Fonts/Font.ttf'
import '@/assets/Fonts/MultiroundPro.otf'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ExtraHeader },
    { path: '/mainheader', component: TheHeader },
    { path: '/themain', component: TheMain },
    { path: '/form', component: TheForm }
  ]
})

app.use(router)
app.use(VueScrollTo)
app.component('extra-header', ExtraHeader)
app.component('the-header', TheHeader)
app.component('the-main', TheMain)
app.component('the-spares', TheSpares)
app.component('the-contacts', TheContacts)
app.component('the-form', TheForm)
app.mount('#app')
