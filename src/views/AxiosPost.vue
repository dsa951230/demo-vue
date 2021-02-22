<template>
  <div>
    <div>
      {{ msg }}
    </div>
    <div class="d-flex flex-wrap">
      <div v-for="(d, index) in post_data" class="col-3 embed-responsive embed-responsive-16by9">
        <img v-bind:src="d.img" class="embed-responsive-item col-12 p-1">
      </div>
    </div>
      
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      msg: 'AxiosPost',
      post_data: [],
    }
  },
  created(){
  var el = this;
    Vue.axios({
      method: 'post',
      url: '/api/vue_test',
      data: {

      },
    }).then(function(response) {
      var json = response.data;
      el.post_data = response.data;
          
    }).catch(function (error) { // 請求失敗
      console.log(error);
    });
    // Vue.axios.post('/api/vue_test').then((response) => {
    //   this.post_data = response.data;
    //   console.log(this.post_data);
    // })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
