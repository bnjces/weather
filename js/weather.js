$(document).ready(function () {
    console.log("ready!");
    var html = $("#output").html();
    $("#output").html("getting weather...");
    getWeather();
    getWeather5Day();
});

function getWeather() {
    // get what in the zip text box
    // jQuery use val() to get value of form input
    var zip = $("#zip").val();
    console.log(zip);
    console.log(zip.length);
    if(zip.length != 5){
        // if not a valid zip, use default of school
        zip = "19130";
    }
    zip += ",us";

    var url = "http://api.openweathermap.org/data/2.5/weather";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "data": {zip: zip, APPID: apiKey},
        "method": "GET",
        "headers": {}
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#output").html("");
    })
}

function getWeather5Day() {
    // get what in the zip text box
    var zip = $("#zip").val();
    console.log(zip);
    console.log(zip.length)
    if(zip.length != 5){
        // if not a valid zip, use default of school
        zip = "19130"
    }
    zip += ",us";
}
