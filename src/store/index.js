import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import games from './games.js';
import filters from './filters.js';

const store = new Vuex.Store({
  modules: {
    games,
    filters
  }
});

export default store;
