<template>
  <div class="year-filter" v-if="availableYears">
    <div
      v-for="year in availableYears"
      :key="year"
      class="year"
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
    ...mapGetters(['years', 'availableYears'])
  },
  methods: {
    ...mapMutations(['toggleYear']),
    yearIsSelected(year) {
      return this.years.includes(year);
    }
  }
};
</script>

<style lang="scss" scoped>
.year-filter {
  display: flex;
  flex-direction: row;

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
    &.selected {
      background-color: rgba(red, 1);
    }
  }
}
</style>
