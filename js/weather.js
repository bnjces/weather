$(document).ready(function () {
    console.log("ready!");          // logs that all is well w/ JQuery + the page loaded
    var html = $("#output").html();
    $("#output").html("getting weather...");
    getWeather();
    getWeather5Day();
});

function getWeather() {
    // get what in the zip text box
    // jQuery: use val() to get value of form input
    var zip = $("#zip").val();
    console.log(zip);
    console.log(zip.length);
    if(zip.length != 5){
        // if not a valid zip, use default of Philly
        zip = "19130";
    }
    zip += ",us"; // per API documentation, ",us" must be added to end of ZIP

    var url = "http://api.openweathermap.org/data/2.5/weather";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "data": {zip: zip, APPID: apiKey, units: "imperial"},  
        "method": "GET",
        "headers": {}
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#output").html("");
        $("#city").text(response.name);
        $("#temp").text("The temperature is: " + response.main.temp + "°F");
        $("#humidity").text("Current humidity: " + response.main.humidity + "%");
        $("#pressure").text("The pressure is: " + (response.main.pressure * 0.02953) + " inHg"); // conversion from hpa to inHg
        $("#weather").text("Current conditions: " + response.weather[0].main);
        $("#description").text(response.weather[0].description);
        let dirhtml = "<i style='display: inline-block; transform: rotate(" + response.wind.deg + "deg)'>&uarr;</i>" 
        // this works if you want to display a raw heading --- $("#wind").text("The current wind speed is: " + response.wind.speed + "mph with a heading of " + response.wind.deg);
        $("#wind").html("Winds are blowing " + dirhtml + " at " + response.wind.speed + " mph");
        var src = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@4x.png"; // setting location of weather icons
        $("#image").attr("src", src)

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
