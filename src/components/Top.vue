<template>
	<div id="topMarketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Top 3</h3>
        <div class="accordion" id="topMarketValue">
			<div v-for="(data, index) in topData" class="card" :key="index">
				<div class="card-header" :id="'heading-market' + data.id">
					<button class="btn-market btn btn-link d-flex justify-content-between w-100" type="button" data-toggle="collapse" :data-target="'#collapse-market' + data.id" aria-expanded="false" :aria-controls="'collapse-market' + data.id">
						<div class="left-side-els">
							<img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)">
							<span>{{ data.symbol }}</span>
							<span>{{ data.name }}</span>
						</div>
					</button>
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
				topData: []
			}
		},
		methods:{
			getTopData(){
				axios.get(process.env.APIURL + 'marketDetails?_sort=price&_order=desc')
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