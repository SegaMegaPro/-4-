<template>
<div class="SparesWrapper" id="Spares">
  <div class="SparesMainContent">
    <p class="SparesContentInfo">
      Наш автосервис предлагает широкий ассортимент автозапчастей в Москве.
      Подберём и установим всё необходимое для вашей машины в кратчайшие сроки.
      Мы обслуживаем как отечественные марки автомобилей, так и иномарки из Японии, Кореи, Швеции, Франции и Америки
    </p>
    <p class="SparesContentInfo">
      Если вы как раз собирались купить автозапчасти в Москве, обращайтесь к нам! Мы гарантируем высокое качество будь это б/у автозапчасти или новые.
      Вы можете приобрести у нас контрактные агрегаты, бывшие в употреблении недолгое время, но отвечающие при этом всем требованиям качества.
      Доступны подержанные контрактные запчасти для иномарок:
    </p>
    <div class="SparesContentSparesList">
      <p class="SparesListItem">> Двигатели</p>
      <p class="SparesListItem">> АКПП</p>
      <p class="SparesListItem">> МКПП</p>
      <p class="SparesListItem">> Приводы</p>
      <p class="SparesListItem">> Рулевые рейки</p>
      <p class="SparesListItem">> Электронные блоки управления</p>
      <p class="SparesListItem">> Кузовные детали</p>
      <p class="SparesListItem">> Оптика и другое</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheSpares'
}
</script>

<style scoped>
.SparesWrapper{
  width: 100%;
  min-width: 1536px;
  min-height: 750px;
  height: calc(100vh - 70px);
  background-image: url("/src/assets/Images/SparesBackground.png");
  background-position: center;
  background-size: cover;
  padding: 104px 125px 124px 125px;
  box-sizing: border-box;
}
.SparesMainContent{
  border-radius: 10px;
  height: 100%;
  min-height: 550px;
  background: rgba(217, 217, 217, 0.50);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 17px 163px 19px 164px;
  box-sizing: border-box;
  flex-direction: column;
  color: #FFFFFF;
  text-align: center;
  font-size: calc(10px + 0.5vw);
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.SparesContentSparesList{
  display: flex;
  flex-direction: column;
  font-size: calc(8px + 0.5vw);
}
.SparesListItem{
  margin-bottom: 1px;
}
</style>
