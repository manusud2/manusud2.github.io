// get Json Questions from URL
function getQuestions(targetURL) 
{
  let headerJSON = {headers: {Accept:  "application/json"}};

  fetch(targetURL, headerJSON)
      .then(response => {return response.json();})
      .then(result => 
        {
          let jsonObj = result['feed'].entry;
          jsonObj.sort(function(a, b){return 0.5 - Math.random()}); // suffle the questions
          displayQuestions(jsonObj);
        })
}

// Get Location e create link to use with api weather site
function getLinkLocation()
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(getWeather);
  } 
  else 
  {
    alert("Geolocation is not supported by this browser.");
  }
}

// get Json Questions from URL
function getWeather(position)
{
  let targetURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" 
  + position.coords.latitude + "&lon=" + position.coords.longitude 
  + "&APPID=0534323de95d302eb2a014693fae5d01";
  let headerJSON = {headers: {Accept:  "application/json"}};

  fetch(targetURL, headerJSON)
      .then(response => {return response.json();})
      .then(result => 
        {
          let jsonObj = result;
          showWheather(jsonObj);
        })
}

// insert Weather Information in the Site
function showWheather(myJson)
{
  document.getElementById("currentWeather").innerHTML = ' | Current Temperature: ' + myJson.main.temp + '°F';
}

// create screen and display question on the screen 
function displayQuestions(questions)
{
  let i = 0;
  let question = document.querySelector('#get-question');
  let pie = document.querySelector('#pie1');
  question.innerHTML = ""; // clear screen
  
  let myPara1 = document.createElement('p');
  let myAnswers = document.createElement('ol');
  let canvasM = document.createElement("canvas");
  canvasM.setAttribute('id','myCanvas1');
  let legendM = document.createElement("div");
  legendM.setAttribute('id','myLegend1');
  pie.appendChild(canvasM);
  pie.appendChild(legendM); 
  
  // get counter question
  let count = document.querySelector('#count');
  count.innerHTML = (cont1+cont2+1) + '/' + (questions.length+cont1+cont2);
  
  //create element and insert question
  myPara1.textContent = questions[i].gsx$question.$t.toUpperCase();
  myPara1.setAttribute('class','question');
  question.appendChild(myPara1);
  
  //create a array with the answers
  let ans = [];
  ans.push(questions[i].gsx$correctanswer.$t);
  ans.push(questions[i].gsx$answer1.$t);
  ans.push(questions[i].gsx$answer2.$t);
  ans.push(questions[i].gsx$answer3.$t);
  ans.push(questions[i].gsx$answer4.$t);
  
  //shuffle answers array
  ans.sort(function(a, b){return 0.5 - Math.random()});
  
  for (let i2 = 0; i2 < ans.length; i2++) 
  {
    let listItem = document.createElement('li');
    let buttonop = document.createElement('button');
    buttonop.setAttribute('class','button');
    buttonop.textContent = ans[i2].toUpperCase();

    buttonop.addEventListener("click", (e) => 
    {
      if (e.target.innerHTML.toUpperCase() == questions[i].gsx$correctanswer.$t.toUpperCase())
      {
        new Audio('sounds/win.wav').play();
        cont1++;
      }
      else
      {
        cont2++;
        new Audio('sounds/lose.wav').play();
      }
      create_pieChart("myCanvas1","myLegend1",cont1,cont2);
      
      if ((cont1+cont2+1) == 11)
      {
        displayFinalScreen();
      }
      else
      {
        questions.shift(); // delete old question
        displayQuestions(questions); // get new question
      }
    });

    listItem.appendChild(buttonop); // add buttons on li element
    myAnswers.appendChild(listItem); // add ol element
  }
  question.appendChild(myAnswers); //insert answers
}

function displayFinalScreen()
{
  let question = document.querySelector('#get-question');
  question.innerHTML = ""; // clear screen
  let grade = cont1/(cont1+cont2);
  console.log(grade);
  if (grade == 0){var key = '3orieV4J8MNjklR3aw'}
  if (grade > 0 && grade <= .3){var key = 'l0CLTGoSHtPVl1n0Y'}
  if (grade > .3 && grade <= .5){var key = '2UAbwCE8sHZhJSn5bn'}
  if (grade > .5 && grade < .8){var key = '3j9GMdAudtrc9so7m1'}
  if (grade >= .8 && grade < 1){var key = 'd31w24psGYeekCZy'}
  if (grade == 1){var key = '3o6fIUZTTDl0IDjbZS'}

  question.innerHTML = '<iframe src="https://giphy.com/embed/' + key + '" width="100%" height="100%" style="position:relative" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
}

 let cont1 = 0;
 let cont2 = 0;

window.addEventListener("load", () => 
{
  let targetURL = 'https://spreadsheets.google.com/feeds/list/16oLtg3CdTeU0ULE4tEriz8wHNL4afQlu4hp1TcAkSTI/od6/public/values?alt=json';
  getLinkLocation();
  getQuestions(targetURL);
});