var myEvents = document.getElementById('events');

var requestURL3 = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request3 = new XMLHttpRequest();
request3.open('GET', requestURL3);
request3.responseType = 'json';
request3.send();

request3.onload = function() 
{
  var jsonObj3 = request3.response;
  var heroes = jsonObj3['towns'];
      
  for (var i = 0; i < heroes.length; i++) 
  {
    if (heroes[i].name == 'Soda Springs') 
    {
      var myArticle = document.createElement('article');
      var myH4 = document.createElement('h4');
      var myul = document.createElement('ul');
      
      myH4.textContent = 'Events in Soda Springs';
      myH4.setAttribute("id","h4-events");
         
      for (var i2 = 0; i2 < heroes[i].events.length; i2++) 
      {
        var myli = document.createElement('li');
        myli.textContent = heroes[i].events[i2];
        myul.appendChild(myli);
      }

    myArticle.appendChild(myH4);
    myArticle.appendChild(myul);
    myEvents.appendChild(myArticle);
    }
  }
}
