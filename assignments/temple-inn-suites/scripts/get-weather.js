var description1 = document.querySelector('#t1-w-desc');
var description2= document.querySelector('#t2-w-desc');
var description3 = document.querySelector('#t3-w-desc');
var description4 = document.querySelector('#t4-w-desc');

var requestURL3 = 'http://api.openweathermap.org/data/2.5/group?id=6322752,3448439,3390760,3467865&units=metric&appid=0534323de95d302eb2a014693fae5d01';
var request3 = new XMLHttpRequest();
request3.open('GET', requestURL3);
request3.responseType = 'json';
request3.send();

request3.onload = function() 
{
  var jsonObj2 = request3.response;
  var jsonlist = jsonObj2.list;
//  for (var i = 0; i < jsonlist.length; i++) 
//{
i = 0;
document.getElementById("t1-w-desc").innerHTML = '<spam>' + jsonlist[i].name + ', ' + jsonlist[i].sys.country +  ' - ' + jsonlist[i].main.temp.toFixed(0) + '°C - ' + jsonlist[i].weather[0].description
    + '</spam><img style="width: 30px;" class="temple-weather-icon" src="https://openweathermap.org/img/wn/' + jsonlist[i].weather[0].icon + '@2x.png">';
}