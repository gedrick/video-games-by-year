import Vue from 'vue';

const state = {
  year: [],
  month: [],
  genre: []
};

const getters = {
  years: state => state.year,
  months: state => state.month,
  genres: state => state.genre
};

const actions = {
  initialize({commit}) {
    const year = new Date().getUTCFullYear() - 1;
    commit('toggleYear', year);
  }
};

const mutations = {
  toggleYear(state, year) {
    if (!state.year.includes(year)) {
      state.year.push(year);
    } else {
      state.year = state.year.filter(currentYear => currentYear !== year);
    }
  },
  // toggleMonth(state, month) {
  //   const months = state.month;
  //   if (!months.includes(month)) {
  //     months.push(month);
  //   } else {
  //     months = months.filter(currentMonth => currentMonth !== month);
  //   }
  //   Vue.set(state, month, months);
  // },
  // toggleGenre(state, genre) {
  //   const genres = state.genre;
  //   if (!genres.includes(genre)) {
  //     genres.push(genre);
  //   } else {
  //     genres = genres.filter(currentGenre => currentGenre !== genre);
  //   }
  //   Vue.set(state, genre, genres);
  // },
};

export default {
  state,
  getters,
  actions,
  mutations
};
