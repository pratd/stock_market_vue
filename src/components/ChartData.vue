<template>
    <div class="market-values container pt-5">
        <h3>Price chart</h3>
        <line-chart v-if="loaded" :labels= "labels" :datasets="datasets" :options="options"/>
        {{ datasets }}
    </div>
</template>

<script>
import LineChart from '../chart'
import axios from 'axios'
export default {
    name: 'LineChartContainer',
    components: { LineChart },
    data: () => ({
        loaded: false,
        datasets: null,
        labels: null,
        options: null
    }),
    mounted(){
        this.loaded = false
        try {
            axios.get(`https://fake-stock-eye.herokuapp.com/`)
            .then(coinList =>{
            this.labels = coinList.data.prices.map(list=>list.time);
            this.datasets = {data:coinList.data.prices.map(list=>list.price)};
            this.loaded = true;
            console.log(this.datasets);
            }
            )
        } catch (e) {
            console.error(e)
        }
    }
}
</script>