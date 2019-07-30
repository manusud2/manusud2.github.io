var caption1 = document.querySelector('#div-temple1');

var requestURL = 'https://manusud2.github.io/assignments/temple-inn-suites/Json-files/temples.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() 
{
  var jsonObj = request.response;
  var heroes = jsonObj['temples'];    
  console.log(heroes);
  
  for (var i = 0; i < heroes.length; i++) 
  {
    if (heroes[i].name == 'Recife') 

      var myArticle = document.createElement('article');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myList1 = document.createElement('ul');
      var myList2 = document.createElement('ul');
      var myList3 = document.createElement('ul');
      var myList4 = document.createElement('ul');
  
      myPara1.textContent = 'Address: ' + heroes[i].address;
      myPara2.textContent = 'Telephone: ' + heroes[i].telephone;
                
      var services = heroes[i].services;
      for (var j = 0; j < services.length; j++) 
      {
        var listItem = document.createElement('li');
        listItem.textContent = services[j];
        myList1.appendChild(listItem);
      }
  
      var history = heroes[i].history;
      for (var j = 0; j < history.length; j++) 
      {
        var listItem = document.createElement('li');
        listItem.textContent = history[j];
        myList2.appendChild(listItem);
      }
  
      var schedule = heroes[i].schedule;
      for (var j = 0; j < schedule.length; j++) 
      {
        var listItem = document.createElement('li');
        listItem.textContent = schedule[j];
        myList3.appendChild(listItem);
      }
  
      var closures = heroes[i].closures;
      for (var j = 0; j < closures.length; j++) 
      {
        var listItem = document.createElement('li');
        listItem.textContent = closures[j];
        myList4.appendChild(listItem);
      }
  
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myList1);
      myArticle.appendChild(myList2);
      myArticle.appendChild(myList3);
      myArticle.appendChild(myList4);
  
      caption1.appendChild(myArticle);
  }
}
  