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
    ...mapGetters(['systems', 'availableSystems']),
    filteredSystems() {
      const filteredSystems = this.availableSystems.map(system => {
        return this.mapSystemName(system);
      });
      return new Set(filteredSystems.sort());
    }
  },
  methods: {
    ...mapMutations(['toggleSystem']),
    systemIsSelected(system) {
      return this.systems.includes(system);
    },
    mapSystemName(system) {
      switch (system) {
        case '360':
        case 'X360':
        case 'Xbox 360':
          return 'Xbox 360';
        case '3DS':
        case '3DSVC':
          return 'Nintendo 3DS';
        case 'Amazon Fire':
        case 'Amazon Fire TV':
        case 'Fire':
        case 'FireOS':
          return 'Fire TV';
        case 'Android':
        case 'Mac':
        case 'MacOS':
          return 'Mac OS';
        case 'DC':
          return 'Sega Dreamcast';
        case 'Lin':
        case 'Linux':
          return 'Linux';
        case 'iOS':
          return 'iOS';
        case 'Apple Watch':
          return 'Apple Watch';
        case 'DSiWare':
        case 'NDS':
          return 'Nintendo DS';
        case 'NS':
        case 'Nintendo Switch':
          return 'Nintendo Switch';
        case 'PS2':
          return 'Playstation 2';
        case 'PS3':
          return 'Playstation 3';
        case 'PS4':
          return 'Playstation 4';
        case 'PSVR':
        case 'PlayStation VR':
          return 'PlayStation VR';
        case 'PSVita':
          return 'Playstation Vita';
        case 'XBO':
          return 'Xbox One';
        case 'Oculus Rift':
        case 'Rift':
        case 'HTC Vive':
          return 'VR';
        case 'PSP':
          return 'Playstation Portable';
        case 'PSN':
          return 'Playstation Network';
        case 'SNES':
          return 'Super Nintendo';
        case 'Steam':
          return 'PC';
        case 'Wii U':
        case 'WiiU':
        case 'WiiUVC':
          return 'Nintendo WiiU';
        case 'Wii':
        case 'WiiWare':
          return 'Wii';
        case 'Win':
        case 'Win 10':
          return 'Windows 10';
        case 'XBLA':
          return 'Xbox Live Arcade';
        default:
          return system;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  span {
    background-color: rgba(blue, 0.5);
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(#000, 0.3);
    }

    &.selected {
      background-color: rgba(blue, 1);
      border: 1px solid transparent;
    }
  }
}
</style>
