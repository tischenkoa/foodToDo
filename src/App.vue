<template>
<div id="app">
	<div class="main-container">
		<router-view></router-view>
	</div>
	<md-bottom-bar>
		<md-bottom-bar-item md-icon="shopping_basket"
      @click.native="$router.push('/food')"
      v-bind:class="{'md-active' : $route.path==='/food'}">
			Food
		</md-bottom-bar-item>
		<md-bottom-bar-item md-icon="assignment"
      @click.native="$router.push('/other')"
      v-bind:class="{'md-active' : $route.path==='/other'}">
      Other
    </md-bottom-bar-item>
		<md-bottom-bar-item md-icon="done_all"
      @click.native="$router.push('/todo')"
      v-bind:class="{'md-active' : $route.path==='/todo'}">
      To Do
    </md-bottom-bar-item>
	</md-bottom-bar>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import './assets/style/index.css';
@import '~vue-material/dist/vue-material.css';

#app {
	height: 100vh;
	max-width: 800px;
	margin: 0 auto;
	& .main-container {
		height: calc(100vh - 56px);
	}
}
</style>
