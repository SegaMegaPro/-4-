<template>
  <div id="MainContentAbout">
    <p id="GreetingsAbout">
      Мы будем рады помочь Вам осуществить ремонт и ТО вашего автомобиля в кратчайшие сроки и с минимальными затратами.
      Наши специалисты быстро и качественно подберут для Вашего автомобиля необходимые комплектующие и запасные части.
      К Вашим услугам широкий ассортимент оригинальных запасных частей в наличии на складе компании "BRUH", при отсутствии
      нужной детали на складе, заказ и доставка осуществляется в сжатые сроки. На все работы по ремонту автомобилей
      предоставляется гарантия.<br>
      <br>
      Особое внимание наша автомастерская уделяет повышению качества услуг. В условиях жесткой конкуренции на рынке автосервиса
      этот важнейший фактор позволяет нам сохранить и расширить круг наших клиентов, гарантируя им стабильно высокое качество
      услуг при максимально низкой цене. Каждый этап работ тщательно контролируется нашими специалистами.
    </p>
    <div class="AboutPhotos _horizontalScroll" ref="scrollContainer">
      <img src="@/assets/Images/inside1.jpg" alt="">
      <img src="@/assets/Images/inside2.jpg" alt="">
      <img src="@/assets/Images/inside3.jpg" alt="">
      <img src="@/assets/Images/inside4.jpg" alt="">
      <img src="@/assets/Images/inside5.jpg" alt="">
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
export default {
  name: 'AboutLayout',
  mounted () {
    const scrollContainer = this.$refs.scrollContainer

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  }
}
</script>
<style scoped>

</style>
