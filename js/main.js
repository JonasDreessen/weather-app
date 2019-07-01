// 1283710

/* document.querySelector('.city').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    var cityInput = document.querySelector('.city').value;
    weatherBalloon(cityInput);
  }
});



function weatherBalloon(cityInput) {
var key = '919c5edf6c3606dd2160fcd891f6a289';
const city = document.querySelector(".city").value
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`)
    .then(function (response) {
      return response.json()
    }) 
    // Convert data to json
    .then(function (data) {
      getWeatherOnScreen(data);
    })
}

function getWeatherOnScreen(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;

} */

const key = '919c5edf6c3606dd2160fcd891f6a289';
var input = document.querySelector('.city');

console.log(input);