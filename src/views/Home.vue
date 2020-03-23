<template>
	<div class="home">
		<Header />
		<chartj-s />
		<Top />
		<Following />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import ChartjS from '../components/ChartData.vue'
	import Top from '../components/Top.vue'
	import Market from '../components/Market.vue'
	import Following from '../components/Following.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			ChartjS,
			Top,
			Market,
			Following
		}
	}
</script>