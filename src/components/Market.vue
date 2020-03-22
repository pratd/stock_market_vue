<template>
    <div class="market-values container py-5">
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
							<span>{{ data.last_price }}</span>
							<span v-if="following.includes(data.id) || setToFollow.includes(data.id)"><i class="material-icons pt-1">bookmark</i></span>
							<span v-else><i class="material-icons pt-1">bookmark_border</i></span>
						</div>
					</button>
				</div>
				<div :id="'collapse' + index" class="collapse" :aria-labelledby="'heading' + index" data-parent="#marketValue">
					<div class="card-body">
						<button v-if="following.includes(data.id) || setToFollow.includes(data.id)" v-on:click="removeFromBookMarks(data.id)">Remove from Bookmark</button>
						<button v-else v-on:click="addToBookmarks(data.id)">Add to Bookmark</button>
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
				setToFollow: [],
				following: [],
			}
		},
		mounted(){
			axios.get(`https://fake-stock-eye.herokuapp.com/`)
			.then(all => {
				this.allData = all.data;
			})
			.catch(err => console.log(err));


			EventBus.$on('searchable', function(data){
				console.log('Hello from the Market component, the search term is:' + data);
			})

			if (localStorage.getItem('following') === null) {
				localStorage.setItem('following', '');
			}
			this.following = JSON.parse(localStorage.getItem('following'))
		},
		methods:{
			addToBookmarks: function (element){
				this.setToFollow.push(element);
				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))
			},
			removeFromBookMarks: function(element){
				if(this.following.includes(element)){
					const index = this.following.indexOf(element);
					this.following.splice(index, 1);
				}
				if(this.setToFollow.includes(element)){
					const index = this.setToFollow.indexOf(element);
					this.setToFollow.splice(index, 1);
				}
				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))
			}
		}
	}
</script>