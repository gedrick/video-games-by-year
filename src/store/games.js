import { default as games2012 } from "../data/2012.js";
import { default as games2013 } from "../data/2013.js";
import { default as games2014 } from "../data/2014.js";
import { default as games2015 } from "../data/2015.js";
import { default as games2016 } from "../data/2016.js";
import { default as games2017 } from "../data/2017.js";
import { default as games2018 } from "../data/2018.js";

const state = {
  games: {},
  filteredGames: []
};

const getters = {
  games: state => state.games,
  availableYears: state => {
    return Object.keys(state.games).map(year => Number(year));
  },
  availableConsoles: state => {
    let consoles = [];
    for (let year in state.games) {
      state.games[year].forEach(game => {
        game.systems.forEach(system => {
          if (!consoles.includes(system)) {
            consoles.push(system);
          }
        })
      })
    }
    return consoles;
  }
};

const actions = {
  fetchGames({ commit }) {
    const games = {
      2012: games2012,
      2013: games2013,
      2014: games2014,
      2015: games2015,
      2016: games2016,
      2017: games2017,
      2018: games2018
    }
    commit('addGames', games);
  }
};

const mutations = {
  addGames(state, games) {
    state.games = games;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
