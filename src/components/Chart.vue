<template>
    <div class="market-values container pt-5">
        <h3>Price chart</h3>
        <apexchart width="500" type="candlestick" v-if="loaded" :labels= "labels" :series="datasets" :options="chartOptions"/>
    </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart',VueApexCharts );
import axios from 'axios'
export default {
    data: () => ({
        loaded: false,
        chartOptions:{
            chart: {
                id: 'vuechart'
            },
        },
        series:[{
            name:null,
            data:[{
                x: null,
                y: []
            }]
        }]
        
    }),
    mounted(){
        this.loaded = false
        try {
            axios.get(`http://localhost:3000/BTC`)
            .then(coinList =>{
            console.log(coinList.data.map(list=>new Date(list.time)));
            // this.labels = new Date(coinList.data.map(list=>list.time));
            // this.datasets[0].data = coinList.data.map(list=>list.price);
            this.loaded = true;
            }
            )
        } catch (e) {
            console.error(e)
        }
    }
}
</script>