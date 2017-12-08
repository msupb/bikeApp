Vue.use(VueResource);
function test() {
  console.log(a);
  console.log(b);
}
var owm = new Vue({
  el: '#owm',
  data: {
    apiKey: "&type=like&appid=766b78c39446a8fa6313c3b7b2063ade",
    city: "Jonkoping",
    weather: []
  },
  methods: {
    loadWeather: function() {
          this.$http.get('http://api.openweathermap.org/data/2.5/find?q=' + this.city + this.apiKey).then((data) => {
            this.weather.push(data);
            console.log(this.weather);
          });
    },
    testtest: function() {
      alert(this.userInput);
    }
  },
  mounted: function () {
    this.loadWeather();
  }
});

$("#menu-button").click(function(){
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});
