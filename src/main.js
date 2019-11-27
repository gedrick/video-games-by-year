import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  store
});
