//Loads vue resource as a dependency for sending get request
Vue.use(VueResource);
//Creates new vue instance
var owm = new Vue({
  el: '#owm',
  data: {
    apiKey: "&type=like&appid=766b78c39446a8fa6313c3b7b2063ade",
    city: "Jonkoping",
    weather: []
  },
  methods: {
    loadWeather: function() {
      //Sends get request to openweathermap and returns current weather data in callback function
      this.$http.get('http://api.openweathermap.org/data/2.5/find?q=' + this.city + this.apiKey + '&units=metric').then((data) => {
        this.weather.push(data);
        console.log(this.weather);
      });
    }
  },
  mounted: function() {
    this.loadWeather();
  }
});
//Hamburger menu functionality
$("#menu-button").click(function() {
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});
