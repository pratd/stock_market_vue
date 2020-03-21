<template>
	<div class="img-searcher-container d-flex justify-content-center">
		<div class="d-flex justify-content-center align-items-end flex-column container">
			<div class="searcher-container">
				<h1 class="text-white">The World’s Leading Exchange Platform</h1>
				<h2 class="text-white">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes</h2>
				<div id="searcher">
					<div class="inputWithIcon">
						<input type="text" placeholder="Search for markets" @keyup.enter="submit" v-model="searchQuery">
						<i class="material-icons" aria-hidden="true">search</i>
						<!-- <input type="submit" value="search"> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
 	import EventBus from '../event-bus';
	export default{
		name: 'Header',
		data(){
			return{
				searchQuery:""
			}
		},
		methods:{
			submit: function(){
				EventBus.$emit('searchable', this.searchQuery);
			}
		}
	}
</script>