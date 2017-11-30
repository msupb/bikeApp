/*var map;
var el = document.getElementById('map');
var options = {
  center: {lat: 57.78145, lng: 14.15618},
  zoom: 14,
  mapTypeId: 'roadmap'
}
function initMap() {
  map = new google.maps.Map(el, options);
  var marker = new google.maps.Marker({
  position: {lat: 57.78145, lng: 14.15618},
  map: map,
  animation: google.maps.Animation.BOUNCE,
  draggable: true
  });
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}*/
function initMap() {
      var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 57.78145, lng: 14.15618}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
      }
      var origin = {lat: 57.78145, lng: 14.15618};
      var destination = {lat: 57.857024, lng: 14.126145};
      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = 'BICYCLING';
        directionsService.route({
          origin,
          destination,
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

if (navigator.geolocation) {
    console.log('Geolocation is supported!');
}
else {
    console.log('Geolocation is not supported for this Browser/OS.');
}

window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;

    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
};
