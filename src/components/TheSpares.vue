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
  height: 740px;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  background-image: url("/src/assets/Images/SparesBackground.png");
  padding: 104px 125px 124px 125px;
}
.SparesMainContent{
  width: 1285px;
  height: 100%;
  min-height: 550px;
  margin: 0 auto 0 auto;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.50);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 17px 163px 19px 164px;
  box-sizing: border-box;
  flex-direction: column;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.SparesContentSparesList{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.SparesListItem{
  margin-bottom: 1px;
}
</style>
