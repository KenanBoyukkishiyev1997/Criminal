var markers;
var map;
var infowin;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 40.4376583,
            lng: 48.5539051
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
     infoWin = new google.maps.InfoWindow();
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
   

    // markerCluster.setMarkers(markers);
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

var locations = [];

$(function () {
    $('.location').each(function () {
        var lat = $(this).data('lat'),
            lng = $(this).data('lng');

        locations.push({"lat":lat,"lng": lng});
    });

    console.log(locations);

    markers = locations.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location,
            icon: 'https://www.tutorialspoint.com/google_maps/src/Picture1.png'
        });
        google.maps.event.addListener(marker, 'mouseover', function (evt) {
            infoWin.setContent(location.info);
            // infoWin.open(map, marker);

        })
        return marker;
    });
    google.maps.event.addDomListener(window, "load", initMap);

});




//on click function
function myClick(id) {
    console.log(markers);
    console.log(markers[id]);

    map.setCenter(markers[id].getPosition());
    map.setZoom(12);
    google.maps.event.trigger(markers[id], 'mouseover');

}


