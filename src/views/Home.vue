<template>
<<<<<<< HEAD
  <div class="home">
    <div class="img-searcher-container d-flex justify-content-center">
      <div class="d-flex justify-content-center align-items-end flex-column container">
        <div class="searcher-container">
          <h1 class="text-white">The World’s Leading Exchange Platform</h1>
          <h2 class="text-white">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes</h2>
          <form id="searcher">
            <div class="inputWithIcon">
              <input type="text" placeholder="Search for markets">
              <i class="material-icons" aria-hidden="true">search</i>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ChartData/>
    <Market/>

  </div>
</template>
<script>
  import Market from '../components/Market.vue'
  import ChartData from '../components/ChartData.vue'
  export default {
    name: 'Home',
    components: {
      Market,
      ChartData
    }
  }
=======
	<div class="home">
		<Header />
		<Top />
		<Following />
		<Market />
	</div>
</template>
<script>
	import Header from '../components/Header.vue'
	import Top from '../components/Top.vue'
	import Market from '../components/Market.vue'
	import Following from '../components/Following.vue'
	import EventBus from '../event-bus.js'
	export default {
		name: 'Home',
		components: {
			Header,
			Top,
			Market,
			Following
		}
	}
>>>>>>> 84f487940f6bca0ae6facd4626b14e14e57fe373
</script>