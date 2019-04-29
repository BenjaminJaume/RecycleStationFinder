var markerCount = 0;
var _map;
var bordeauxSchoolIcon = "images/markers/picture_marker_school_bordeaux.png";
var wilhelmshavenSchoolIcon = "images/markers/picture_marker_school_wilhelmshaven.png";
var wilhelmshavenIcon = "images/markers/picture_marker_wilhelmshaven.png";
var FRclothesIcon = "images/markers/picture_fr_clothes_containers.png";
var FRglassIcon = "images/markers/picture_fr_glass_containers.png";

function addFRMarkerToMap(lat, long, material, i) {
    var infowindow = new google.maps.InfoWindow();
    var myLatLng = new google.maps.LatLng(lat, long);
    
    if(material === "Glass") {
        switch(i) {
            case 0:
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: _map,
                    animation: google.maps.Animation.DROP,
                    icon: bordeauxSchoolIcon
                });
                break;
            
            default:
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: _map,
                    animation: google.maps.Animation.DROP,
                    icon: FRglassIcon
                });
                break;
        }
    }
    else {
        if(material === "Clothes") {
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _map,
                animation: google.maps.Animation.DROP,
                icon: FRclothesIcon
            });
        }
    }
    
    //Gives each marker an Id for the on click
    markerCount++;

    //Creates the event listener for clicking the marker
    //and places the marker on the map 
    google.maps.event.addListener(marker, 'click', (function(marker, markerCount) {
        return function() {
            if(material === "Glass") {
                switch(i) {
                    case 0:
                        infowindow.setContent("<h1>I.U.T de Bordeaux 1</h1>" +
                            /*"<p align=\"left\">JAUME Benjamin <br/>" +
                            "AUBOIN Charly <br />" +
                            "BOEZ Mathieu <br />" +
                            "CONGARD Ronan </p>" +*/
                            "<center><p align=\"left\">Address : " + addressGlassFR[i] + "</p></center>" +
                            '<img src="images/bordeauxSchool.jpg" width="100%" height="100" /><br /><br />');
                        infowindow.open(_map, marker);
                        break;
                    default:
                        infowindow.setContent("<h1>" + material + " container n°" + i + "</h1>" +
                            "<table><tr>" + 
                            "<td>" +
                                '<center><p align="left">Address : <b>' + addressGlassFR[i] + '</b></p></center>' + 
                            "</td></tr>" +
                            "<tr><td>" +
                                '<img src="images/france_containers/glass/' + i + '/' + i + '_1.jpg" width="100%" height="125" />' +
                            "</tr><tr><td>" +
                                '<br />' +
                                '<img src="images/france_containers/glass/' + i + '/' + i + '_2.jpg" width="100%" height="125" />' +
                            "</td></tr></table><br />");
                        infowindow.open(_map, marker);
                        break;
                }
            }
            else {
                if(material === "Clothes") {
                    infowindow.setContent("<h1>" + material + " container n°" + (i+1) + "</h1>" +
                            "<table>" +
                                '<tr width="100%">' +
                                    "<td>" +
                                        '<center><p align="left">Address : <b>' + addressClothesFR[i] + '</b></p></center>' + 
                                    "</td>" +
                                "</tr>" +
                                '<tr width="100%">' +
                                    "<td>" +
                                        '<img src="images/france_containers/clothes/' + (i+1) + '/' + (i+1) + '_1.jpg"' + 
                                        'width="100%" height="100" />' +
                                    "</td>" +
                                "</tr>" +
                            "</table><br />");
                    infowindow.open(_map, marker);
                }
            }
        };
    })(marker, markerCount));  
    
    //Pans map to the French School location
    /*if(i === 0) {
        _map.panTo(myLatLng);
    }*/
    
    _map.addListener('click', function() {
        if (infowindow) {
            infowindow.close();
        }
    });
}

function addGRMarkerToMap(lat, long, i) {
    var infowindow = new google.maps.InfoWindow();
    var myLatLng = new google.maps.LatLng(lat, long);
    
    switch(i) {
        case 0:
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _map,
                animation: google.maps.Animation.DROP,
                icon: wilhelmshavenSchoolIcon
            });
            break;
            
        default:
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _map,
                animation: google.maps.Animation.DROP,
                icon: wilhelmshavenIcon
            });
            break;
    }
    
    //Gives each marker an Id for the on click
    markerCount++;

    //Creates the event listener for clicking the marker
    //and places the marker on the map 
    google.maps.event.addListener(marker, 'click', (function(marker, markerCount) {
        return function() {
            //infowindow.setContent(htmlMarkupForInfoWindow);
            switch(i) {
                case 0:
                    infowindow.setContent("<h1>Jade Hochschule</h1>" +
                        /*"<p align=\"left\">NORDHAUSEN Tobias <br />" +
                        "TRAUTSCHOLD Johanna <br />" +
                        "PALANG Sepideh </p>" +*/
                        "<p align=\"left\">Address : " + addressGR[i] + "</p>" +
                        '<img src="images/wilhelmshavenSchool.jpg" width="100%" height="100" /><br />');
                    infowindow.open(_map, marker);
                    break;
                default:
                    infowindow.setContent("<h1>Container n°" + i + "</h1>" +
                            "<table><tr>" + 
                            "<td>" +
                                '<center><p align="left">Address : <b>' + addressGR[i] + '</b></p></center>' + 
                            "</td></tr>" +
                            "<tr><td>" +
                                '<img src="images/germany_containers/' + i + '/' + i + '_1.jpg" width="100%" height="125" />' +
                            "</tr><tr><td>" +
                                '<br />' +
                                '<img src="images/germany_containers/' + i + '/' + i + '_2.jpg" width="100%" height="125" />' +
                            "</td></tr></table><br />");
                    infowindow.open(_map, marker);
                    break;
            }
            
        };
    })(marker, markerCount));  
    
    //Pans map to the German School location
    /*if(i === 0) {
        _map.panTo(myLatLng);
    }*/
    
    _map.addListener('click', function() {
        if (infowindow) {
            infowindow.close();
        }
    });
}

function addContainer() {
    alert("Cette fonction n'existe pas encore");
}

