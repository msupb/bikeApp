var a;
var b;
var endLat;
var endLng;
var startPos;
//Prompts user to give location on application load
document.addEventListener("deviceready", getLoc, false);
$(document).ready(function(position) {
  getLoc();
});
//Gets coordinates through GPS functionality
var geoSuccess = function(position) {
  startPos = position;
  a = startPos.coords.latitude;
  b = startPos.coords.longitude;
  console.log(a + ', ' + b);
};
//Calls geolocation
function getLoc() {
  navigator.geolocation.getCurrentPosition(geoSuccess);
}
//Initialize google map
function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 57.78145,
      lng: 14.15618
    }
  });
  //Creates marker
  var marker = new google.maps.Marker({
    position: {
      lat: 57.78145,
      lng: 14.15618
    },
    map: map,
    animation: google.maps.Animation.BOUNCE,
    draggable: true,
    icon: 'img/destination.png'
  });

  directionsDisplay.setMap(map);
  //Eventlistener that will retrieve destination coordinates
  google.maps.event.addListener(marker, "click", function(event) {
    endLat = event.latLng.lat();
    endLng = event.latLng.lng();
    console.log(endLat + ', ' + endLng);
  });
  //Create marker
  var markerTwo = new google.maps.Marker({
    position: {
      lat: 57.783737959987896,
      lng: 14.146395301513621
    },
    map: map,
    animation: google.maps.Animation.BOUNCE,
    draggable: true,
    icon: 'img/accident.png'
  });
  //Alerts traffic problems on screen
  var winAlert = new google.maps.InfoWindow({
    content: "Traffic jam at this location"
  });
  //When user taps accident marker the vibration and warning alert will fire
  google.maps.event.addListener(markerTwo, 'click', function() {
    winAlert.open(map, markerTwo);
    navigator.vibrate(5000);
  });

  //Start and destination coordinates parsed and stored in an object
  var origin = {
    lat: parseFloat(a),
    lng: parseFloat(b)
  };
  var destination = {
    lat: parseFloat(endLat),
    lng: parseFloat(endLng)
  };
  //Sets bikelayer to the map, all routes calculated will be adapted to bikelanes
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
  //Calls the route calculator function with its parameters
  calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination);
}
//Function to calculate route on map. Returns the route with a callback function
function calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
  var selectedMode = 'BICYCLING';
  directionsService.route({
    origin,
    destination,
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      //window.alert('Directions request failed due to ' + status);
    }
  });
}
