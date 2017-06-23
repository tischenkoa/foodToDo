<template>
  <div id="app">
    <router-view></router-view>
    <transition name="fade">
      <div class="preloader-app" v-show="showPreloader">
        <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>
      </div>
    </transition>
    <md-snackbar ref="snackbar" md-duration="5000" md-position="top right">
      <span>{{notificationMessage}}</span>
      <md-button class="md-accent" @click="$refs.snackbar.close()">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showPreloader: true,
        notificationMessage: '',
      };
    },
    mounted() {
      this.$root.$on('preloader', (type) => {
        this.showPreloader = type;
      });
      this.$root.$on('notification', (text) => {
        this.notificationMessage = text;
        this.$refs.snackbar.open();
      });
    },
  };
</script>

<style>
  @import './assets/style/index.css';

  #app {
    height: 100vh;
    overflow: hidden;
    max-width: 800px;
    min-width: 320px;
    width: 100vw;
    margin: 0 auto;
  }

  .preloader-app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
