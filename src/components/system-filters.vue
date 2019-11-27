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
.filter {
  span {
    background-color: rgba(#E5B672, 0.5);
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(#000, 0.3);
    }

    &.selected {
      background-color: rgba(#E5B672, 1);
      border: 1px solid transparent;
    }
  }
}
</style>
