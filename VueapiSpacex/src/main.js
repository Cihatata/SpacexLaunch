import Vue from 'vue'
import VueRouter from "vue-router";
import Vuex from 'vuex'

import routeOptions from './router/route';

import App from './App.vue'
import routerOptions from "./router/route"
import storeOptions from './stores/store';

Vue.use(VueRouter);
Vue.use(Vuex);

const { state, getters, mutations, actions } = storeOptions;
const router = new VueRouter(routerOptions);
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
