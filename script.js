var app = new Vue({
  el: '#app',
  data: {
    query: '',
    musicList: [],
  },
  methods: {
    searchMusic: function () {
      let that = this;
      axios.get('https://autumnfish.cn/search?keywords=' + this.query).then(
        function (response) {
          that.musicList = response.data.result.songs;
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
});
