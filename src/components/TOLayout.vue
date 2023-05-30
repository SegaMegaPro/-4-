<template>
  <div id="TO_Wrapper">
    <div id="TO_Header">
      <h1>{{carName}}</h1>
    </div>
    <div id="ListOfServices">
      <table id="services">
        <caption>Список услуг</caption>
        <tr>
          <th>ID</th>
          <th>Услуга</th>
          <th>Стоимость</th>
        </tr>
        <tr v-for="service in services" :key="service.id">
          <td>{{ service.id }}</td>
          <td>{{ service.servicename }}</td>
          <td>{{ service.price }}</td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import api from '@/services/api'
export default {
  name: 'TOLayout',
  props: ['carName'],
  data () {
    return {
      services: []
    }
  },
  mounted () {
    this.fetchServices()
  },
  methods: {
    fetchServices () {
      api.getServices()
        .then(response => {
          this.services = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

}
</script>

<style scoped>
  #TO_Wrapper {
    background-color: #34374C;
    width: 100%;
    height: 80vh;
  }
  #TO_Header {
    font-size: 1vw;
    position: relative;
    top: 4%;
    left: 42.5%;
    width: 15%;
    height: 12%;
    text-align: center;
    font-family: FontForTitles,serif;
    padding: 1%;
    box-sizing: border-box;
  }
  #ListOfServices
  {
    background-color: #6B728E;
    font-family: RegularFont,serif;
    font-size: 1vw;
    width: 100%;
    height: 75%;
    position: relative;
    top: 7%;
    bottom:93%;
    overflow: scroll;
  }
  #services
  {
    border:0.1vw solid #34374C;
    position: relative;
    top: 5%;
    text-align: center;
    font-size: 1.5vw;
    width: 100%;
    border-collapse: collapse;
  }
  #services th
  {
    border:0.1vw solid #34374C;
    background-color: #525772;
    position: sticky;
    top:-1%;
    min-height: 70px;
    height: 10vh;
  }
  #services td
  {
    border:0.1vw solid #34374C;
  }
  #services caption
  {
    margin-bottom: 1.5%;
  }
</style>
