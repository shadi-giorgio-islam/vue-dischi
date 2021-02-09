var app = new Vue({
  el: '#app',
  data: {
    cds: [],
    selected: '',
    genres: ['All', 'Rock', 'Pop', 'Jazz', 'Metal']
  },
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result)=>{
        for (var i = 0; i < result.data.response.length; i++) {
          this.cds.push(result.data.response[i]);
        }
      })
      console.log(this.selected);
  }
});
