<template>
    <div v-if="Object.keys(searchResults).length !== 0" id="searchMarketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Search results</h3>

        <div v-if="Object.keys(searchResults.data).length !== 0" class="accordion" id="searchMarketValues">
			<div v-for="(data, index) in searchResults.data" class="card" :key="index">
				<div class="card-header d-flex justify-content-between align-items-center">
					<a :href="'#collapse-market' + data.market_symbol"><button class="left-side-els" type="button" data-toggle="collapse" :data-target="'#collapse-market' + data.market_symbol" aria-expanded="false" :aria-controls="'collapse-market' + data.market_symbol">
						<!-- <img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)"> -->
						<span>{{ data.market_symbol }}</span>
						<span>{{ data.market_name }}</span>
					</button></a>
				</div>
			</div>
        </div>
		<div v-else>
			<p>Sorry, no market name matches your search.</p>
		</div>
    </div>
</template>
<script>
import axios from 'axios';
import EventBus from '../event-bus';
export default {
    name: 'SearchResults',
    data() {
      return {
		searchTerm: [],
		searchResults: []
      }
	},
	created(){
		EventBus.$on('searchable', searchInput =>{
			// searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1)
			if(searchInput == '' || searchInput == ' '){
				this.searchResults = []
			}else{
				searchInput = searchInput.toUpperCase()
				this.searchTerm = searchInput;
				axios.get(process.env.APIURL + 'search?target=' + searchInput )
					.then(results => {
						this.searchResults = results;
					})
					.catch(err => console.log(err));
			}
		});
	}
}
</script>