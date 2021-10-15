import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from 'vuelidate';

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API 

axios.defaults.baseURL = 'https://open-know-api.herokuapp.com/api';

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
