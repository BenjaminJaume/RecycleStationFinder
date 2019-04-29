var init = function () {
    var button_1 = document.getElementById("france");
    var button_2 = document.getElementById("germany");
    
    button_1.addEventListener("touchstart", touchstarthandler, false);
    button_1.addEventListener("touchend", touchendhandler, false);  
    
    button_2.addEventListener("touchstart", touchstarthandler, false);
    button_2.addEventListener("touchend", touchendhandler,false);  
};

window.addEventListener("load", init, false);  

var preventDefaultScroll = function(event) {
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);

document.addEventListener("deviceready", onDeviceReady, false); 

function onDeviceReady(event) {
    navigator.splashscreen.hide();
}

function touchstarthandler(event) {
    var button = event.target;
    button.className = "pressed";
}

function touchendhandler(event) {
    var button = event.target;
    button.className = "selected";
    var country = selected_country();
    maps(country);
}

function selected_country() {
    var button_1 = document.getElementById("france");
    var button_2 = document.getElementById("germany");
    var country;
    
    if (button_1.className == "selected") {
        //alert("france");
        button_1.className = "";
        country = "france";
    }
    else if(button_2.className == "selected") {
        //alert("germany");
        button_2.className = "";
        country = "germany";
    } 
    return(country);
}