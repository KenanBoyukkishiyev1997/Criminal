var markers;
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 40.4376583,
            lng: 48.5539051
        }
    });
    var infoWin = new google.maps.InfoWindow();
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
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

    // markerCluster.setMarkers(markers);
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
var locations = [
    
     {
        lat: 41.6293303,
        lng: 48.6559151,
    },

    {
        lat: 40.5765249,
        lng: 49.6068189,
    },

    {
        lat: 40.5416554,
        lng: 49.661529,
    },

    {
        lat: 40.5358596,
        lng: 49.6939911,
    },
    {
        lat: 40.6358596,
        lng: 49.6939911,
    },
];

$(".myClick").click(function () {
    var el = $(this);

    el.data("id");
    el.data("lat");
    el.data("lng");
}),
google.maps.event.addDomListener(window, "load", initMap);



//on click function
function myClick(id) {
    map.setCenter(markers[id].getPosition());
    map.setZoom(12);
    google.maps.event.trigger(markers[id], 'mouseover');
}


// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });