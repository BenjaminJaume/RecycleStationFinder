function initialiser() {
    var latlng = new google.maps.LatLng(44.790915, -0.610595);
    var i;

    var options = {
        center: latlng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), options);
    
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'IUT de Bordeaux 1'
    });

    try {
        //hide splash screen
        navigator.splashscreen.hide();
    } catch (e) {}

    
    
}