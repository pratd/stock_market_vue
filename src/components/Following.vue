<template>
    <div v-if="Object.keys(following).length !== 0" id="followingValues" class="following-values container py-5">
        <h3 class="mb-3 table-title">Following Values</h3>
        <div class="accordion" id="followingValue">
			<div v-for="(data, index) in following" class="card" :key="index">
				<div class="card-header d-flex justify-content-between align-items-center">
					<a :href="'#collapse-market' + data.symbol"><button class="left-side-els" type="button" data-toggle="collapse" :data-target="'#collapse-market' + data.symbol" aria-expanded="false" :aria-controls="'collapse-market' + data.symbol">
						<!-- <img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)"> -->
						<span>{{ data.symbol }}</span>
						<span>{{ data.name }}</span>
					</button></a>
					<button class="bookmark-button" v-on:click="removeFromBookmarks(data.symbol)">Remove</button>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
	import EventBus from '../event-bus';
	export default {
		name: 'Following',
		data() {
			return {
				following: [],
			}
		},
		mounted(){
			if (localStorage.getItem('following') === null) {
				localStorage.setItem('following', '');
			}else{
				const following = JSON.parse(localStorage.getItem('following'));
				this.following = following;
			}

			EventBus.$on('addBookmark', elementToAdd =>{
				this.following.push(elementToAdd);
			})

			EventBus.$on('removeBookmark', elementToRemove =>{
				// const index = this.following.indexOf(elementToRemove);
				// this.following.splice(index, 1);
				var removeIndex = this.following.map(item => item.symbol).indexOf(elementToRemove);
				this.following.splice(removeIndex, 1);
			})
		},
		methods:{
			removeFromBookmarks: function(marketId){
				EventBus.$emit('removeBookmarkFromFollowing', marketId);
			}
		}
	}
</script>