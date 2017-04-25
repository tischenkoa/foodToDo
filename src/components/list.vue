<template>
<div class="">
	<h1 class="md-title">{{list}}</h1>
  <md-toolbar>
    <h2 class="md-title"><md-icon>edit</md-icon></h2>

    <md-input-container style="flex: 1">
      <label>Add to list</label>
      <md-input/>
    </md-input-container>

    <md-button class="md-icon-button">
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
			<md-table-row v-for="(row, index) in 5" :key="index">
				<md-table-cell>Dessert Name</md-table-cell>
				<md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
			</md-table-row>
		</md-table-body>
	</md-table>
</div>
</template>

<script>
export default {
  name: 'list',
  props: ['list'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>

</style>
