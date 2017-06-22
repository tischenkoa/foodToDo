<script src="./back.js" charset="utf-8"></script>
<style scoped src="./back.css"></style>

<template>
    <md-button class="md-icon-button md-raised button-back" @click.native="$router.go(-1)">
      <md-icon>arrow_back</md-icon>
    </md-button>
</template>
