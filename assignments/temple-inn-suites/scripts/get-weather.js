var requestURL3 = 'https://api.openweathermap.org/data/2.5/group?id=6322752,3448439,3390760,3467865&units=metric&appid=0534323de95d302eb2a014693fae5d01';
var request3 = new XMLHttpRequest();
request3.open('GET', requestURL3);
request3.responseType = 'json';
request3.send();

request3.onload = function() 
{
  var jsonObj2 = request3.response;
  var jsonlist = jsonObj2.list;
  for (var i = 0; i < jsonlist.length; i++) 
  {
    if(jsonlist[i].name == 'Recife')    {append_info("t1-w-desc",i,jsonlist)}
    if(jsonlist[i].name == 'Curitiba')  {append_info("t2-w-desc",i,jsonlist)}
    if(jsonlist[i].name == 'Campinas')  {append_info("t3-w-desc",i,jsonlist)}
    if(jsonlist[i].name == 'Sao Paulo') {append_info("t4-w-desc",i,jsonlist)}
  }
}

function append_info(id_item, i,jsonlist)
{
  document.getElementById(id_item).innerHTML = '<spam>' + jsonlist[i].name + ', ' + jsonlist[i].sys.country +  ' | ' + jsonlist[i].main.temp.toFixed(0) + '°C | ' + jsonlist[i].weather[0].description
  + '</spam><img style="width: 30px;" class="temple-weather-icon" src="https://openweathermap.org/img/wn/' + jsonlist[i].weather[0].icon + '@2x.png">';
}
