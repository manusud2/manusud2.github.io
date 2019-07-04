var figcaption1 = document.querySelector('#div-preston');
var figcaption2 = document.querySelector('#div-soda');
var figcaption3 = document.querySelector('#div-haven');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() 
{
  var jsonObj = request.response;
  var heroes = jsonObj['towns'];
      
  for (var i = 0; i < heroes.length; i++) 
  {
    if (heroes[i].name == 'Preston') 
    {
      var myArticle = document.createElement('article');
      var myH3 = document.createElement('h3');
      var myH4 = document.createElement('h4');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');

      myH3.textContent = heroes[i].name;
      myH4.textContent = heroes[i].motto;
      myPara1.textContent = 'Year Founded: ' + heroes[i].yearFounded;
      myPara2.textContent = 'Population: ' + heroes[i].currentPopulation;
      myPara3.textContent = 'Annual Rain Fall :' + heroes[i].averageRainfall;
          
      myArticle.appendChild(myH3);
      myArticle.appendChild(myH4);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);

      figcaption1.appendChild(myArticle);
    }

    if (heroes[i].name == 'Soda Springs') 
    {
      var myArticle = document.createElement('article');
      var myH3 = document.createElement('h3');
      var myH4 = document.createElement('h4');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');

      myH3.textContent = heroes[i].name;
      myH4.textContent = heroes[i].motto;
      myPara1.textContent = 'Year Founded: ' + heroes[i].yearFounded;
      myPara2.textContent = 'Population: ' + heroes[i].currentPopulation;
      myPara3.textContent = 'Annual Rain Fall :' + heroes[i].averageRainfall;
          
      myArticle.appendChild(myH3);
      myArticle.appendChild(myH4);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);

      figcaption2.appendChild(myArticle);
    }

    if (heroes[i].name == 'Fish Haven') 
    {
      var myArticle = document.createElement('article');
      var myH3 = document.createElement('h3');
      var myH4 = document.createElement('h4');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');

      myH3.textContent = heroes[i].name;
      myH4.textContent = heroes[i].motto;
      myPara1.textContent = 'Year Founded: ' + heroes[i].yearFounded;
      myPara2.textContent = 'Population: ' + heroes[i].currentPopulation;
      myPara3.textContent = 'Annual Rain Fall :' + heroes[i].averageRainfall;
          
      myArticle.appendChild(myH3);
      myArticle.appendChild(myH4);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);

      figcaption3.appendChild(myArticle);
    }
  }
 }
