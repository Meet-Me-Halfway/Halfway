// gets location1 and location2 input on click event for submit button
$( "#submit" ).click(function(e) {
  var addresses = [ $("#address1").val(), $("#address2").val() ];
  addresses = addresses.map(function(address) {
    return address.toLowerCase().trim();
  });
  console.log(addresses);
  getAddressCoordinates(addresses);
});

function getAddressCoordinates(addresses){
  // to convert address to location coordinates
  // TO DO: is this the right way to grab the input from above?
  for (var i = 0; i < addresses.length; i++){
    geocoder.geocode( { 'address': addresses[i] }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter( results[0].geometry.location );
        var latlng = new google.maps.LatLng( results[0].geometry.location );
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        console.log(latlng);
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }
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

function addLocationMarkers(){
  // TO DO: find out from Google Maps API docs how to add marker on map
  // TO DO: add markers on map of location1 and location2 coordinates
}






 
