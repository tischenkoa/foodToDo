<script src="./sideMenu.js"></script>
<style scoped src="./sideMenu.css"></style>

<template>
  <div class="phone-viewport side-menu">
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
      </md-toolbar>


      <md-list>
        <md-list-item>
          <md-icon>whatshot</md-icon>
          <span>News</span>
        </md-list-item>
      </md-list>





    </md-sidenav>
  </div>
</template>
