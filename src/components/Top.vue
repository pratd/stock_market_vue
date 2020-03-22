<template>
    <div id="marketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Market Values</h3>
        <div class="accordion" id="marketValue">
			<div v-for="(data, index) in allData.assets" class="card" :key="index">
				<div class="card-header" :id="'headingOne' + index">
					<button class="btn-market btn btn-link d-flex justify-content-between w-100" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
						<div class="left-side-els">
							<img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)">
							<span>{{ data.symbol }}</span>
							<span>{{ data.name }}</span>
						</div>
						<div class="right-side-els">
							<span>{{ data.last_price }} $</span>
						</div>
					</button>
				</div>
				<div :id="'collapse' + index" class="collapse" :aria-labelledby="'heading' + index" data-parent="#marketValue">
					<div class="card-body">
						{{data.desc}}
					</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
	import axios from 'axios';
	import EventBus from '../event-bus';
	export default {
		name: 'Market',
		data() {
			return {
				allData: [],
			}
		},
		methods:{
			getAllData(){
				axios.get(`https://fake-stock-eye.herokuapp.com/`)
				.then(all => {
					this.allData = all.data;
				})
				.catch(err => console.log(err));
			}
		},
		beforeMount(){
			this.getAllData();
		},
		mounted(){
			EventBus.$on('searchable', data =>{
				console.log('Hello from the Market component, the search term is:' + data);
			});

			if (localStorage.getItem('following') === null) {
				localStorage.setItem('following', '');
			}
			this.following = JSON.parse(localStorage.getItem('following'))
		}
	}
</script>