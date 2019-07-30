if (navigator.geolocation) 
{
    navigator.geolocation.getCurrentPosition(getWeather);
} 
else
{
    alert("Geolocation is not supported by this browser.");
}

// get Json Questions from URL
function getWeather(position)
{
    let requestURL2 = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=" 
    + position.coords.latitude + "&lon=" + position.coords.longitude 
    + "&APPID=0534323de95d302eb2a014693fae5d01";

    var request2 = new XMLHttpRequest();
    request2.open('GET', requestURL2);
    request2.responseType = 'json';
    request2.send();

    request2.onload = function() 
    {
        var jsonObj2 = request2.response;
        console.log(jsonObj2);
        document.getElementById("temp-weather").innerHTML = jsonObj2.main.temp + '°C';
        document.getElementById("desc-weather").innerHTML = jsonObj2.weather[0].description.toUpperCase();
        document.getElementById("city-weather").innerHTML = jsonObj2.name + ', ' + jsonObj2.sys.country;
        document.getElementById("icon-weather").innerHTML = 
        '<img class="icon" alt="' + jsonObj2.weather[0].description + '" ' +
        ' src="https://openweathermap.org/img/wn/' + jsonObj2.weather[0].icon + '@2x.png">';
    }
}