<template>
  <div class="main">
    <div class="header-container">
      <md-layout md-align="center">
        <img src="~assets/img/logo.png" alt="" class="logo">
      </md-layout>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <md-bottom-bar>
      <md-bottom-bar-item md-icon="shopping_basket"
                          @click.native="$router.push('food')"
                          v-bind:class="{'md-active' : $route.params['list'] === 'food'}">
        Food
      </md-bottom-bar-item>
      <md-bottom-bar-item md-icon="assignment"
                          @click.native="$router.push('other')"
                          v-bind:class="{'md-active' : $route.params['list'] === 'other'}">
        Other
      </md-bottom-bar-item>
      <md-bottom-bar-item md-icon="done_all"
                          @click.native="$router.push('todo')"
                          v-bind:class="{'md-active' : $route.params['list'] === 'todo'}">
        To Do
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
  export default {
    name: 'main',
  };
</script>

<style>
  :root {
    --headerHeight: 80px;
    --bottomBarHeight: 56px;
  }

  .main {

  &
  .header-container {
    height: var(--headerHeight);
    margin-bottom: 5px;

  &
  img.logo {
    height: var(--headerHeight);
  }

  }
  &
  .main-container {
    height: calc(100vh - var(--bottomBarHeight) - var(--headerHeight));
    width: 100%;
    overflow: hidden;
  }

  }
</style>
