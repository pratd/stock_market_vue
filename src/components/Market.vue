<template>
    <div id="marketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Market Values</h3>
        <div class="accordion" id="marketValue">
			<div v-for="(data, index) in allData.assets" class="card" :key="index">
				<div class="card-header" :id="'heading-market' + data.id">
					<button class="btn-market btn btn-link d-flex justify-content-between w-100" type="button" data-toggle="collapse" :data-target="'#collapse-market' + data.id" aria-expanded="false" :aria-controls="'collapse-market' + data.id">
						<div class="left-side-els">
							<img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)">
							<span>{{ data.symbol }}</span>
							<span>{{ data.name }}</span>
						</div>
						<div class="right-side-els">
							<span>{{ data.last_price }} $</span>
							<span v-if="following.some(market => market.id == data.id) || setToFollow.some(market => market.id == data.id)"><i class="material-icons pt-1">bookmark</i></span>
							<span v-else><i class="material-icons pt-1">bookmark_border</i></span>
						</div>
					</button>
				</div>
				<div :id="'collapse-market' + data.id" class="collapse" :aria-labelledby="'heading' + data.id" data-parent="#marketValue">
					<div class="card-body d-flex flex-column align-items-end">
						{{data.desc}}
						<div>
							<button class="bookmark-button" v-if="following.some(market => market.id == data.id) || setToFollow.some(market => market.id == data.id)" v-on:click="removeFromBookMarks(data.id)">Remove from Bookmark</button>
							<button class="bookmark-button" v-else v-on:click="addToBookmarks({id: data.id, name: data.name, symbol: data.symbol})">Add to Bookmark</button>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
<<<<<<< HEAD
import axios from 'axios';
  export default {
    name: 'Market',
    data() {
      return {
      allData: [],
      allDataPrices: [],
      allDataAssets: [],
      }
    },
    props:{
        exportData:{
            type: Object
        }
    },
    // async created(){
    //   try {
    //     const res = await axios.get('https://fake-stock-eye.herokuapp.com/');
    //     this.info = res.data;
    //     console.log(this.info)
    //     //(param == 'prices') ? this.prices=res.data : this.assets=res.data;
    //   } catch(e){
    //     console.error(e)
    //   }
    // },
    created(){
      axios.get(`https://fake-stock-eye.herokuapp.com/`)
        .then(all => {
            this.allData = all.data;
            this.allDataPrices = all.data.prices;
            this.allDataAssets = all.data.assets;
            
        })
        .catch(err => console.log(err));
    },
  }
=======
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
		methods:{
			getAllData(){
				axios.get(`https://fake-stock-eye.herokuapp.com/`)
				.then(all => {
					this.allData = all.data;
				})
				.catch(err => console.log(err));
			},
			addToBookmarks: function (element){
				this.setToFollow.push(element);

				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))

				EventBus.$emit('addBookmark', element);
			},
			removeFromBookMarks: function(element){
				if(this.following.some(market => market.id == element)){
					// const index = this.following.indexOf(element);
					// this.following.splice(index, 1);
					var removeIndex = this.following.map(item => item.id).indexOf(element);
					this.following.splice(removeIndex, 1);
				}
				if(this.setToFollow.some(market => market.id == element)){
					// const index = this.setToFollow.indexOf(element);
					// this.setToFollow.splice(index, 1);
					var removeIndex = this.setToFollow.map(item => item.id).indexOf(element);
					this.setToFollow.splice(removeIndex, 1);
				}
				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))

				EventBus.$emit('removeBookmark', element);
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

			EventBus.$on('removeBookmarkFromFollowing', data =>{
				this.removeFromBookMarks(data);
			});


		}
	}
>>>>>>> 84f487940f6bca0ae6facd4626b14e14e57fe373
</script>