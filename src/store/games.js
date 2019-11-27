import { default as games2012 } from "../data/2012.js";
import { default as games2013 } from "../data/2013.js";
import { default as games2014 } from "../data/2014.js";
import { default as games2015 } from "../data/2015.js";
import { default as games2016 } from "../data/2016.js";
import { default as games2017 } from "../data/2017.js";
import { default as games2018 } from "../data/2018.js";

import { mapSystem } from '../helpers';

const state = {
  games: {},
  systems: [],
  filteredGames: []
};

const getters = {
  games: state => state.games,
  availableYears: state => {
    return Object.keys(state.games).map(year => Number(year));
  },
  availableSystems: state => state.systems
};

const mutations = {
  addGames(state, games) {
    state.games = games;
  },
  addSystems(state, systems) {
    state.systems = systems;
  }
};

const actions = {
  fetchGames({ commit }) {
    return new Promise(resolve => {
      const games = {
        2012: games2012,
        2013: games2013,
        2014: games2014,
        2015: games2015,
        2016: games2016,
        2017: games2017,
        2018: games2018
      }
      const systems = [];
      for (let year in games) {
        games[year].forEach(game => {
          game.systems = game.systems.map(system => {
            let mapping = mapSystem(system);
            // let newSystems = [];
            if (system && !systems.includes(mapping)) {
              systems.push(mapping);
            }

            return mapping;
          })
        })
      }
      commit('addGames', games);
      commit('addSystems', systems);
      resolve();
    });
  },
  // fetchSystems({ commit, state }) {
  //   return new Promise(resolve => {
  //     let systems = [];
  //     for (let year in state.games) {
  //       state.games[year].forEach(game => {
  //         game.systems.forEach(system => {
  //           if (!systems.includes(system) && system) {
  //             systems.push(system);
  //           }
  //         })
  //       })
  //     }
  //     commit('addSystems', systems);
  //     resolve();
  //   });
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
