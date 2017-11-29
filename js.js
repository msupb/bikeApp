Vue.use(VueResource);
/*
var Vue = require('vue');
Vue.use(require('vue-resource'));*/

var strava = new Vue({
  el: '#strava',
  data: {
    returnData: [],
    apiKey: "&key=AIzaSyBwGKQlGcUl5_nJaY5igPO4hvEUI7ogVGw",
    params: "path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796"
  },
  methods: {
    loadData: function() {
      /*this.$http.get('https://www.strava.com/api/v3/athletes/3467851?access_token=76af433c62eef277ef6265bf95c092e9b1767eb2', function(data, status, request){
        if(status == 200)
        {
          self.users = data;
          console.log(self.users);
        }
      });*/
      this.$http.get('https://roads.googleapis.com/v1/snapToRoads?' + this.params + this.apiKey).then((data) => {
        this.returnData = data;
        console.log(this.returnData);
      });
    }
  },
  mounted: function() {
    this.loadData();
  }
});

var owm = new Vue({
  el: '#owm',
  data: {
    apiKey: "&type=like&appid=766b78c39446a8fa6313c3b7b2063ade",
    userInput: "",
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

        if(this.userInput.length > 3) {
          this.$http.get('http://api.openweathermap.org/data/2.5/find?q=' + this.userInput + this.apiKey).then((data) => {
            //this.weather = data;
            this.weather.push(data);
            console.log(this.weather);
          }); //Why does this return data using the .then promise while the above http call with the callback doesnt
        }

    },
    testtest: function() {
      alert(this.userInput);
    }
  },
  mounted: function () {
    //this.loadWeather();
  }
});
