<template>
	<div class="home">
		<Header />
		<Top />
		<Following />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import Top from '../components/Top.vue'
	import Market from '../components/Market.vue'
	import Following from '../components/Following.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			Top,
			Market,
			Following
		}
	}
</script>