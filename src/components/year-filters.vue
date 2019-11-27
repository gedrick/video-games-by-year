<template>
  <div class="filter" v-if="availableYears">
    <div
      v-for="year in availableYears"
      :key="year"
      class="pill year"
    >
      <input type="checkbox" :checked="yearIsSelected(year)" />
      <span @click="toggleYear(year)" :class="{selected: yearIsSelected(year)}">{{ year }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['selectedYears', 'availableYears'])
  },
  methods: {
    ...mapMutations(['toggleYear']),
    yearIsSelected(year) {
      return this.selectedYears.includes(year);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;

  span {
    background-color: rgba(#297D29, 0.5);
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(#000, 0.3);
    }

    &.selected {
      background-color: rgba(#297D29, 1);
      border: 1px solid transparent;
    }
  }
}
</style>
