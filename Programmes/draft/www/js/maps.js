function maps(country) {
    var map;
    var mapCenterAtLaunch;
    var i;
    var markerCount = 0;
    var center;
    var map_center;
    
    var bordeauxSchoolIcon = "images/markers/picture_marker_school_bordeaux.png";
    var wilhelmshavenSchoolIcon = "images/markers/picture_marker_school_wilhelmshaven.png";
    var wilhelmshavenIcon = "images/markers/picture_marker_wilhelmshaven.png";
    var FRclothesIcon = "images/markers/picture_fr_clothes_containers.png";
    var FRglassIcon = "images/markers/picture_fr_glass_containers.png";

    if(country == "france") {
        mapCenterAtLaunch = new google.maps.LatLng(44.790915, -0.610595); // IUT de Bordeaux 1
        map_center = "france";
    } else if(country == "germany") {
        mapCenterAtLaunch = new google.maps.LatLng(53.548264, 8.088609); // Jade Hoschule
        map_center = "germany";
    }
    //alert("Pays sélectionnée : " + country);
    
    var mapOptions = {
        center: mapCenterAtLaunch,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        }
    };
    
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    
    for(i = 0 ; i < latitudeGlassFR.length ; i++) {
        addFRMarkerToMap(latitudeGlassFR[i], longitudeGlassFR[i], "Glass", i);
    }
    
    for(i = 0 ; i < latitudeClothesFR.length ; i++) {
        addFRMarkerToMap(latitudeClothesFR[i], longitudeClothesFR[i], "Clothes", i);
    }
    
    for(i = 0 ; i < latitudeGR.length ; i++) {
        addGRMarkerToMap(latitudeGR[i], longitudeGR[i], i);
    }
    
    function addFRMarkerToMap(lat, long, material, i) {
        var infowindow = new google.maps.InfoWindow();
        var myLatLng = new google.maps.LatLng(lat, long);

        if(material === "Glass") {
            switch(i) {
                case 0:
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        animation: google.maps.Animation.DROP,
                        icon: bordeauxSchoolIcon
                    });
                    break;

                default:
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
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
                    map: map,
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
                            infowindow.setContent("<br /><center><h1>I.U.T de Bordeaux 1</h1><br />" +
                            "<p align=\"middle\"><b>JAUME Benjamin <br/>" +
                            "AUBOIN Charly <br />" +
                            "BOEZ Mathieu <br />" +
                            "CONGARD Ronan </b></p><br />" +
                            "<p>Address : <b>" + addressGlassFR[i] + "</b></p><br />" +
                            '<img src="images/bordeauxSchool.jpg" width="90%" height="80" /></center><br /><br />');
                            infowindow.open(map, marker);
                            break;
                        default:
                            infowindow.setContent("<br /><center><h1>" + material + " container n°" + i + "</h1></center><br />" +
                                "<table><tr>" + 
                                "<td>" +
                                    '<center><p>Address : <b>' + addressGlassFR[i] + '</b></p></center><br />' + 
                                "</td></tr>" +
                                "<tr><td>" +
                                    '<center>' + 
                                        '<img src="images/france_containers/glass/' + i + '/' + i + '_1.jpg" width="100%" height="150" />' +
                                    '</center>' +
                                "</tr><tr><td>" +
                                    '<br />' +
                                    '<center>' + 
                                        '<img src="images/france_containers/glass/' + i + '/' + i + '_2.jpg" width="100%" height="150" />' +
                                    '</center>' +
                                "</td></tr></table><br />");
                            infowindow.open(map, marker);
                            break;
                    }
                }
                else {
                    if(material === "Clothes") {
                        infowindow.setContent("<br /><center><h1>" + material + " container n°" + (i+1) + "</h1></center><br />" +
                                "<table>" +
                                    '<tr width="100%">' +
                                        "<td>" +
                                            '<center><p>Address : <b>' + addressClothesFR[i] + '</b></p></center><br />' + 
                                        "</td>" +
                                    "</tr>" +
                                    '<tr width="100%">' +
                                        "<td>" +
                                            '<center><img src="images/france_containers/clothes/' + (i+1) + '/' + (i+1) + '_1.jpg"' + 
                                            'width="100%" height="175" /></center>' +
                                        "</td>" +
                                    "</tr>" +
                                "</table><br />");
                        infowindow.open(map, marker);
                    }
                }
            };
        })(marker, markerCount));  

        //Pans map to the French School location
        /*if(i === 0) {
            map.panTo(myLatLng);
        }*/

        map.addListener('click', function() {
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
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: wilhelmshavenSchoolIcon
                });
                break;

            default:
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
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
                        infowindow.setContent("<br /><center><h1>Jade Hochschule</h1><br />" +
                            "<p align=\"middle\"><b>TRAUTSCHOLD Johanna <br/>" +
                            "NORDHAUSEN Tobias <br />" +
                            "PALANG Sepideh </b></p><br />" +
                            "<p>Address : <b>" + addressGR[i] + "</b></p><br />" +
                            '<img src="images/wilhelmshavenSchool.jpg" width="100%" height="120" /></center>');
                        
                        
                        infowindow.open(map, marker);
                        break;
                    default:
                        infowindow.setContent("<br /><center><h1>Container n°" + i + "</h1></center><br />" +
                                "<table><tr>" + 
                                "<td>" +
                                    '<center><p>Address : <b>' + addressGR[i] + '</b></p></center><br />' + 
                                "</td></tr>" +
                                "<tr><td>" +
                                    '<center>' +
                                        '<img src="images/germany_containers/' + i + '/' + i + '_1.jpg" width="80%" height="150" />' +
                                    '</center>' +
                                "</tr><tr><td>" +
                                    '<br />' +
                                    '<center>' + 
                                        '<img src="images/germany_containers/' + i + '/' + i + '_2.jpg" width="80%" height="150" />' + 
                                    '</center>' +
                                "</td></tr></table><br />");
                        infowindow.open(map, marker);
                        break;
                }

            };
        })(marker, markerCount));  

        //Pans map to the German School location
        /*if(i === 0) {
            map.panTo(myLatLng);
        }*/

        map.addListener('click', function() {
            if (infowindow) {
                infowindow.close();
            }
        });
    }
    
}