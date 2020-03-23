<template>
    <div class="market-values container pt-5">
        <h3>Price chart</h3>
        <line-chart v-if="loaded" :labels= "labels" :datasets="datasets" :options="options"/>
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
        datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                //Data to be represented on y-axis
                data: null
            }
          ],
        labels: null,
        options: null
    }),
    mounted(){
        this.loaded = false
        try {
            axios.get(`https://fake-stock-eye.herokuapp.com/`)
            .then(coinList =>{
            this.labels = coinList.data.prices.map(list=>list.time);
            this.datasets[0].data = coinList.data.prices.map(list=>list.price);
            this.loaded = true;
            }
            )
        } catch (e) {
            console.error(e)
        }
    }
}
</script>