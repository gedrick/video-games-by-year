<template>
  <div id="app">
    <h1>Video Games By Year</h1>
    <GameList />
    <div class="footer">
      <a href="https://nostalgiatrigger.com">gaming blog</a>&nbsp;-
      <a href="https://github.com/gedrick/video-games-by-year">github</a>
    </div>
  </div>
</template>

<script>
import GameList from './components/game-list.vue';

export default {
  name: 'App',
  components: {
    GameList
  }
};
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

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px 0;
  background-color: #1a1a1a;
  text-align: center;
  color: #ffffff;
}
</style>
