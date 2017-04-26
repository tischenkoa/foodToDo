<template>
<div class="">
  <md-toolbar>
    <h2 class="md-title"><md-icon>edit</md-icon></h2>

    <md-input-container style="flex: 1">
      <label>Add to list</label>
      <md-input v-model="itemNew.name" @keydown.enter.native="add"/>
    </md-input-container>

    <md-button class="md-icon-button" @click.native="add">
      <md-icon>add</md-icon>
    </md-button>
  </md-toolbar>
  <md-table>
    <md-table-header>
      <md-table-row>
        <md-table-head> Dessert (100g serving)</md-table-head>
        <md-table-head md-numeric>Calories (g)</md-table-head>
        <md-table-head md-numeric>Fat (g)</md-table-head>
        <md-table-head md-numeric>Carbs (g)</md-table-head>
        <md-table-head md-numeric>Protein (g)</md-table-head>
      </md-table-row>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(item, index) in listDB" :key="index">
        <md-table-cell>{{item.name}}</md-table-cell>
        <md-table-cell>{{item.quantity}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</div>
</template>

<script>
import Vue from 'vue';
import fbService from '../service/firebase';

const refDB = fbService.getDB().ref('lists/');

export default {
  name: 'list',
  props: ['list'],
  firebase() {
    return {
      listDB: refDB.child(this.list),
    };
  },
  watch: {
    list() {
      this.$bindAsArray('listDB', refDB.child(this.list));
    },
  },
  data() {
    return {
      itemNew: {
        name: '',
      },
    };
  },
  methods: {
    add() {
      console.log(this.list);
      this.$firebaseRefs.listDB.push(Vue.util.exten({}, this.itemNew));
      this.itemNew = {};
    },
    remove() {},
    bay() {},
  },
};
</script>

<style scoped>

</style>
