<template>
  <div id="app">
    <h1>Video Games By Year</h1>
    <GameList />
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
body {
  background-color: #1a1a1a;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: bold;
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
