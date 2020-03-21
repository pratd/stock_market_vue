<template>
	<div class="home">
		<Header />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import Market from '../components/Market.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			Market
		}
	}
</script>