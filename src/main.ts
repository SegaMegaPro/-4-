import { createApp } from 'vue'
import App from '@/App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import ExtraHeader from '@/components/ExtraHeader.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import TheSpares from '@/components/TheSpares.vue'
import TheContacts from '@/components/TheContacts.vue'
import TheForm from '@/components/TheForm.vue'
import TheFooter from '@/components/TheFooter.vue'
import FormData from '@/components/FormData.vue'
import SparesItem from '@/components/SparesItem.vue'
import '@/assets/Fonts/Font.ttf'
import '@/assets/Fonts/MultiroundPro.otf'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/main',
      components: {
        extraHeader: ExtraHeader,
        mainHeader: TheHeader,
        theMain: TheMain,
        theSpares: TheSpares,
        theContacts: TheContacts,
        theFooter: TheFooter
      }
    },
    {
      path: '/item',
      components: {
        sparesItem: SparesItem,
        theFooterSparesItem: TheFooter
      }
    }
  ]
})

const store = createStore({
  state: {
    headerState: {
      activeItem: Number(0)
    },
    formState: {
      formVisibility: false,
      phone: '',
      name: '',
      message: ''
    }
  },
  mutations: {
    setFormVisibility (state, value) {
      state.formState.formVisibility = value
    },
    setPhoneData (state, data) {
      state.formState.phone = data
    },
    setNameData (state, data) {
      state.formState.name = data
    },
    setMessageData (state, data) {
      state.formState.message = data
    },
    setActiveItem (state, data) {
      state.headerState.activeItem = data
    }
  }
})

app.use(router)
app.use(store)
app.use(VueScrollTo)
app.component('extra-header', ExtraHeader)
app.component('the-header', TheHeader)
app.component('the-main', TheMain)
app.component('the-spares', TheSpares)
app.component('the-contacts', TheContacts)
app.component('the-footer', TheFooter)
app.component('the-form', TheForm)
app.component('form-data', FormData)
app.component('spares-item', SparesItem)
app.mount('#app')
