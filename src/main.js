import Vue from 'vue'
import App from './App.vue'
import router from './router';
import YmapPlugin from 'vue-yandex-maps'
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false
Vue.prototype.$url = "http://localhost:8080/";

const settings = {
  apiKey: '99b31407-13bf-4821-9612-d7f14b3388e1',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
