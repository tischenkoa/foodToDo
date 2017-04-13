<template>
<div id="app">
  <router-view> </router-view>
  <md-bottom-bar>
    <md-bottom-bar-item md-icon="shopping_basket" md-active @click.native="$router.push('/food')">Food</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="assignment" to="/other" @click.native="$router.push('/other')">Other</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="done_all" to="/to-do" @click.native="$router.push('/food')">To Do</md-bottom-bar-item>
  </md-bottom-bar>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  height: 100vh;
}

.md-bottom-bar {
  position: absolute;
  bottom: 0px;
}
</style>
