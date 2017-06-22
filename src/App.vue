<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  @import './assets/style/index.css';
  @import '~vue-material/dist/vue-material.css';


  #app {
    height: 100vh;
    overflow: hidden;
    max-width: 800px;
    width: 100vw;
    margin: 0 auto;
  }
</style>
