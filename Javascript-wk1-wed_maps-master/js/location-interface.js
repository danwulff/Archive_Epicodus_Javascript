var locateUser = require('./../js/gmaps.js').locateUser;
var searchString = require('./../js/gmaps.js').searchString;
var zoomMap = require('./../js/gmaps.js').zoomMap;
var startStreetView = require('./../js/gmaps.js').startStreetView;
var clearMarkers = require('./../js/gmaps.js').clearMarkers;

$( document ).ready(function() {
  //create initial map object
  var myOptions = {
    zoom : 2,
    center : {lat: 0, lng: 0},
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);


  //button to locate user
  $('#locateUser').click(locateUser);

  $('#clearMarkers').click(clearMarkers);

  $('#searchLocation').click(function() {
    searchString($('#locationSearch').val(), mapObject);
    zoomMap(11, mapObject);
  });

  $('#searchAddress').click(function() {
    searchString($('#addressSearch').val(), mapObject);
    zoomMap(11, mapObject);
    startStreetView(mapObject);
  });

});
