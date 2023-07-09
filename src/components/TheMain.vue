<template>
<div class="MainWrapper" id="Main">
  <div class="MainContent">
    <p class="MainContentTitle">Почему мы <span class="DynamicText">{{dynamicText}}</span></p>
    <p class="MainContentInfo">Наша компания занимается ремонтом автомобилей со времён Большого Взрыва и за это время
      зарекомендовала себя как надежных поставщиков услуг в сфере ремонта автомобилей.</p>
    <p class="MainContentInfo">Наш подход к ремонту автомобиля прост - каждую машину мы делаем " как для себя"</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheMain',
  data () {
    return {
      dynamicText: '',
      texts: ['надежнее?', 'качественнее?', 'эффективнее?'],
      currentIndex: 0,
      isDeleting: false
    }
  },
  methods: {
    typeText () {
      const text = this.texts[this.currentIndex]
      let currentLength = this.isDeleting ? text.length : 0
      const interval = setInterval(() => {
        if (this.isDeleting) {
          this.dynamicText = text.slice(0, currentLength--)
        } else {
          this.dynamicText = text.slice(0, currentLength++)
        }
        if (currentLength === -1) {
          this.isDeleting = false
          clearInterval(interval)
          this.currentIndex = (this.currentIndex + 1) % this.texts.length
          setTimeout(() => {
            this.typeText()
          }, 400)
        } else if (currentLength === text.length + 1) {
          this.isDeleting = true
        }
      }, 100)
    }
  },
  mounted () {
    this.typeText()
  }
}
</script>

<style scoped>
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #eb455f; }
}

.DynamicText {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid #eb455f;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}
.MainWrapper{
  background-image: url("/src/assets/Images/MainContentBack.png");
  width: 100%;
  min-width: 1536px;
  height: 740px;
  background-position: center;
  background-size: cover;
  padding: 104px 125px 104px 125px;
  box-sizing: border-box;
}
.MainContent{
  display: flex;
  align-items: center;
  width: 1285px;
  height: 100%;
  min-height: 550px;
  margin: 0 auto 0 auto;
  justify-content: space-around;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.50);
  padding: 19px 163px 19px 163px;
  box-sizing: border-box;
  flex-direction: column;
}
.MainContentTitle{
  text-align: center;
  color: #FFF;
  width: 750px;
  height: 70px;
  font-size: 48px;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.MainContentTitle span{
  color: #EB455F;
}
.MainContentInfo{
  color: #FFF;
  text-align: center;
  width: 1000px;
  font-size: 28px;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
