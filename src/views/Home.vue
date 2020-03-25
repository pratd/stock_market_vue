<template>
	<div class="home">
		<Header />
		<SearchResults />
		<!-- <chartj-s /> -->
		<Top />
		<Following />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import SearchResults from '../components/SearchResults.vue'
	// import ChartjS from '../components/Chart.vue'
	import Top from '../components/Top.vue'
	import Market from '../components/Market.vue'
	import Following from '../components/Following.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			SearchResults,
			// ChartjS,
			Top,
			Market,
			Following
		}
	}
</script>