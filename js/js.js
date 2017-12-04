Vue.use(VueResource);


  var owm = new Vue({
    el: '#owm',
    data: {
      apiKey: "&type=like&appid=766b78c39446a8fa6313c3b7b2063ade",
      userInput: "jonkoping",
      weather: []
    },
    methods: {
      loadWeather: function() {
          /*this.$http.get('http://api.openweathermap.org/data/2.5/find?q=stockholm&type=like&appid=766b78c39446a8fa6313c3b7b2063ade', function(data, status, request) {
            if(status == 200) {
              this.weather = data;
              console.log(this.weather);
            }
          }); //The question is, why does this http.get call not return any data with the callbackfunction?*/

            this.$http.get('http://api.openweathermap.org/data/2.5/find?q=' + this.userInput + this.apiKey).then((data) => {
              this.weather = data;
              //this.weather.push(data);
              console.log(this.weather);
            }); //Why does this return data using the .then promise while the above http call with the callback doesnt

      },
      testtest: function() {
        alert(this.userInput);
      }
    },
    mounted: function () {
      //this.loadWeather();
    }
});
