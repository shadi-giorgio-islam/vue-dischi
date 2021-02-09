var app = new Vue({
  el: '#container',
  data: {
    cds: []
  },
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result)=>{
        for (var i = 0; i < result.data.response.length; i++) {
          this.cds.push(result.data.response[i]);
        }
      })
  }
});
