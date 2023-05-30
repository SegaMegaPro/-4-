<template>
  <div id="Navigation">
    <a @click="setActive('home')" :class="{'active': activeLink === 'home'}" class="NavigationLinks">Главная</a>
    <a @click="setActive('services')" :class="{'active': activeLink === 'services'}" class="NavigationLinks">Услуги</a>
    <a @click="setActive('spares_store')" :class="{'active': activeLink === 'spares_store'}" class="NavigationLinks">Магазин запчастей</a>
    <a @click="setActive('pricelist')" :class="{'active': activeLink === 'pricelist'}" class="NavigationLinks">Цены</a>
    <a @click="setActive('about')" :class="{'active': activeLink === 'about'}" class="NavigationLinks">О нас</a>
    <a @click="setActive('contacts')" :class="{'active': activeLink === 'contacts'}" class="NavigationLinks">Контакты</a>
  </div>
  <div>
    <component :is="getActiveComponent"></component>
  </div>
</template>

<script>
import HomeLayout from '@/components/HomeLayout'
import ServicesLayout from '@/components/ServicesLayout'
import SparesStoreLayout from '@/components/SparesStoreLayout'
import PriceListLayout from '@/components/PriceListLayout'
import AboutLayout from '@/components/AboutLayout'
import ContactsLayout from '@/components/ContactsLayout'
export default {
  name: 'TheNavigation',
  data () {
    return {
      activeLayout: 'home',
      activeLink: 'home'
    }
  },
  methods: {
    setActive (link) {
      this.activeLink = link
    }
  },
  computed: {
    getActiveComponent () {
      switch (this.activeLink) {
        case 'home':
          return HomeLayout
        case 'services':
          return ServicesLayout
        case 'spares_store':
          return SparesStoreLayout
        case 'pricelist':
          return PriceListLayout
        case 'about':
          return AboutLayout
        case 'contacts':
          return ContactsLayout
        default:
          return null
      }
    }
  }
}
</script>

<style scoped>
.active{
  color:white;
  background-color: #EE2B47;
  opacity: 80%;
  user-select: none;
}
.active:link, .active:visited, .active:active
{
  text-decoration: none;
}
.active:hover
{
  color: white;
}
</style>
