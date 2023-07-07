<template>
  <div class="HeaderWrapper">
    <div class="HeaderContent">
      <div class="CompanyLogo">
        <a class="AUTO" href="#">AUTO</a>
        <a class="DOC" href="#"><b>DOC</b></a>
      </div>
      <div class="Navigation">
        <a class="NavigationLinks" href="#" @click="setActiveLink('main'), scrollToBlock('Main')">Главная</a>
        <div class="ServicesWrapper" @mouseleave="hideDropdown" @mouseenter="showDropdown"></div>
        <a class="NavigationLinks" href="#" @click="setActiveLink('services')" @mouseenter="showDropdown" @mouseleave="hideDropdown">Услуги</a>
        <div class="Dropdown" v-if="isDropdownVisible" @mouseenter="showDropdown" @mouseleave="hideDropdown">
          <a href="#" class="DropdownLinks" @click="setActiveItem(1)">Диагностика неисправностей</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(2)">Ремонт двигателей</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(3)">Ремонт трансмиссии</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(4)">Автоэлектрика</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(5)">Автокондиционеры</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(6)">Кузовной ремонт</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(7)">Слесарный ремонт</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(8)">Ремонт топливной системы</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(9)">Ремонт после ДТП</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(10)">Техническое обслуживание</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(11)">Сезонное обслуживание</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(12)">Малярные работы</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(13)">Полировка</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(14)">Шиномонтаж</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(15)">Сход-развал 3D</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(16)">Детейлинг</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(17)">Установка доп.оборудования</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(18)">Страхование автомобиля</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(19)">Аварийное вскрытие</a>
          <a href="#" class="DropdownLinks" @click="setActiveItem(20)">Выездная диагностика</a>
        </div>
        <a class="NavigationLinks" href="#" @click="setActiveLink('spares'), scrollToBlock('Spares')">Комплектующие</a>
        <a class="NavigationLinks" href="#" @click="setActiveLink('contacts'), scrollToBlock('Contacts')">Контакты</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'TheHeader',
  data () {
    return {
      activeLink: '',
      activeItem: Number(0),
      isDropdownVisible: false
    }
  },
  computed: {
    ...mapState(['headerState'])
  },
  methods: {
    ...mapMutations(['setActiveItem']),
    setActiveLink (link) {
      this.activeLink = link
    },
    setActiveItem (item) {
      this.activeItem = item
      this.headerState.activeItem = this.activeItem
    },
    showDropdown () {
      this.isDropdownVisible = true
    },
    hideDropdown () {
      this.isDropdownVisible = false
    },
    scrollToBlock (blockID) {
      const block = document.getElementById(blockID)
      this.$scrollTo(block, 0, {
        easing: 'ease-in-out'
      })
    }
  }
}
</script>

<style scoped>
.HeaderWrapper{
  position: sticky;
  top:-1px;
  z-index: 10;
  width: 100%;
  min-width: 1536px;
  height: 70px;
  padding: 6px 0 7px 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.93);
}
.HeaderContent{
  display: flex;
  align-items: center;
  width: 1300px;
  height: 60px;
  margin: 0 auto 0 auto;
  box-sizing: border-box;
}
.CompanyLogo{
  display: flex;
  width: 274px;
  height: 60px;
  margin-right: 244px;
}
.AUTO{
  width: 146px;
  height: 41px;
  color: #009dff;
  text-shadow: 0 4px 4px 0 rgba(0, 157, 255, 0.25);
  font-size: 48px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
}
.DOC{
  position: relative;
  right: 7px;
  width: 122px;
  height: 41px;
  color: #EB455F;
  text-shadow: 0 4px 4px 0 rgba(235, 69, 95, 0.25);
  font-size: 48px;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
}
.CompanyLogo a:link, .CompanyLogo a:visited{
  text-decoration: none;
}
.Navigation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 838px;
  height: 30px;
}
.NavigationLinks{
  color: #FFF;
  font-size: 24px;
  height: 30px;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: all 0.5s;
  position: relative;
  text-align: center;
  padding: 10px;
}
.NavigationLinks:link, .NavigationLinks:visited{
  text-decoration: none;
}
.NavigationLinks:hover{
  color: #EB455F;
}
.NavigationLinks::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
}
.NavigationLinks:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.NavigationLinks::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.NavigationLinks:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

.ServicesWrapper{
  position: absolute;
  width: 120px;
  height: 65px;
  left: 52.5%;
  top: 10%;
}
.Dropdown {
  position: absolute;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  width: 15vw;
  min-width: 230px;
  background: rgba(0, 0, 0, 0.75);
  height: 500px;
  top: 100%;
  margin: 0 125px;
  color: #FFF;
  font-size: calc(8px + 0.5vw);
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Dropdown ::-webkit-scrollbar{
  width: 10px;
}
.NavigationLinks:hover + .Dropdown, .Dropdown:hover {
  display: block;
}
.DropdownLinks{
  color: white;
  display: block;
  padding: 5px 0 1px 2px;
  box-sizing: border-box;
  text-align: left;
  height: 55px;
  width: 15vw;
  min-width: 230px;
}
.DropdownLinks:link, .DropdownLinks:visited{
  text-decoration: none;
}
.DropdownLinks:hover{
  transition: 0.5s;
  color: #009dff;
}
</style>
