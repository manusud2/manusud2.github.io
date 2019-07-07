var requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=0534323de95d302eb2a014693fae5d01';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() 
{
  var jsonObj2 = request2.response;
  populateFiveDays(jsonObj2);
}

function populateFiveDays(jsonObj3)
{
var days = jsonObj3['list'];

  for (var i = 0; i < days.length; i++) 
  {
    if (days[i].dt_txt.includes("18:00:00"))
    {
      var div = document.createElement("div");
      div.style.order = 0;
      div.innerHTML = getDayWeek(days[i].dt_txt.substring(0,10));
      div.setAttribute('class','tb date');
      document.getElementById("5days").appendChild(div);

      var div = document.createElement("div");
      div.style.order = 1;
      div.innerHTML = '<img class="icon" alt="' + days[i].weather[0].description + '" ' +
                      ' src="https://openweathermap.org/img/wn/' + days[i].weather[0].icon + '@2x.png">';
      
      div.setAttribute('class','tb');
      document.getElementById("5days").appendChild(div);

      var div = document.createElement("div");
      div.style.order = 2;
      div.innerHTML = days[i].main.temp.toFixed(0) + '°F';
      div.setAttribute('class','tb temp');
      document.getElementById("5days").appendChild(div);
    }
  }
}

function getDayWeek(dateFull)
{
  var d = new Date(dateFull);
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  return weekday[d.getDay()];
}