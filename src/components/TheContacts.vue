<template>
  <the-form v-if="formVisibility"></the-form>
  <div class="ContactsWrapper" id="Contacts">
    <div class="ContactsMainContent">
      <div class="ContactsContentInfo">
        <p class="ContactsContentInfoTitle">Записывайтесь и приезжайте к нам!</p>
        <div class="ContactsPhone">
          <svg class="ContactsPhoneLogo" width="63" height="63" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.5057 58C40.2489 57.9833 38.0021 57.7 35.8118 57.1561C28.248 55.3311 20.4591 50.7017 13.8835 44.1203C7.30791 37.539 2.67268 29.7487 0.847726 22.1922C-1.07388 14.2432 0.296634 7.44262 4.70249 3.03679L5.96048 1.77881C7.10184 0.639734 8.6485 0 10.261 0C11.8735 0 13.4202 0.639734 14.5616 1.77881L21.7907 9.00644C22.9305 10.1474 23.5707 11.6942 23.5707 13.307C23.5707 14.9197 22.9305 16.4665 21.7907 17.6075L17.5204 21.8763C19.5676 25.4684 22.3519 29.0635 25.6426 32.3542C28.9332 35.6448 32.5312 38.4306 36.122 40.4777L40.3908 36.2075C40.9554 35.6426 41.6259 35.1945 42.3638 34.8887C43.1017 34.583 43.8926 34.4257 44.6913 34.4257C45.49 34.4257 46.2809 34.583 47.0188 34.8887C47.7567 35.1945 48.4272 35.6426 48.9918 36.2075L56.2195 43.4351C57.3596 44.5756 58 46.1223 58 47.7349C58 49.3475 57.3596 50.8941 56.2195 52.0347L54.9601 53.2927C51.8541 56.4044 47.555 58 42.5057 58ZM10.261 4.32507C10.0307 4.32393 9.80242 4.36876 9.58963 4.45695C9.37684 4.54514 9.18379 4.67491 9.02178 4.83865L7.76235 6.09664C4.46301 9.39596 3.49932 14.7525 5.04872 21.1708C6.68902 27.97 10.9117 35.0346 16.9376 41.0591C22.9636 47.0835 30.0268 51.3018 36.8274 52.9479C43.2472 54.4973 48.6009 53.5336 51.9002 50.2343L53.1582 48.9763C53.4869 48.6473 53.6715 48.2013 53.6715 47.7363C53.6715 47.2713 53.4869 46.8253 53.1582 46.4964L45.932 39.2687C45.603 38.9401 45.157 38.7554 44.692 38.7554C44.227 38.7554 43.781 38.9401 43.4521 39.2687L38.0407 44.6801C37.716 45.005 37.2963 45.2181 36.8425 45.2886C36.3886 45.3592 35.924 45.2835 35.5161 45.0725C31.0799 42.7787 26.6077 39.439 22.5827 35.414C18.5577 31.389 15.2252 26.9197 12.9256 22.4836C12.7144 22.0758 12.6385 21.6113 12.7088 21.1574C12.779 20.7036 12.9919 20.2838 13.3165 19.959L18.7294 14.5476C19.0581 14.2187 19.2427 13.7727 19.2427 13.3077C19.2427 12.8427 19.0581 12.3967 18.7294 12.0677L11.5017 4.83865C11.3392 4.67519 11.1458 4.54562 10.9329 4.45746C10.7199 4.3693 10.4915 4.3243 10.261 4.32507Z"/>
            <path d="M44.8172 31.9846C44.2432 31.9846 43.6928 31.7567 43.287 31.3508C42.8812 30.945 42.6532 30.3946 42.6532 29.8207C42.649 26.0244 41.1391 22.3848 38.4549 19.7003C35.7706 17.0158 32.1312 15.5056 28.3349 15.501C27.761 15.501 27.2105 15.273 26.8047 14.8672C26.3989 14.4614 26.1709 13.911 26.1709 13.3371C26.1709 12.7631 26.3989 12.2127 26.8047 11.8069C27.2105 11.4011 27.761 11.1731 28.3349 11.1731C38.6166 11.1731 46.9811 19.5404 46.9811 29.8207C46.9811 30.3946 46.7531 30.945 46.3473 31.3508C45.9415 31.7567 45.3911 31.9846 44.8172 31.9846Z"/>
            <path d="M53.9636 31.985C53.3896 31.985 52.8392 31.757 52.4334 31.3512C52.0276 30.9454 51.7996 30.395 51.7996 29.821C51.7996 16.882 41.2682 6.35502 28.3349 6.35502C27.761 6.35502 27.2105 6.12704 26.8047 5.72122C26.3989 5.31539 26.1709 4.76498 26.1709 4.19106C26.1709 3.61714 26.3989 3.06673 26.8047 2.66091C27.2105 2.25509 27.761 2.0271 28.3349 2.0271C43.6601 2.0271 56.1275 14.4959 56.1275 29.821C56.1275 30.395 55.8995 30.9454 55.4937 31.3512C55.0879 31.757 54.5375 31.985 53.9636 31.985Z"/>
          </svg>
          <div class="ContactsPhone1">
            <p>+7 (123)-123-12-23</p>
            <p>(Для звонков)</p>
          </div>
          <div class="ContactsPhone2">
            <p>+7 (123)-123-12-23</p>
            <p>(WhatsApp)</p>
          </div>
        </div>
        <div class="ContactsSchedule">
          <svg class="ContactsScheduleLogo" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 0C14.1403 0 0 14.1403 0 31.5C0 48.8597 14.1403 63 31.5 63C48.8597 63 63 48.8597 63 31.5C63 14.1403 48.8597 0 31.5 0ZM31.5 6.3C45.4549 6.3 56.7 17.5451 56.7 31.5C56.7 45.4549 45.4549 56.7 31.5 56.7C17.5451 56.7 6.3 45.4549 6.3 31.5C6.3 17.5451 17.5451 6.3 31.5 6.3ZM28.35 12.6V32.8043L41.8729 46.3271L46.3271 41.8729L34.65 30.1957V12.6H28.35Z"/>
          </svg>
          <p>График работы <br> С 10:00 до 21:00</p>
        </div>
        <div class="ContactsAddress">
          <svg class="ContactsAddressLogo" width="52" height="70" viewBox="0 0 52 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 70C26 70 52 45.1237 52 26.25C52 19.2881 49.2607 12.6113 44.3848 7.68845C39.5088 2.76562 32.8956 0 26 0C19.1044 0 12.4912 2.76562 7.61522 7.68845C2.73928 12.6113 1.02753e-07 19.2881 0 26.25C0 45.1237 26 70 26 70ZM26 39.375C29.4478 39.375 32.7544 37.9922 35.1924 35.5308C37.6304 33.0694 39 29.731 39 26.25C39 22.769 37.6304 19.4306 35.1924 16.9692C32.7544 14.5078 29.4478 13.125 26 13.125C22.5522 13.125 19.2456 14.5078 16.8076 16.9692C14.3696 19.4306 13 22.769 13 26.25C13 29.731 14.3696 33.0694 16.8076 35.5308C19.2456 37.9922 22.5522 39.375 26 39.375Z" fill="white"/>
          </svg>
          <p>Адрес <br> г.Москва, ул.Пушкина, д.Колотушкина 123</p>
        </div>
        <div class="ContactsMail">
          <svg class="ContactsMailLogo" width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.5007 47H10.8542C5.42023 47 1 42.5798 1 37.1458V10.8542C1 5.42091 5.42091 1 10.8542 1H52.5007C57.934 1 62.3542 5.42091 62.3542 10.8542V37.1458C62.3542 42.5798 57.934 47 52.5007 47ZM10.8542 3.8816C7.00931 3.8816 3.8816 7.00931 3.8816 10.8542V37.1458C3.8816 40.9907 7.00931 44.1191 10.8542 44.1191H52.5007C56.3456 44.1191 59.4733 40.9907 59.4733 37.1458V10.8542C59.4733 7.00931 56.3456 3.8816 52.5007 3.8816H10.8542Z" stroke="white" stroke-width="2"/>
            <path d="M8.52874 10.9915C15.894 18.1686 23.2592 25.345 30.6244 32.5221C31.9974 33.8596 34.1046 31.7572 32.7296 30.4169C25.3643 23.2405 17.9991 16.0634 10.6339 8.88704C9.2609 7.54883 7.15372 9.65192 8.52874 10.9915Z" stroke="white" stroke-width="2"/>
            <path d="M32.7299 32.522C40.0951 25.3456 47.4603 18.1685 54.8256 10.9921C56.1999 9.65251 54.0941 7.54874 52.7204 8.88695C45.3552 16.0633 37.99 23.2404 30.6247 30.4168C29.2504 31.7564 31.3562 33.8602 32.7299 32.522Z" stroke="white" stroke-width="2"/>
          </svg>
          <p>segamegapro123@gmail.com</p>
        </div>
      </div>
      <div class="ContactsMap">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=37.619973%2C55.748430&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=15.75" width="560" height="500" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
      </div>
    </div>
    <button class="ContactsButton" @click="ShowForm">Остались вопросы?</button>
  </div>
