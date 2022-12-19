import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import router from "./router/router";

import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(VueRouter).use(Vuex);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
