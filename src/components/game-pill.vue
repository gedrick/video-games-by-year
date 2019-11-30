<template>
  <div class="game-pill">
    <div class="container">
      <div class="date">
        <span class="daymonth">{{ month }}&nbsp;{{ game.day }}</span>
        <span class="year">{{ game.year }}</span>
      </div>
      <div class="title">
        <a v-if="game.url" target="_blank" :href="`https://en.wikipedia.org${game.url}`">
          {{ game.title }}
        </a>
        <div v-if="!game.url">{{ game.title }}</div>
        <span>{{ consoles }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: {
    game: {
      type: Object,
      default: null
    },
  },
  computed: {
    consoles() {
      const consoleSet = new Set(this.game.systems);
      return Array.from(consoleSet).join(', ');
    },
    month() {
      return moment().month(this.game.month - 1).format('MMM');
    }
  }
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
  grid-template-columns: 15% auto;
  flex: 100%;

  @media screen and (min-width: 600px) {
    flex: calc(50% - #{em(15)});
  }

  @media screen and (min-width: 1024px) {
    flex: calc(33% - #{em(15)});
  }

  @media screen and (min-width: 1280px) {
    flex: calc(25% - #{em(15)});
  }

  .container {
    padding: em(5);
    display: flex;
    grid-template-columns: 15% auto;
    flex-grow: 1;
  }

  .date {
    padding-right: em(15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .daymonth {
      font-size: em(12);
    }

    .year {
      font-size: em(14);
    }
  }

  .title {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    a {
      color: #fff;
      display: inline-block;
      line-height: em(18);
      padding-bottom: em(3);
    }

    span {
      font-size: em(10);
      display: inline-block;
      line-height: em(16);
    }

    font-size: em(16);
  }
}
</style>
