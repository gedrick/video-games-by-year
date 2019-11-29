<template>
  <div class="filter" v-if="availableSystems">
    <div
      v-for="system in filteredSystems"
      :key="system"
      class="pill system"
    >
      <input type="checkbox" :checked="systemIsSelected(system)" />
      <span @click="toggleSystem(system)" :class="{selected: systemIsSelected(system)}">{{ system }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['selectedSystems', 'availableSystems']),
    filteredSystems() {
      return new Set(this.availableSystems.sort());
    }
  },
  methods: {
    ...mapMutations(['toggleSystem']),
    systemIsSelected(system) {
      return this.selectedSystems.includes(system);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.filter {
  width: 100%;

  span {
    background-color: rgba(#E5B672, 0.2);
    border: em(1) solid transparent;

    &:hover {
      border: em(1) solid rgba(#000, 0.5);
    }

    &.selected {
      background-color: rgba(#E5B672, 1);
      border: em(1) solid transparent;
    }

    font-size: em(20);

    @media screen and (min-width: 600px) {
      font-size: em(20);
    }

    @media screen and (min-width: 1024px) {
      font-size: em(24);
    }
  }
}
</style>
