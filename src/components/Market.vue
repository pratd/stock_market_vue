<template>
<h1>{{ info }}</h1>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'Market',
      data() {
      return {
        info: [],
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
        .then(res => {
          console.log(res.data);
          this.info = res.data;
        })
        .catch(err => console.log(err));
    }
  }
</script>