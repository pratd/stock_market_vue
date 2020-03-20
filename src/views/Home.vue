<template>
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
              <input type="submit" value="search">
            </div>
          </form>
        </div>
      </div>
    </div>
  <Market/>
  </div>
</template>
<script>
  import Market from '../components/Market.vue'
  import EventBus from '../event-bus.js'
  export default {
    name: 'Home',
    components: {
      Market
    },
    methods:{
      submitSearch: function(e){

      }
    }
  }
</script>