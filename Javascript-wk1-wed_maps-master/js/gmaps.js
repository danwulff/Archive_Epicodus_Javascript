//backend logic
  var mapMarkers = [];

//google locate user
exports.locateUser = function() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
};

function geolocationSuccess (position) {
  // here we take the `position` object returned by the geolocation api
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  var marker = new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });

  mapMarkers.push(marker);
}

function geolocationError (positionError) {
  alert(positionError);
}

exports.searchString = function(searchText, resultsMap) {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': searchText}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        mapMarkers.push(marker);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
};

exports.zoomMap = function (zoomAmount, zoomMap) {
  zoomMap.setZoom(zoomAmount);
};

exports.startStreetView = function (streetViewMap) {
  google.maps.event.addListener(streetViewMap, 'idle', function() {
    var panorama = streetViewMap.getStreetView();
    panorama.setPosition(streetViewMap.getCenter());

    if (panorama.getVisible() === false) {
      panorama.setVisible(true);
    }

    google.maps.event.clearListeners(streetViewMap, 'idle');
  });
};

exports.clearMarkers = function () {
  for (var i = 0; i < mapMarkers.length; i++) {
    mapMarkers[i].setMap(null);
  }
};
