/**
 * Created by justin on 24/06/16.
 */
var map;
var detailMap1;
var detailMap2;
var detailMap3;
var detailMap4;
$(document).ready(function () {
    initMap();
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.904039, lng: 12.549407},
            zoom: 10
        });
    }
});

var line1 = []; // linea rossa per ogni marker
var markers1 = []; // marker fisici sulla mappa
var line2 = [];
var markers2 = [];
var line3 = [];
var markers3 = [];
var line4 = [];
var markers4 = [];
var markerArray = []  ;

function putMarker(id, coordinate){
       
    var location = coordinate;
    var icon = {
        url: "public/img/truck" + id + ".gif" // url
        //url: "public/img/truck.png", // url
       // scaledSize: new google.maps.Size(30, 30) // scaled size
       // , origin: new google.maps.Point(0, 0), // origin
      //  anchor: new google.maps.Point(0, 7) // anchor
    };
//debugger;

if(markerArray[id] == null){
   markerArray[id] = new google.maps.Marker({
        position: location,
        map: map,
        label: toString(id),
        icon: icon,
       duration : 2000,
        easing: "easeOutExpo"
    });
}
//if(marker.icon == null)
//{
  //  marker.icon = icon;
//}

    google.maps.event.addListener(markerArray[id], 'click', function() {
        $('#myTruckPreview').modal('show'); //modificare qui
        initMapPreview(null,id);
    });

    google.maps.event.addListener(markerArray[id], 'click', function () {
        $("#start").on('click', function () {
           // marker.setMap(null);
            map.setCenter(location);
            map.setZoom(15);
        });
    });

    putMarkerDetail(id,location);

    if(id==1 && hasStarted1==true) {
        google.maps.event.clearListeners(markerArray[id], 'click');
        google.maps.event.addListener(markerArray[id], 'click', function() {
            $('#myTruckDetail1').modal('show'); //modificare qui
            initDetailMap1(location,id);
        });
        //clearMarkers(markers1);
        markers1.push(markerArray[id]);
        line1.push(location);
        drawPath(line1,'#bb1e10',id);
    }
    if(id==2 && hasStarted2==true) {
        google.maps.event.clearListeners(markerArray[id], 'click');
        google.maps.event.addListener(markerArray[id], 'click', function() {
            $('#myTruckDetail2').modal('show'); //modificare qui
            initDetailMap2(location,id);
        });
       // clearMarkers(markers2);
        markers2.push(markerArray[id]);
        line2.push(location);
        drawPath(line2, '#3A5D96',id);
    }
    if(id==3 && hasStarted3==true) {
        google.maps.event.clearListeners(markerArray[id], 'click');
        google.maps.event.addListener(markerArray[id], 'click', function() {
            $('#myTruckDetail3').modal('show'); //modificare qui
            initDetailMap3(location,id);
        });
       // clearMarkers(markers3);
        markers3.push(markerArray[id]);
        line3.push(location);
        drawPath(line3, '#00cc99',id);
    }

    if(id==4 && hasStarted4==true) {
        google.maps.event.clearListeners(markerArray[id], 'click');
        google.maps.event.addListener(markerArray[id], 'click', function() {
            $('#myTruckDetail4').modal('show'); //modificare qui
            initDetailMap4(location,id);
        });
        // clearMarkers(markers3);
        markers4.push(markerArray[id]);
        line4.push(location);
        drawPath(line4, '#ffff00',id);
    }
    
}

function clearMarkers(arr){
    for (var i=0;i<arr.length; i++){
        arr[i].setMap(null);
    }
    //reset the main marker array for the next call
    arr=[];
}


