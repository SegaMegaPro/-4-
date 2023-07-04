import { createApp } from 'vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ExtraHeader from '@/components/ExtraHeader.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import TheSpares from '@/components/TheSpares.vue'
import TheContacts from '@/components/TheContacts.vue'
import '@/assets/Fonts/Font.ttf'
import '@/assets/Fonts/MultiroundPro.otf'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/extraheader', component: ExtraHeader },
    { path: '/mainheader', component: TheHeader },
    { path: '/themain', component: TheMain }
  ]
})

app.use(router)
app.component('extra-header', ExtraHeader)
app.component('the-header', TheHeader)
app.component('the-main', TheMain)
app.component('the-spares', TheSpares)
app.component('the-contacts', TheContacts)
app.mount('#app')
