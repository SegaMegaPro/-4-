<template>
  <div class="SparesItemWrapper">
    <div class="SparesItemMainContentWrapper">
      <p>{{ getTitle }}</p>
      <div class="SparesItemMainContent">
        <table>
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

export default {
  name: 'SparesItem',
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
  }
}
</script>

<style scoped>

</style>
