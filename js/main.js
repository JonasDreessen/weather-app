const key = '919c5edf6c3606dd2160fcd891f6a289';
const input = document.querySelector('.city');
const button = document.querySelector('.submit-city');


function getWeather() {
  button.addEventListener('click', async function () {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`;
    let response = await axios.get(api);
    displayWeather(response);

  })
}

getWeather();

function displayWeather(response) {
  //var celcius = Math.round(parseFloat(response.data.list[0].main.temp)-273.15);
  //var weatherDescription = response.data.list[0].weather[0].description;
  //var weatherHumidity = response.data.list[0].main.humidity;
  //var cityName = response.data.city.name;
  var monday = document.querySelector(".monday");
  var tuesday = document.querySelector(".tuesday");
  var wednesday = document.querySelector(".wednesday");
  var thursday = document.querySelector(".thursday");
  var friday = document.querySelector(".friday");

  // monday results
  monday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[0].main.temp) - 273.15) + ' degrees';
  monday.querySelector(".humidity").innerHTML = response.data.list[0].main.humidity + '%';
  monday.querySelector(".description").innerHTML = response.data.list[0].weather[0].description;
  monday.querySelector(".city-name").innerHTML = response.data.city.name;

  // tuesday resuts 
  tuesday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[8].main.temp) - 273.15) + ' degrees';
  tuesday.querySelector(".humidity").innerHTML = response.data.list[8].main.humidity + '%';
  tuesday.querySelector(".description").innerHTML = response.data.list[8].weather[0].description;
  tuesday.querySelector(".city-name").innerHTML = response.data.city.name;

  // wednesday results 
  wednesday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[16].main.temp) - 273.15) + ' degrees';
  wednesday.querySelector(".humidity").innerHTML = response.data.list[16].main.humidity + '%';
  wednesday.querySelector(".description").innerHTML = response.data.list[16].weather[0].description;
  wednesday.querySelector(".city-name").innerHTML = response.data.city.name;

  // thursday results 
  thursday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[24].main.temp) - 273.15) + ' degrees';
  thursday.querySelector(".humidity").innerHTML = response.data.list[24].main.humidity + '%';
  thursday.querySelector(".description").innerHTML = response.data.list[24].weather[0].description;
  thursday.querySelector(".city-name").innerHTML = response.data.city.name;

  // friday results 
  friday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[32].main.temp) - 273.15) + ' degrees';
  friday.querySelector(".humidity").innerHTML = response.data.list[32].main.humidity + '%';
  friday.querySelector(".description").innerHTML = response.data.list[32].weather[0].description;
  friday.querySelector(".city-name").innerHTML = response.data.city.name;

  // background styling
  var dayForecastList = document.querySelectorAll('.dayforecast');
  var descriptionList = [];
  dayForecastList.forEach(result => {
    console.log(result.querySelector('.description').innerText)
  });



}