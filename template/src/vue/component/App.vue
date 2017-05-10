<template>
<div id="app">
	<img src="../../assets/logo.svg" id="logo">
	<router-view></router-view>
</div>
</template>

<script>

import { sync } from 'vuex-router-sync'
import store from '../services/store'
import router from '../services/router'

sync(store, router)

export default {
	name: 'App',
	store,
	router
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	#logo {
		width: 200px;
	}
}
</style>
