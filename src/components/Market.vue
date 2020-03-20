<template>
    <div class="market-values container pt-5">
        <h3>Market Values</h3>
        <p>{{ allData }}</p>
        <div class="accordion" id="marketValue">
            <div v-for="(data, index) in allDataAssets" class="card" :key="index">
                <div class="card-header" id="MarketHeading">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="'#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {{ data.name }}
                    </button>
                </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="MarketHeading" data-parent="#marketValue">
                    <div class="card-body">
                        {{ data.desc }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
    }
  }
</script>