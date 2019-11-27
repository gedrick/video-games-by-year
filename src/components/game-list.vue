<template>
  <div class="game-list">
    <year-filters />
    <!-- <month-filter v-bind="monthFilter" /> -->
    <!-- <genre-filter v-bind="genreFilter" /> -->
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
import GamePill from "./game-pill.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    YearFilters,
    GamePill
  },
  mounted() {
    this.$store.dispatch('initialize');
    this.$store.dispatch('fetchGames');
  },
  computed: {
    ...mapGetters('games', ['games']),
    filteredGames() {
      return [];
    }
  }
};
</script>
