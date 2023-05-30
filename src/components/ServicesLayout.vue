<template>
    <div id="MainContentServices">
      <p id="GreetingsService">
        Техническое обслуживание автомобилей:
      </p>
      <div id = "LogoWrapper">
        <figure>
          <a @click="setCarName('Opel')"><img id = "OpelLogo" src="@/assets/Images/1200px-Opel_logo.svg.png" alt=""></a>
          <figcaption>OPEL</figcaption>
        </figure>
        <figure>
          <a @click="setCarName('Hyundai')"><img id = "HyundaiLogo" src="@/assets/Images/Hyundai-Logo.png" alt=""></a>
          <figcaption>HYUNDAI</figcaption>
        </figure>
        <figure>
          <a @click="setCarName('Mitsubishi')"><img id = "MitsubishiLogo" src="@/assets/Images/Mitsubishi-emblem-1024x768.png" alt=""></a>
          <figcaption>MITSUBISHI</figcaption>
        </figure>
        <figure>
          <a @click="setCarName('KIA')"><img id = "KiaLogo" src="@/assets/Images/Kia-Logo.png" alt=""></a>
          <figcaption>KIA</figcaption>
        </figure>
        <figure>
          <a @click="setCarName('Chevrolet')"><img id = "ChevroletLogo" src="@/assets/Images/Chevrolet-logo-2011-1366x768.png" alt=""></a>
          <figcaption>CHEVROLET</figcaption>
        </figure>
      </div>
    </div>
  <component :is="getActiveTO" :carName = "carName"/>
  <the-footer></the-footer>
</template>

<script>

import TOLayout from '@/components/TOLayout'

export default {
  name: 'ServicesLayout',
  data () {
    return {
      carName: ''
    }
  },
  methods: {
    setCarName (carName) {
      this.carName = carName
    }
  },
  computed: {
    getActiveTO () {
      switch (this.carName) {
        case 'Opel':
          return TOLayout
        case 'Hyundai':
          return TOLayout
        case 'Mitsubishi':
          return TOLayout
        case 'KIA':
          return TOLayout
        case 'Chevrolet':
          return TOLayout
        default:
          return null
      }
    }
  },
  components: {
    TOLayout
  }
}
</script>

<style scoped>

</style>
