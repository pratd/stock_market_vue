<template>
    <div id="marketValues" class="market-values container py-5">
        <h3 class="mb-3 table-title">Market Values</h3>
        <div class="accordion" id="marketValue">
			<div v-for="(data, index) in allData" class="card" :key="index">
				<div class="card-header" :id="'heading-market' + data.market_symbol">
					<button class="btn-market btn btn-link d-flex justify-content-between w-100 align-items-center p-0" type="button" 
					data-toggle="collapse" :data-target="'#collapse-market' + data.market_symbol" aria-expanded="false" 
					:aria-controls="'collapse-market' + data.market_symbol" v-on:click="plotChart({element: data.market_symbol})">
						<div class="left-side-els">
							<!-- <img width="36" :src="require(`../../src/assets/img/markets/${data.market_symbol}.png`)"> -->
							<span>{{ data.market_symbol }}</span>
							<span>{{ data.market_name }}</span>
						</div>
						<div class="right-side-els d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex align-tems-center">
							<span class="my-2">{{ data.close }} $</span>
							<span v-if="following.some(market => market.symbol == data.market_symbol) || setToFollow.some(market => market.symbol == data.market_symbol)">
								<i class="material-icons pt-1">bookmark</i></span>
							<span v-else><i class="material-icons pt-1">bookmark_border</i></span>
						</div>
					</button>
				</div>
				<div :id="'collapse-market' + data.market_symbol" class="collapse" :aria-labelledby="'heading' + data.id" data-parent="#marketValue">
					<div class="card-body d-flex flex-column align-items-end">
						<div>
							<span class="d-sm-none d-md-none d-lg-none d-xl-none" v-if="following.some(market => market.symbol == data.market_symbol) || setToFollow.some(market => market.symbol == data.market_symbol)"><i class="material-icons pt-1">bookmark</i></span>
							<span class="d-sm-none d-md-none d-lg-none d-xl-none" v-else><i class="material-icons pt-1">bookmark_border</i></span>
							<p class="mb-2 detailed-market-name d-sm-none d-md-none d-lg-none d-xl-none">Last price: ${{data.close}}</p>
							<p>{{data.market_name}} is a stock market in process of growing and therefore VisualMarket recommends it. If you're willing to see how your money grows exponentially, do not hesitate to invest in {{data.market_name}}. 
								Buy stablecoins listed on VisualMarket by wiring money from your account to the providers of these coins. Then, use these stablecoins to buy {{data.market_name}}  on VisualMarket exchange.
								VisualMarket supports the deposit of more than 150 cryptocurrencies, several of which you can exchange for {{data.market_name}} at some of the best rates in the market.
								You can directly purchase {{data.market_name}} with credit card on VisualMarket. We offer the best route to buy {{data.market_name}} using debit card or credit card.
							</p>
						</div>
						<div class="w-100 d-flex justify-content-center my-5">
							<apexchart class="chart" :id="'chart' + data.market_symbol" width=500 height="350" data-parent="#marketValue" type="candlestick" v-if="loaded" :series="series" :options="chartOptions"/>
						</div>
						<div>
							<button class="bookmark-button" v-if="following.some(market => market.symbol == data.market_symbol) || 
								setToFollow.some(market => market.symbol == data.market_symbol)" v-on:click="removeFromBookMarks(data.market_symbol)">Remove from Bookmark</button>
							<button class="bookmark-button" v-else v-on:click="addToBookmarks({name: data.market_name, symbol: data.market_symbol})">Add to Bookmark</button>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart',VueApexCharts );
import axios from 'axios';
import EventBus from '../event-bus';
export default {
    name: 'Market',
    data() {
      return {
		allData: [],
		setToFollow: [],
		following: [],
		//rest of the data for the apex-charts
		loaded: false,
        chartOptions:{
            title: {
                text: 'CandleStick',
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
		responsive: [
			{
				breakpoint: 384,
				// options: {
				// 	plotOptions: {
				// 	candlestick: {
				// 		horizontal: true
				// 	}
				// 	},
				// 	legend: {
				// 	position: "bottom"
				// 	}
				// }
			}
		],
        series:[{
            name:'Price chart',
            data:[]
        }]
    }
    },
    props:{
        exportData:{
            type: Object
        }
	},
	methods:{
			getAllData(){
				axios.get(process.env.APIURL + 'markets')
				.then(all => {
					this.allData = all.data;
				})
				.catch(err => console.log(err));
			},
			addToBookmarks: function (element){
				this.setToFollow.push(element);

				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))

				EventBus.$emit('addBookmark', element);
			},
			removeFromBookMarks: function(element){
				if(this.following.some(market => market.symbol == element)){
					// const index = this.following.indexOf(element);
					// this.following.splice(index, 1);
					var removeIndex = this.following.map(item => item.market_symbol).indexOf(element);
					this.following.splice(removeIndex, 1);
				}
				if(this.setToFollow.some(market => market.symbol == element)){
					// const index = this.setToFollow.indexOf(element);
					// this.setToFollow.splice(index, 1);
					var removeIndex = this.setToFollow.map(item => item.market_symbol).indexOf(element);
					this.setToFollow.splice(removeIndex, 1);
				}
				const follow = [...this.setToFollow, ...this.following]
				localStorage.setItem('following', JSON.stringify(follow))

				EventBus.$emit('removeBookmark', element);
			},
			plotChart: function(element){
				this.loaded = false
				try {
					axios.get(process.env.FAKEAPIURL +`history?symbol=`+element.element)
					.then(coinList =>{
						if (coinList.data.length>0){
							for(var i=0; i<coinList.data.length; i++ ){
								var obj={};
								obj['x']= new Date(coinList.data[i].CloseTime);
								var picked = (({ Open, High, Low, Close }) => ({ Open, High, Low, Close }))(coinList.data[i]);
								obj['y']=Object.values(picked);
								this.series[0].data.push(obj);
							}
						}else{
							var obj={}
							obj['x']= 0;
							obj['y']= [0,0,0,0];
							this.series[0].data.push(obj);
						}
						console.log(this.series[0])
						this.loaded = true;
					}
				)
				} catch (e) {
            		console.error(e)
        		}
			}
		},
		mounted(){
			this.getAllData();
			if (localStorage.getItem('following') === null) {
				localStorage.setItem('following', '');
			}
			this.following = JSON.parse(localStorage.getItem('following'))

			EventBus.$on('removeBookmarkFromFollowing', data =>{
				this.removeFromBookMarks(data);
			});
		}
	}
</script>