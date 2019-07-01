var currently = document.querySelector('#currently');
var high = document.querySelector('#high');
var humidity = document.querySelector('#humidity');
var wspeed = document.querySelector('#wspeed');

var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0534323de95d302eb2a014693fae5d01';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() 
{
  var jsonObj = request.response;
  currently.textContent = jsonObj.weather[0].main;     
  high.textContent = jsonObj.main.temp_max.toFixed(0);
  humidity.textContent = jsonObj.main.humidity.toFixed(0);
  wspeed.textContent = jsonObj.wind.speed.toFixed(0);
  
  //Calc Wild Child
  // Input - get input and convert that string to an integer
  let t = parseInt(document.getElementById('high').innerHTML);
  let s = parseInt(document.getElementById('wspeed').innerHTML);
  console.log(t);
  console.log(s);

  // Processing - some random formula processing with the variable
  let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));

  // Output - round to one decimal and output string with HTML to innerHTML of a div
  document.getElementById('wchill').innerHTML = f.toFixed(0);
}