</template>

<script>
export default {
  name: 'TheContacts',
  data () {
    return {
      formVisibility: false
    }
  },
  methods: {
    ShowForm () {
      this.formVisibility = true
    }
  }
}
</script>

<style scoped>
.ContactsWrapper{
  background-image: url("/src/assets/Images/MainContentBack.png");
  width: 100%;
  min-width: 1536px;
  height: calc(100vh - 70px);
  min-height: 750px;
  background-position: center;
  background-size: cover;
  padding: 50px 125px 130px 125px;
  box-sizing: border-box;
}
.ContactsMainContent{
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.50);
  padding: 5px 48px 5px 48px;
  height: 100%;
  min-height: 550px;
  color: #FFFFFF;
  text-align: center;
  font-size: calc(8px + 1vw);
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-sizing: border-box;
}
.ContactsContentInfoTitle{
  margin-left: 75px;
}
.ContactsContentInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 35vw;
  min-width: 600px;
  height: 60vh;
  min-height: 500px;
  margin: 40px auto 40px 0px;
}
.ContactsPhone{
  display: flex;
  align-items: center;
  height: 53px;
  padding: 10px 10px;
  margin-bottom: 30px;
  font-size: calc(10px + 0.5vw);
}
.ContactsPhoneLogo{
  position: relative;
  margin-right: 30px;
  width: 63px;
  height: 63px;
  fill: #FFFFFF;
}
.ContactsPhone p{
  position: relative;
  height: 50%;
  width: 230px;
  margin-top: 0;
  margin-bottom: 0;
}
.ContactsPhone1{
  flex-direction: column;
  text-align: center;
  display: flex;
  margin-right: 10px;
}
.ContactsPhone2{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.ContactsSchedule{
  display: flex;
  text-align: center;
  align-items: center;
  height: 63px;
  padding: 10px 10px;
  margin-bottom: 13px;
  box-sizing: border-box;
}
.ContactsScheduleLogo{
  width: 63px;
  height: 63px;
  margin-right: 15px;
  fill: #FFFFFF;
}
.ContactsSchedule p{
  text-align: center;
  height: 50px;
  width: 485px;
}
.ContactsAddress{
  display: flex;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 13px;
}
.ContactsAddressLogo{
  width: 52px;
  height: 72px;
  margin-right: 90px;
  fill: #FFFFFF;
}
.ContactsAddress p{
  width: 415px;
  font-size: calc(8px + 0.5vw);
  position: relative;
  right: 30px;
  height: 50px;
  text-align: center;
}
.ContactsMail{
  display: flex;
  align-items: center;
  padding: 10px 10px;
  text-align: center;
  box-sizing: border-box;
}
.ContactsMailLogo{
  width: 64px;
  height: 48px;
  fill: #FFFFFF;
}
.ContactsMail p{
  width: 1vw;
  min-width: 500px;
}
.ContactsMap{
  position: relative;
  border-radius: 10px;
  width: 40vw;
  min-width: 500px;
  overflow:hidden;
  margin-left: 30px;
}
.ContactsMap iframe{
  position: relative;
  border-radius: 10px;
  width: 40vw;
  min-width: 560px;
  height: 60vh;
  min-height: 500px;
}
.ContactsButton{
  width: 100%;
  height: 100px;
  margin-top: 15px;
  border-radius: 10px;
  color: #FFFFFF;
  background: rgba(129, 163, 182, 0.7);
  box-shadow: 0 50px 40px 0 rgba(236, 236, 236, 0.25) inset, 4px 0 10px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: calc(14px + 1vw);
}
.Blur{
  opacity: 0.5;
}
</style>
