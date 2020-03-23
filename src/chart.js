import {Line, mixins } from 'vue-chartjs';
//const { reactiveProp } = mixins;
export default {
    extends: Line,
    //mixins: [reactiveProp ],
    props: {
        datasets: {
            type: Object,
            default: null
        },
        labels:{
            type: Array,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart({
            labels: this.labels,
            datasets: this.datasets,
        }, this.options);
    }
};