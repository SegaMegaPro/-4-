<template>
  <div>
    <h2>Данные формы:</h2>
    <p>Имя: {{ formState.name }} </p>
    <p>Номер телефона: {{ formState.phone }}</p>
    <p>Сообщение: {{ formState.message }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FormData',
  computed: {
    ...mapState(['formState'])
  }
}
</script>

<style scoped>
div{
  height: 200px;
  margin: 0;
  padding: 0;
}
</style>
