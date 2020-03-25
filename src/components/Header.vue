<template>
	<div>
		<div class="img-searcher-container d-flex justify-content-center">
			<div class="d-flex justify-content-center align-items-end flex-column container">
				<div class="searcher-container">
					<h1 class="text-white">The World’s Leading Exchange Platform</h1>
					<h2 class="text-white">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes</h2>
					<div id="searcher">
						<div class="inputWithIcon">
							<input type="text" placeholder="Search markets by name" @keyup.enter="submit" v-model="searchQuery">
							<i class="material-icons" aria-hidden="true">search</i>
							<!-- <input type="submit" value="search"> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="rolling-market-background">
			<div class="ticker-wrap d-flex">
				<div class="ticker">
					<div v-for="(data, index) in allDataAssets" :key="index" class="ticker__item"><span>{{data.symbol}}</span> | <span class="text-danger">{{data.last_price}} $</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	 import EventBus from '../event-bus';
	 import axios from 'axios';
	export default{
		name: 'Header',
		data(){
			return{
				searchQuery:"",
				allDataAssets: []
			}
		},
		created(){
			axios.get(`https://fake-stock-eye.herokuapp.com/`)
			.then(all => {
				this.allDataAssets = all.data.assets;
			})
			.catch(err => console.log(err));
		},
		methods:{
			submit: function(){
				EventBus.$emit('searchable', this.searchQuery);
			}
		}
	}
</script>