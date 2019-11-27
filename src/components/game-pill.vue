<template>
  <div class="game-pill">
    <div class="container">
      <div class="date">{{ game.year }}</div>
      <div class="title">{{ game.title }}</div>
    </div>
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
@import '../styles/variables.scss';

.game-pill {
  color: #fff;
  font-weight: bold;
  padding: em(5);
  margin: 0 em(5) em(5) 0;
  background-color: #9A6DC3;
  border-radius: em(6);
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 100%;

  @media screen and (min-device-width: 600px) {
    flex: calc(50% - #{em(15)});
  }

  @media screen and (min-device-width: 1024px) {
    flex: calc(33% - #{em(15)});
  }
  @media screen and (min-device-width: 1280px) {
    flex: calc(25% - #{em(15)});
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .date {
    align-self: center;
    font-size: em(32);
    padding-right: em(20);
  }

  .title {
    font-size: em(32);
  }
}
</style>
