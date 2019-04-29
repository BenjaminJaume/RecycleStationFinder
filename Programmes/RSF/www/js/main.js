/*jslint sloppy:true, browser:true, devel:true, white:true, vars:true, eqeq:true, nomen:true, unparam:true */
/*global intel, google, Marker, device */

var _map = null;
var _seconds = 10000;
var _llbounds = null;
var boolTripTrack = true;
var i;
//var mapCenterAtLaunch = new google.maps.LatLng(49.250056, 4.034144); // REIMS : is the middle between the two towns
var mapCenterAtLaunch = new google.maps.LatLng(44.790915, -0.610595); // IUT de Bordeaux 1

function drawMap() {
    var mapOptions = {
        center: mapCenterAtLaunch,
        zoom:8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        }
    };
    if (boolTripTrack === true) {
        _map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    }
}

var options = {
    timeout: 10000,
    maximumAge: 11000,
    enableHighAccuracy: true
};

function onDeviceReady() {
    drawMap();
    
    document.getElementById("map_canvas").style.height = screen.height + "px";
    
    for(i = 0 ; i < latitudeGlassFR.length ; i++) {
        addFRMarkerToMap(latitudeGlassFR[i], longitudeGlassFR[i], "Glass", i);
    }
    
    for(i = 0 ; i < latitudeClothesFR.length ; i++) {
        addFRMarkerToMap(latitudeClothesFR[i], longitudeClothesFR[i], "Clothes", i);
    }
    
    for(i = 0 ; i < latitudeGR.length ; i++) {
        addGRMarkerToMap(latitudeGR[i], longitudeGR[i], i);
    }

    try {
        //hide splash screen
        navigator.splashscreen.hide();
    } catch (e) {}
}
document.addEventListener("deviceready", onDeviceReady, false);