<template>
  <div id="app">
    <SectionList style="text-align: center;" />
  </div>
</template>

<script>
import SectionList from '../components/SectionList.vue'
// App -> Home
export default {
  name: 'HomeView',
  components: {
    SectionList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
