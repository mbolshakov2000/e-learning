<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-icon style="float: right; margin:3px;" large @click.stop="drawer = !drawer">
        mdi-window-close
      </v-icon>
      <p style="margin: 5px; font-size: 20px;"> Навигация: </p>
      <v-list>
          <v-list-item :to="{ name: 'Home'}">
            <v-list-item-action>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'Section1'}">
            <v-list-item-action>
              <v-icon>mdi-numeric-1</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Раздел 1.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'Section2'}">
            <v-list-item-action>
              <v-icon>mdi-numeric-2</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Раздел 2.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'Section3'}">
            <v-list-item-action>
              <v-icon>mdi-numeric-3</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Раздел 3.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'FinalTest'}">
            <v-list-item-action>
              <v-icon>mdi-checkbox-marked-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Итоговое тестирование.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'FinalTask'}">
            <v-list-item-action>
              <v-icon>mdi-checkbox-marked-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Итоговое задание.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer app>
      <div>2023 Большаков Михаил Олегович
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      drawer: false,
      group: null,
    }),

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display:flex;
  align-items: center; 
  justify-content: center; 
  flex-flow: column wrap;
  border: 3px;
}
.nav-link{
  margin:3px;
  /* width: 150px;
  border: solid; */
}
</style>
