<template>
    <div class="market-values container py-5">
        <h3 class="mb-3">Market Values</h3>
        <div class="accordion" id="marketValue">
          <div v-for="(data, index) in allData.assets" class="card" :key="index">
            <div class="card-header" :id="'headingOne' + index">
              <!-- <h2 class="mb-0"> -->
                <button class="btn btn-link d-flex justify-content-between w-100" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                    <div>
                      <img width="36" :src="require(`../../src/assets/img/markets/${data.id}.png`)">
                      <span>{{ data.symbol }}</span>
                      <span>{{ data.name }}</span>
                    </div>
                    <div>
                      <span>{{ data.last_price }}</span>
                      <span><i class="material-icons pt-1">bookmark</i></span>
                    </div>
                </button>
              <!-- </h2> -->
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
  export default {
    name: 'Market',
      data() {
      return {
        allData: [],
      }
    },
    created(){
      axios.get(`https://fake-stock-eye.herokuapp.com/`)
        .then(all => {
            this.allData = all.data;
        })
        .catch(err => console.log(err));
    }, 
    methods:{
      getImgUrl(pic) {
        const url = '../../src/assets/img/' + pic +'.png'
        return url;
      }
    }
  }
</script>