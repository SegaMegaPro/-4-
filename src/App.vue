<template>
  <router-view></router-view>
  <router-view name="extraHeader"></router-view>
  <router-view name="mainHeader"></router-view>
  <router-view name="theMain"></router-view>
  <router-view name="theSpares"></router-view>
  <router-view name="theContacts"></router-view>
</template>

<script lang="js">
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState(['headerState'])
  }
}
</script>

<style lang="css">
html{
  scroll-behavior: smooth;
}
body{
  margin: 0;
  padding: 0;
  font-family: "Montserrat Medium",serif;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
