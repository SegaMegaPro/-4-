<template>
  <div class="SparesItemWrapper">
    <p class="SparesItemTitle">{{ getTitle }}</p>
    <div class="SparesItemMainContentWrapper">
      <div class="SparesItemMainContent">
        <table class="SparesItemTable">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="service in services" :key="service.id">
            <td>{{ service.id }}</td>
            <td>{{ service.servicename }}</td>
            <td>{{ service.price }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'SparesItem',
  data () {
    return {
      services: []
    }
  },
  computed: {
    ...mapState(['headerState']),
    getTitle () {
      switch (this.headerState.activeItem) {
        case 1:
          return 'Диагностика неисправностей'
        case 2:
          return 'Ремонт двигателей'
        case 3 :
          return 'Ремонт трансмиссии'
        case 4:
          return 'Автоэлектрика'
        case 5:
          return 'Автокондиционеры'
        case 6:
          return 'Кузовной ремонт'
        case 7:
          return 'Слесарный ремонт'
        case 8:
          return 'Ремонт топливной системы'
        case 9:
          return 'Ремонт после ДТП'
        case 10:
          return 'Техническое обслуживание'
        case 11:
          return 'Сезонное обслуживание'
        case 12:
          return 'Малярные работы'
        case 13:
          return 'Полировка'
        case 14:
          return 'Шиномонтаж'
        case 15:
          return 'Сход-развал 3D'
        case 16:
          return 'Детейлинг'
        case 17:
          return 'Установка доп.оборудования'
        case 18:
          return 'Страхование автомобиля'
        case 19:
          return 'Аварийное вскрытие'
        case 20:
          return 'Выездная диагностика'
        default:
          return 'Заголовок по умолчанию'
      }
    }
  },
  methods: {
    fetchServices () {
      axios.get('http://localhost:3000/car_services')
        .then(response => {
          this.services = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  mounted () {
    this.fetchServices()
  }
}
</script>

<style scoped>
.SparesItemWrapper{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  background-image: url("/src/assets/Images/MainContentBack.png");
  min-width: 1536px;
  width: 100%;
  height: 100%;
  min-height: 1500px;
  background-position: center;
  background-size: cover;
  padding: 50px 100px 50px 100px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 20px;
}
.SparesItemMainContentWrapper{
  display: flex;
  align-items: center;
  width: 1285px;
  height: 100%;
  min-height: 750px;
  margin: 0 auto 0 auto;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.50);
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
}
.SparesItemTitle{
  font-size: 36px;
  margin: 0 auto 20px auto;
}
.SparesItemTable{
  width: 1200px;
  text-align: center;
}
.SparesItemTable th{
  border: 1px solid white;
  border-collapse: collapse;
  height: 70px;
}
.SparesItemTable td{
  border: 1px solid #FFFFFF;
  height: 50px;
}
</style>
