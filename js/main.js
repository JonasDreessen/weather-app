const key = '919c5edf6c3606dd2160fcd891f6a289';
const input = document.querySelector('.city');
const button = document.querySelector('.submit-city');


function getWeather(){
  button.addEventListener('click', async function(){
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`;
    let response = await axios.get(api);
    displayWeather( response );
    
  })
}
getWeather();

function displayWeather( response ) {
	var celcius = Math.round(parseFloat(response.main.temp)-273.15);
	
	document.getElementById('description').innerHTML = response.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = response.name;
}