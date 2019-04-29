var init = function () 
{
    var b1= document.getElementById("france");
    var b2= document.getElementById("germany");
    
    b1.addEventListener("touchstart", touchstarthandler,false);
    b1.addEventListener("touchend", touchendhandler,false);  
    
    
    b2.addEventListener("touchstart", touchstarthandler, false);
    b2.addEventListener("touchend",touchendhandler,false);  
};

window.addEventListener("load", init, false);  

var preventDefaultScroll = function(event) 
{
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);


document.addEventListener("deviceready",onDeviceReady,false); 

function onDeviceReady(event)
{ 
    //navigator.splashscreen.hide();
}

function touchstarthandler(event)
{
    var button= event.target;
    button.className ="pressed";
}


function touchendhandler(event)
{
    var button= event.target;
    button.className ="selected";
    country();
}


function country()
{
    var b1= document.getElementById("france");
    var b2= document.getElementById("germany");
    var a;
    if (b1.className == "selected")
    {
        //alert("france");
        b1.className = "";
        a = "france";
        
    }
    else if(b2.className == "selected") 
    {
        //alert("germany");
        b2.className = "";
        a ="germany";
    }
    return a;    
}







