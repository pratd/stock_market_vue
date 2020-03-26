<template>
    <div class="container pt-5">
        <h3>Price chart</h3>
        <apexchart width="700" type="candlestick" v-if="loaded" :series="series" :options="chartOptions"/>
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
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            },
        plotOptions:{
            candlestick:{
                colors:{
                    upward: '#3C90EB',
                    downward: '#DF7D46'
                },
                wick:{
                    useFillColor:true,
                }
            }
        }
        },
        series:[{
            name:'Price chart',
            data:[]
        }]
    }),
    mounted(){
        this.loaded = false
         console.log(process.env.APIURL)
        try {
            axios.get(process.env.APIURL +`history?symbol=BTC`)
            .then(coinList =>{
               
                for(var i=0; i<coinList.data.length; i++ ){
                    var obj={}
                    obj['x']= new Date(coinList.data[i].CloseTime);
                    var picked = (({ Open, High, Low, Close }) => ({ Open, High, Low, Close }))(coinList.data[i]);
                    obj['y']=Object.values(picked);
                    this.series[0].data.push(obj);
                }
                console.log(this.series[0].data)
                this.loaded = true;
            }
            )
        } catch (e) {
            console.error(e)
        }
    }
}
</script>