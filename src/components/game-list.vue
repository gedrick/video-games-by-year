<template>
  <div class="game-list">
    <year-filters />
    <!-- <month-filter v-bind="monthFilter" /> -->
    <system-filters />
    <div class="search-results">
      <game-pill
        v-for="game in searchResults"
        :key="`${game.year}-${game.month}-${game.day}-${game.title}`"
        :game="game"
      />
    </div>
  </div>
</template>

<script>
import YearFilters from './year-filters.vue';
import SystemFilters from './system-filters.vue';
import GamePill from './game-pill.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    YearFilters,
    SystemFilters,
    GamePill
  },
  mounted() {
    this.$store.dispatch('initializeFilters');
    this.$store.dispatch('fetchGames');
  },
  computed: {
    ...mapGetters(['searchResults'])
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

  input {
    position: absolute;
    left: -9999px;
  }

  .pill {
    margin: em(12) em(5) em(12) em(5);
  }

  span {
    cursor: pointer;
    padding: em(5);
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
  }
}

.search-results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
