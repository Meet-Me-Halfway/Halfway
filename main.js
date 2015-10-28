// gets location1 and location2 input on click event for submit button
$( "#submit" ).click(function(e) {
  var cities = [ $("#location1").val(), $("#location2").val() ];
​
  cities = cities.map(function(city) {
    return encodeURI(city.toLowerCase().trim());
  });
​
  console.log(cities);

 // TO DO: convert into cities into lat lng coordinates
});

function getLocationCoordinates(city){
  // TO DO: get Google Maps Geocoding service 
  // to convert address to location coordinates
}

function addLocationMarkers(){
  // TO DO: find out from Google Maps API docs how to add marker on map
  // TO DO: add markers on map of location1 and location2 coordinates
}

// uses location1 and location2 inputs to calculate its midpoint 
// and adds marker on map of location3 coordinates
function getMidpointLocation(start, end){
  var lat_midpoint = (end.lat + start.lat) / 2;
  var long_midpoint = (end.long + start.long) / 2;
  return {
    lat: lat_midpoint,
    long: long_midpoint
  } 
}




 
