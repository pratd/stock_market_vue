<template>
    <div class="market-values container pt-5">
        <h3>Price chart</h3>
        <apexchart width="500" type="candlestick" v-if="loaded" :series="series" :options="chartOptions"/>
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
            axios.get(`https://fake-stock-eye.herokuapp.com/history?symbol=BTC`)
            .then(coinList =>{
                //console.log(coinList.data)
                this.series[0].data[0].x= coinList.data.map(list=>new Date(list.CloseTime));
                // //this.series[0].data[0].y= coinList.data.map(list=>list.prices);
                let i,chunkedArray =[];
                for(i=0; i<coinList.data.length; i++ ){
                    var picked = (({ Open, High, Low, Close }) => ({ Open, High, Low, Close }))(coinList.data[i]);
                    chunkedArray.push(Object.values(picked))
                }
                this.series[0].data[0].y=chunkedArray;
                console.log(this.series[0].data[0].y)
                this.loaded = true;
            }
            )
        } catch (e) {
            console.error(e)
        }
    }
}
</script>