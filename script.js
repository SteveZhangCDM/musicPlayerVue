var app = new Vue({
  el: '#app',
  data: {
    query: '',
    musicList: [],
    musicUrl: '',
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
    playMusic: function (musicId) {
      event.preventDefault();
      console.log(musicId);
      let that = this;
      axios.get('https://autumnfish.cn/song/url?id=' + musicId).then(
        function (response) {
          console.log(response);
          console.log(response.data.data[0].url);
          that.musicUrl = response.data.data[0].url;
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
});
