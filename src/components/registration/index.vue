<script src="./registration.js"></script>
<style src="./registration.css"></style>

<template>
  <div class="registration-container">
    <back></back>
    <div class="wrapper">
      <md-layout md-align="center">
        <img src="~assets/img/logo.png" alt="" class="logo">
      </md-layout>
      <div class="auth-page-header">
        <h3 class="md-display-1 green">Registration</h3>
      </div>
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Email</label>
          <md-input type="email"
                    v-model="condition.email"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Password</label>
          <md-input type="password"
                    v-model="condition.password"
                    @keyup.native.enter="signIn"></md-input>
        </md-input-container>
        <md-layout md-align="center">
          <md-button class="md-raised md-primary" @click.native="signUp">Registration</md-button>
        </md-layout>
      </form>
    </div>
  </div>
</template>
