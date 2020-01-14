import Vue from 'vue';

const state = {
  years: [],
  months: [],
  systems: []
};

const getters = {
  selectedYears: state => state.years,
  months: state => state.months,
  selectedSystems: state => state.systems
};

const actions = {
  initializeFilters({commit}) {
    const year = new Date().getUTCFullYear();
    commit('toggleYear', year - 1);
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
