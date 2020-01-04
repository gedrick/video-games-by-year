<template>
  <div id="app">
    <h1>Video Games By Year</h1>
    <GameList />
    <a href="https://github.com/gedrick/video-games-by-year" target="_blank">github</a>
  </div>
</template>

<script>
import GameList from './components/game-list.vue';

export default {
  name: 'app',
  components: {
    GameList
  },
}
</script>

<style lang="scss">
@import 'styles/variables.scss';

html {
  font-size: 100%;
}

body {
  background-color: #1a1a1a;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: em(60);
}

h1 {
  font-weight: bold;
  color: #fff;
  font-size: em(24);
  margin: 0;
}

a:hover {
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 em(10);
}

a {
  color: #42b983;
}
</style>
