import Vue from 'vue';

const state = {
  years: [],
  months: [],
  systems: []
};

const getters = {
  years: state => state.years,
  months: state => state.months,
  systems: state => state.systems
};

const actions = {
  initialize({commit}) {
    const year = new Date().getUTCFullYear() - 1;
    commit('toggleYear', year);
  }
};

const mutations = {
  toggleYear(state, year) {
    if (!state.years.includes(year)) {
      state.years.push(year);
    } else {
      state.years = state.years.filter(currentYear => currentYear !== year);
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
  toggleSystem(state, system) {
    if (!state.systems.includes(system)) {
      state.systems.push(system);
    } else {
      state.systems = state.systems.filter(currentSystem => currentSystem !== system);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
