import gameData from '../data/gamedata.js';
import { mapSystem } from '../helpers';
import moment from 'moment'

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
  availableSystems: (state, getters) => {
    let systems = [];
    getters.selectedYears.forEach(year => {
      state.games[year].forEach(game => {
        game.systems.forEach(system => {
          if (!systems.includes(system)) {
            systems.push(system);
          }
        })
      })
    });

    return systems;
  },
  searchResults: (state, getters) => {
    const searchResults = [];
    getters.selectedYears.forEach(year => {
      state.games[year].filter(game => {
        getters.selectedSystems.forEach(system => {
          if (game.systems.includes(system) && !searchResults.includes(game)) {
            searchResults.push(game);
          }
        });
      });
    });

    const orderedSearchResults = searchResults.sort((a, b) => {
      const oldDate = moment(`${a.month || 1}/${a.day || 1}/${a.year}`);
      const newDate = moment(`${b.month || 1}/${b.day || 1}/${b.year}`);
      if (oldDate.isAfter(newDate)) {
        return 1;
      } else if (oldDate.isBefore(newDate)) {
        return -1;
      }
      return 0;
    });

    return orderedSearchResults;
  }
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
      const games = gameData;
      const systems = [];
      for (let year in games) {
        games[year].forEach(game => {
          game.systems = game.systems.map(system => {
            let mapping = mapSystem(system);
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
