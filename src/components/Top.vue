<template>
	<div id="topMarketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Top {{ topQTY }}</h3>
        <div class="accordion" id="topMarketValue">
			<div v-for="(data, index) in topData" class="card" :key="index">
				<div class="card-header d-flex justify-content-between align-items-center">
					<a :href="'#collapse-market' + data.market_symbol"><button class="left-side-els" type="button" data-toggle="collapse" :data-target="'#collapse-market' + data.market_symbol" aria-expanded="false" :aria-controls="'collapse-market' + data.market_symbol">
						<!-- <img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)"> -->
						<span>{{ data.market_symbol }}</span>
						<span>{{ data.market_name }}</span>
					</button></a>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
	import axios from 'axios';
	export default {
		name: 'Top',
		data() {
			return {
				topData: [],
				topQTY: process.env.TOPQTY
			}
		},
		methods:{
			getTopData(){
				axios.get(process.env.APIURL + 'markets?quantity=' + process.env.TOPQTY)
				.then(top => {
					this.topData = top.data;
				})
				.catch(err => console.log(err));
			}
		},
		beforeMount(){
			this.getTopData();
		}
	}
</script>