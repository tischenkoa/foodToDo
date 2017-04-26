<template>
<div class="">
  <md-toolbar>
    <h2 class="md-title"><md-icon>edit</md-icon></h2>

    <md-input-container style="flex: 1">
      <label>Add to list</label>
      <md-input v-model="itemNew.name" />
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
    {{list}}
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
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRkJNYviFmRRBHSpHX5Q7ffqk8xes4yNg',
  authDomain: 'tiar-food.firebaseapp.com',
  databaseURL: 'https://tiar-food.firebaseio.com',
  projectId: 'tiar-food',
  storageBucket: 'tiar-food.appspot.com',
  messagingSenderId: '392737220794',
};

const app = Firebase.initializeApp(config);
const db = app.database();

export default {
  name: 'list',
  props: ['list'],
  firebase() {
    return {
      listDB: db.ref('/lists/food'),
    };
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
      this.listDB.push({
        name: this.itemNew.name,
      });
      this.itemNew.name = '';
    },
    remove() {},
    bay() {},
  },
};
</script>

<style scoped>

</style>
