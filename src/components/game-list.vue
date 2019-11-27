<template>
  <div class="game-list">
    <year-filters />
    <!-- <month-filter v-bind="monthFilter" /> -->
    <system-filters />
    <div class="search-results">
      <game-pill
        v-for="game in searchResults"
        :game="game"
        :key="game.title"
      />
    </div>
  </div>
</template>

<script>
import YearFilters from "./year-filters.vue";
import SystemFilters from "./system-filters.vue";
import GamePill from "./game-pill.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    YearFilters,
    SystemFilters,
    GamePill
  },
  mounted() {
    this.$store.dispatch('initialize');
    this.$store.dispatch('fetchGames');
  },
  computed: {
    ...mapGetters(['games', 'selectedYears', 'selectedSystems']),
    searchResults() {
      const gamesInSelectedYears = this.games;
      const searchResults = [];

      this.selectedYears.forEach(year => {
        this.games[year].filter(game => {
          this.selectedSystems.forEach(system => {
            if (game.systems.includes(system)) {
              searchResults.push(game);
            }
          })
        });
      })

      return searchResults;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .pill {
    margin: em(18) 0;
  }

  input {
    position: absolute;
    left: -9999px;
  }

  span {
    cursor: pointer;
    padding: em(5);
    margin: em(5);
    color: #fff;
    font-weight: bold;
    border-radius: em(6);
    background-color: rgba(red, 0.5);
    transition-property: background-color, border;
    transition-duration: 0.5s;
    border: em(1) solid transparent;

    &:hover {
      border: em(1) solid rgba(#000, 0.3);
    }

    &.selected {
      background-color: rgba(red, 1);
      border: em(1) solid transparent;
    }

    font-size: em(48);
  }

  @media screen and (min-device-width: 600px) {
    span {
      font-size: em(24);
    }

    .pill {
      margin: em(12) 0;
    }
  }

  @media screen and (min-device-width: 1024px) {
    span {
      font-size: em(16);
    }
  }
}

.search-results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
