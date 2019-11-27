<template>
  <div class="game-pill">
    {{ game.title }}
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      default: null
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
