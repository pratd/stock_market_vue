<template v-if="following.lenght > 0 || setToFollow > 0">
    <div id="followingValues" class="following-values container py-5">
        <h3 class="mb-3 table-title">Following Values</h3>
        <div class="accordion" id="followingValue">
			<div v-for="(data, index) in following" class="card" :key="index">
				<div class="card-header" :id="'headingOne' + index">
					<p>Hello!</p>
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
			}

			const following = JSON.parse(localStorage.getItem('following'));
			this.following = following;

			EventBus.$on('addBookmark', elementToAdd =>{
				this.following.push(elementToAdd);
			})

			EventBus.$on('removeBookmark', function(elementToRemove){
				const index = this.following.indexOf(elementToRemove);
				this.following.splice(index, 1);
			})
		}
	}
</script>