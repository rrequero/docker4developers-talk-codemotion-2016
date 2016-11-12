var map = null;

function initMap() {

    var southWest = L.latLng(85, -180),
        northEast = L.latLng(-85, 180),
        bounds = L.latLngBounds(southWest, northEast);

    map = L.map('map', {
        center: [40.390008, -3.8826887],
        scrollWheelZoom: false,
        minZoom: 2,
        maxBounds: bounds,
        zoomControl: true,
        attributionControl: false
    });

    map.fitBounds([
        [40.379243805018405, -3.7480545043945312],
        [40.43754064484924, -3.6309814453125]
    ]);
    var tile = null;
    tile = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });


    tile.addTo(map);
    new L.control.attribution({
        position: 'bottomright'
    }).addTo(map);

}

var popUpTemplate = function (data) {
        
        var tmpl= '<div class="map-tooltip">' +
            '<h3><a>' + data.name + '</a></h3>' +
            '</div>';
        var el = $(tmpl);
        return el[0];
    };

function paintPoints(data) {
    var featureGroup = new L.FeatureGroup();
    for (var i = 0, length = data.length; i < length; i++) {
        var markerIcon = L.divIcon({
            className: 'marker',
            html: '<span class="'+ data[i].type +'"></span>'
        });

        var marker = new L.Marker({
            lat: data[i].lat,
            lng: data[i].lng
        }, {
            icon: markerIcon
        });

        marker.bindPopup(popUpTemplate(data[i]));
        marker.on('mouseover', function (e) {
            this.openPopup();
        });
        featureGroup.addLayer(marker);
        
    }
    map.addLayer(featureGroup);
}

function getPoints() {
    $.get('/map/poc').success(function(data){
        if (!data || data.length === 0){
            alert('No hay datos');
            return;
        }
        paintPoints(data);
    });
}


initMap();
getPoints();