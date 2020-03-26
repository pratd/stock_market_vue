<template>
	<div class="home">
		<Header />
		<SearchResults />
		<Top />
		<Following />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import SearchResults from '../components/SearchResults.vue'
	import Top from '../components/Top.vue'
	import Market from '../components/Market.vue'
	import Following from '../components/Following.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			SearchResults,
			Top,
			Market,
			Following
		}
	}
</script>