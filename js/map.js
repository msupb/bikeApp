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
var a;
var b;
var endLat;
var endLng;
var startPos;
var geoSuccess = function(position) {
	startPos = position;
	a = startPos.coords.latitude;
	b = startPos.coords.longitude;
	console.log(a + ', ' + b);
};
function getLoc() {
	navigator.geolocation.getCurrentPosition(geoSuccess);
}
//navigator.geolocation.getCurrentPosition(geoSuccess);
function initMap() {
		var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 57.78145, lng: 14.15618}
    });

		var marker = new google.maps.Marker({
		  position: {lat: 57.78145, lng: 14.15618},
		  map: map,
		  animation: google.maps.Animation.BOUNCE,
		  draggable: true
	  });

    directionsDisplay.setMap(map);

		//var endLat;
		//var endLng;
		google.maps.event.addListener(marker, "click", function (event) {
				endLat = event.latLng.lat();
				endLng = event.latLng.lng();
				console.log( endLat + ', ' + endLng );
		});

		var origin = {
			lat: parseFloat(a),
			lng: parseFloat(b)
		};
		var destination = {
			lat: parseFloat(endLat),
			lng: parseFloat(endLng)
		};

		var bikeLayer = new google.maps.BicyclingLayer();
		bikeLayer.setMap(map);

		calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination);
}



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

/*
      var origin = {lat: 57.78145, lng: 14.15618};
      var destination = {lat: 57.857024, lng: 14.126145};
*/
