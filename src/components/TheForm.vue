<template>
  <div class="FormWrapper">
    <div class="FormContent">
      <div class="FormTitleAndBackWrapper">
        <p class="FormTitle">Остались вопросы?</p>
        <button class="FormBack" @click="showForm"></button>
      </div>
      <form>
        <div class="FormNameAndPhoneWrapper">
          <p class="FormNameTitle">Ваше имя:</p>
          <input class="FormNameInput" id="formName" placeholder="Введите имя..." v-model="name" @input="nameValidation" required>
          <p class="FormPhoneTitle">Ваш номер телефона:</p>
          <input class="FormPhoneInput" id="formPhone" placeholder="Введите номер телефона..." v-model="phone" @input="phoneValidation" ref="phoneInput" required>
        </div>
        <div class="FormMessageWrapper">
          <p class="FormMessageTitle">Ваше сообщение:</p>
          <textarea class="FormMessageInput" id="formMessage" placeholder="Ваше сообщение..." v-model="message" @input="limitChars" required></textarea>
          <p class="FormCharsNotifier">Осталось символов: {{ charsRemained }}</p>
          <button class="FormSend" @click="sendForm" :disabled="!isPhoneValid">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'TheForm',
  data () {
    return {
      phone: '',
      name: '',
      message: '',
      maxChars: 300,
      isPhoneValid: false
    }
  },
  computed: {
    ...mapState(['formState']),
    charsRemained () {
      return this.maxChars - this.message.length
    }
  },
  methods: {
    ...mapMutations(['setFormVisibility', 'setPhoneData', 'setNameData', 'setMessageData']),
    phoneValidation () {
      const input = this.$refs.phoneInput
      function mask (event) {
        let keyCode
        event.keyCode && (keyCode = event.keyCode)
        const pos = this.selectionStart
        if (pos < 3) event.preventDefault()
        const matrix = '+7 (___) -___-__-__'
        let i = 0
        const def = matrix.replace(/\D/g, '')
        const val = input.value.replace(/\D/g, '')
        let newValue = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        })
        i = newValue.indexOf('_')
        if (i !== -1) {
          if (i < 5) i = 3
          newValue = newValue.slice(0, i)
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return '\\d{1,' + a.length + '}'
          })
          .replace(/[+()]/g, '\\$&')
        reg = new RegExp('^' + reg + '$')
        if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
          input.value = newValue
        }
        if (event.type === 'blur' && this.value.length < 5) {
          this.value = ''
        }
        if (input.value.length === matrix.length) {
          input.style.borderColor = 'green'
        } else {
          input.style.borderColor = 'red'
        }
      }
      input.addEventListener('input', mask.bind(input), false)
      input.addEventListener('focus', mask.bind(input), false)
      input.addEventListener('blur', mask.bind(input), false)
      input.addEventListener('keydown', mask.bind(input), false)
      this.updateButtonState()
    },
    attachPhoneMask () {
      const input = this.$refs.phoneInput
      input.addEventListener('input', this.phoneValidation, false)
      input.addEventListener('focus', this.phoneValidation, false)
      input.addEventListener('blur', this.phoneValidation, false)
      input.addEventListener('keydown', this.phoneValidation, false)
    },
    limitChars () {
      if (this.message.length > this.maxChars) {
        this.message = this.message.substring(0, this.maxChars)
      }
    },
    updateButtonState () {
      const phoneInput = this.$refs.phoneInput
      if (phoneInput.style.borderColor === 'green') {
        this.isPhoneValid = true
      } else {
        this.isPhoneValid = false
      }
    },
    nameValidation () {
      const nameInput = document.querySelector('.FormNameInput')
      const nameRegex = /^[a-zA-Zа-яА-Я]{0,20}$/
      if (!nameRegex.test(this.name)) {
        nameInput.style.borderColor = 'red'
      } else {
        nameInput.style.borderColor = 'green'
      }
    },
    sendForm () {
      this.setNameData(this.name)
      this.setPhoneData(this.phone)
      this.setMessageData(this.message)
    },
    showForm () {
      this.setFormVisibility(false)
    }
  },
  mounted () {
    this.attachPhoneMask()
    this.updateButtonState()
  }
}
</script>

<style scoped>
.FormWrapper{
  position: sticky;
  top: 0;
  width: 100%;
  height: 800px;
  z-index: 20;
  padding: 104px 125px 104px 125px;
  box-sizing: border-box;
  background-color: black;
}
.FormContent{
  border: 1px solid red;
  display: flex;
  align-items: center;
  width: 1300px;
  height: 675px;
  border-radius: 10px;
  background: #FFFFFF;
  margin: 0 auto 0 auto;
  padding: 20px 60px 20px 60px;
  box-sizing: border-box;
  flex-direction: column;
}
form{
  width: 100%;
  font-size: 20px;
}
input, textarea{
  color: black;
  font-size: 20px;
}
.FormTitleAndBackWrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
}
.FormBack{
  border: 2px solid black;
  background-color: #FF7F7F;
  color: #FFFFFF;
  font-weight: 700;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0px 10px 40px 0px rgba(255, 128, 128, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.FormNameAndPhoneWrapper{
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
}
.FormNameTitle{
  margin-right: 15px;
  width: 150px;
  max-width: 390px;
}
.FormNameInput{
  margin-right: 45px;
  width: 360px;
  height: 47px;
  border-radius: 5px;
  border: 1px solid #000;
  background: rgba(226, 226, 226, 0.13);
  padding: 2px 10px;
  box-sizing: border-box;
}
.FormPhoneTitle{
  margin-right: 15px;
  width: 290px;
}
.FormPhoneInput{
  width: 360px;
  height: 47px;
  border-radius: 5px;
  border: 1px solid #000;
  background: rgba(226, 226, 226, 0.13);
  padding: 2px 10px;
  box-sizing: border-box;
}
.FormMessageWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.FormMessageInput{
  width: 100%;
  height: 200px;
  padding: 2px 10px;
  box-sizing: border-box;
  resize: none;
}
.FormCharsNotifier{
  opacity: 0.5;
  margin-top: -2.5%;
}
.FormSend{
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  background: rgba(0, 157, 255, 0.70);
  box-shadow: 0px 50px 40px 0px rgba(236, 236, 236, 0.25) inset, 4px 0px 10px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
  color: #FFF;
  font-size: 30px;
  font-family: Montserrat,serif;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}
.FormSend:hover{
  transition: 0.4s;
  color: #5cfd8e;
}
</style>
