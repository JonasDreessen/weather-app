const key = '919c5edf6c3606dd2160fcd891f6a289';
const input = document.querySelector('.city');
const button = document.querySelector('.submit-city');


function getWeather(){
  button.addEventListener('click', async function(){
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`;
    let response = await axios.get(api);
    displayWeather(response);
    
  })
}

getWeather();

function displayWeather(response) {
	var celcius = Math.round(parseFloat(response.data.list[0].main.temp)-273.15);
  var weatherDescription = response.data.list[0].weather[0].description;
  var weatherHumidity = response.data.list[0].main.humidity;
  var cityName = response.data.city.name;

  document.getElementById("description").innerHTML = weatherDescription;
  document.getElementById("temp").innerHTML = celcius + "(c)";
  document.getElementById("humidity").innerHTML = `humidity: ${weatherHumidity}%`;
  document.getElementById("location").innerHTML = cityName;

  console.log(response.data);
}