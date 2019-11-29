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
@import '../styles/variables.scss';

.filter {
  width: 100%;

  span {
    background-color: rgba(#297D29, 0.2);
    border: em(1) solid transparent;

    &:hover {
      border: em(1) solid rgba(#000, 0.5);
    }

    &.selected {
      background-color: rgba(#297D29, 1);
      border: em(1) solid transparent;
    }

    font-size: em(20);

    @media screen and (min-width: 600px) {
      font-size: em(24);
    }

    @media screen and (min-width: 1024px) {
      font-size: em(30);
    }
  }
}
</style>
