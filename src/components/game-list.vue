<template>
  <div class="game-list">
    <year-filters />
    <!-- <month-filter v-bind="monthFilter" /> -->
    <system-filters />
    <div class="search-results">
      <game-pill
        v-for="(index, game) in filteredGames"
        :game="game"
        :key="index"
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
    this.$store.dispatch('fetchSystems');
  },
  computed: {
    ...mapGetters('games', ['games']),
    filteredGames() {
      return [];
    }
  }
};
</script>

<style lang="scss">
.filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

  .pill {
    margin: 8px 0;
  }

  input {
    position: absolute;
    left: -9999px;
  }

  span {
    cursor: pointer;
    padding: 5px;
    margin: 3px;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    background-color: rgba(red, 0.5);
    transition-property: background-color, border;
    transition-duration: 0.5s;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(#000, 0.3);
    }

    &.selected {
      background-color: rgba(red, 1);
      border: 1px solid transparent;
    }
  }
}
</style>