function drawPath(position, color,id) {
    var start = 0;
    var stop = 0;

    if (position.length -1 != 0 )
    {
        start = position.length -2;
   	    stop = position.length -1;
    }

    var flightPath = new google.maps.Polyline({
        path: [position[start],position[stop]],
        geodesic: true,
        strokeColor: color,
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    
   
    flightPath.setMap(map);
    //console.log(position[position.length -1]);
     markerArray[id].setPosition(position[position.length -1])

}

function initDetailMap1(coordinates, id) {
    console.log(coordinates);
    detailMap1 = new google.maps.Map(document.getElementById('map-detail1'),{
        center : coordinates,
        zoom : 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    $("#myTruckDetail1").on("shown.bs.modal", function () {
        google.maps.event.trigger(detailMap1, "resize");
        detailMap1.setCenter(coordinates);
    });
    detailMap1.setCenter(coordinates);
}

function initDetailMap2(coordinates, id) {
    console.log(coordinates);
    detailMap2 = new google.maps.Map(document.getElementById('map-detail2'),{
        center : coordinates,
        zoom : 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    $("#myTruckDetail2").on("shown.bs.modal", function () {
        google.maps.event.trigger(detailMap2, "resize");
        detailMap2.setCenter(coordinates);
    });
    detailMap2.setCenter(coordinates);
}

function initDetailMap3(coordinates, id) {
    console.log(coordinates);

    detailMap3 = new google.maps.Map(document.getElementById('map-detail3'),{
        center : coordinates,
        zoom : 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    $("#myTruckDetail3").on("shown.bs.modal", function () {
        google.maps.event.trigger(detailMap3, "resize");
        detailMap3.setCenter(coordinates);
    });
    detailMap3.setCenter(coordinates);
}

function initDetailMap4(coordinates, id) {
    console.log(coordinates);

    detailMap4 = new google.maps.Map(document.getElementById('map-detail4'),{
        center : coordinates,
        zoom : 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    $("#myTruckDetail4").on("shown.bs.modal", function () {
        google.maps.event.trigger(detailMap4, "resize");
        detailMap4.setCenter(coordinates);
    });
    detailMap4.setCenter(coordinates);
}

var markersDetail1 = [];
var markersDetail2 = [];
var markersDetail3 = [];
var markersDetail4 = [];

function putMarkerDetail(id,location) {
    var icon = {
        url: "public/img/truck" + id + ".gif" // url
    };
    switch(id) {
        case 1:
            clearMarkersDetail(markersDetail1);
            marker = new google.maps.Marker({
                position: location,
                map: detailMap1,
                label: toString(id),
                icon: icon
            });
            markersDetail1.push(marker);
            break;
        case 2:
            clearMarkersDetail(markersDetail2);
            marker = new google.maps.Marker({
                position: location,
                map: detailMap2,
                label: toString(id),
                icon: icon
            });
            markersDetail2.push(marker);
            break;
        case 3:
            clearMarkersDetail(markersDetail3);
            marker = new google.maps.Marker({
                position: location,
                map: detailMap3,
                label: toString(id),
                icon: icon
            });
            markersDetail3.push(marker);
            break;
        case 4:
            clearMarkersDetail(markersDetail4);
            marker = new google.maps.Marker({
                position: location,
                map: detailMap4,
                label: toString(id),
                icon: icon
            });
            markersDetail4.push(marker);
            break;
        default:
            console.log('default put marker....')
    }
}
function clearMarkersDetail(arr){
    for (var i=0;i<arr.length; i++){
        arr[i].setMap(null);
    }
    //reset the main marker array for the next call
    arr=[];
}


var locationTemp;
function initMapPreview(coordinates, id){
    var id = id;
    locationTemp = new google.maps.LatLng(41.928929, 12.565784);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    previewMap = new google.maps.Map(document.getElementById('map-preview'), {
        center: locationTemp,
        zoom: 13
    });
    $("#myTruckPreview").on("shown.bs.modal", function () {
        google.maps.event.trigger(previewMap, "resize");
        previewMap.setCenter(locationTemp);
    });
    previewMap.setCenter(locationTemp);
    previewMap.setZoom(13);
    directionsDisplay.setMap(previewMap);
    calculateAndDisplayRoute(directionsService, directionsDisplay, id);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, id) {
    previewMap.setCenter(locationTemp);
    var waypts = [];
    var point;
    if(id==1) {
        point = new google.maps.LatLng(41.944807, 12.592091);
    } else if(id==2) {
        point = new google.maps.LatLng(41.93587, 12.54346);
    } else if(id==3) {
        point = new google.maps.LatLng(41.93101, 12.56784);
    } else if(id==4) {
        point = new google.maps.LatLng(41.9577111,12.5613379);
    }
    waypts.push({
        location: point,
        stopover: true
    });

    directionsService.route({
        origin: new google.maps.LatLng(41.95766, 12.56132),
        destination: new google.maps.LatLng(41.904140, 12.549502),
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });
    previewMap.setCenter(locationTemp);
}
