<script src="./auth.js"></script>
<style src="./auth.css"></style>

<template>
  <div class="auth-container">
    <div class="wrapper">
      <md-layout md-align="center">
        <img src="~assets/img/logo.png" alt="" class="logo">
      </md-layout>
      <div class="auth-page-header">
        <h3 class="md-display-1 green">Authorization</h3>
      </div>
      <md-layout md-align="center">
        <md-button class="md-raised md-google"><md-icon></md-icon>Sign in with Google</md-button>
      </md-layout>
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Email</label>
          <md-input v-model="condition.email"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Password</label>
          <md-input type="password" v-model="condition.password"></md-input>
        </md-input-container>
        <md-layout md-align="center">
          <md-button class="md-raised" @click.native="$router.push('registration')">Registration</md-button>
          <md-button class="md-raised md-primary" @click.native="signIn">Sign In</md-button>
        </md-layout>
      </form>
    </div>
  </div>
</template>
