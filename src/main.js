import Vue from 'vue'
import App from './App.vue'
import router from './router'
import InputLine from './components/InputLine.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.component('InputLine', InputLine);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
