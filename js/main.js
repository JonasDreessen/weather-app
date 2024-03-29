const key = '919c5edf6c3606dd2160fcd891f6a289';
const input = document.querySelector('.city');
const button = document.querySelector('.submit-city');
const dayOutput = document.getElementsByClassName('day');


let newDay = new Date();
let today = newDay.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Displays the days of the week 
for (d=0; d < dayOutput.length ; d++ ,today++){
    if (today >= 7){
        today = 0;
    }
    dayOutput[d].innerHTML = days[today];
};

// get API from openweathermap
function getWeather() {
  button.addEventListener('click', async function () {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&&APPID=${key}`;
    let response = await axios.get(api);
    displayWeather(response);

  })
}

getWeather();

// get API from unsplash
function cityPicture() {
  button.addEventListener('click', async function () {
    let city = input.value;
    let api = `https://api.unsplash.com/search/photos?client_id=b535a6cdbbb518287e5f7eb089405bc997d29c813ceb4d1084b50780299331c9&page=1&query=${city}`;
    let secondResponse = await axios.get(api);
    displayCityPicture(secondResponse);

  })
}
cityPicture();

function displayCityPicture(secondResponse) {
  var randomPictureNumber = Math.floor(Math.random()*10);
  console.log(randomPictureNumber);
  let imageSource = secondResponse.data.results[randomPictureNumber].urls.full;
  document.body.style.backgroundImage = `url(${imageSource})`;

}


function displayWeather(response) {

  var monday = document.querySelector(".monday");
  var tuesday = document.querySelector(".tuesday");
  var wednesday = document.querySelector(".wednesday");
  var thursday = document.querySelector(".thursday");
  var friday = document.querySelector(".friday");

  // monday results
  //monday.querySelector(".day").innerHTML = weekDays[currentDay];
  monday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[0].main.temp) - 273.15) + ' &#8451';
  monday.querySelector(".humidity").innerHTML = response.data.list[0].main.humidity + '%';
  monday.querySelector(".description").innerHTML = response.data.list[0].weather[0].description;
  monday.querySelector(".city-name").innerHTML = response.data.city.name;

  // tuesday resuts 
  //tuesday.querySelector(".day").innerHTML = weekDays[currentDay + 1];
  tuesday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[8].main.temp) - 273.15) + ' &#8451';
  tuesday.querySelector(".humidity").innerHTML = response.data.list[8].main.humidity + '%';
  tuesday.querySelector(".description").innerHTML = response.data.list[8].weather[0].description;
  tuesday.querySelector(".city-name").innerHTML = response.data.city.name;

  // wednesday results 
  //wednesday.querySelector(".day").innerHTML = weekDays[currentDay + 2];
  wednesday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[16].main.temp) - 273.15) + ' &#8451';
  wednesday.querySelector(".humidity").innerHTML = response.data.list[16].main.humidity + '%';
  wednesday.querySelector(".description").innerHTML = response.data.list[16].weather[0].description;
  wednesday.querySelector(".city-name").innerHTML = response.data.city.name;

  // thursday results 
  //thursday.querySelector(".day").innerHTML = weekDays[currentDay + 3];
  thursday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[24].main.temp) - 273.15) + ' &#8451';
  thursday.querySelector(".humidity").innerHTML = response.data.list[24].main.humidity + '%';
  thursday.querySelector(".description").innerHTML = response.data.list[24].weather[0].description;
  thursday.querySelector(".city-name").innerHTML = response.data.city.name;

  // friday results 
  //friday.querySelector(".day").innerHTML = weekDays[currentDay + 4];
  friday.querySelector(".temperature").innerHTML = Math.round(parseFloat(response.data.list[32].main.temp) - 273.15) + ' &#8451';
  friday.querySelector(".humidity").innerHTML = response.data.list[32].main.humidity + '%';
  friday.querySelector(".description").innerHTML = response.data.list[32].weather[0].description;
  friday.querySelector(".city-name").innerHTML = response.data.city.name;


  // icon variables
  var mondayIcon = response.data.list[0].weather[0].icon;
  var tuesdayIcon = response.data.list[8].weather[0].icon;
  var wednesdayIcon = response.data.list[16].weather[0].icon;
  var thursdayIcon = response.data.list[24].weather[0].icon;
  var fridayIcon = response.data.list[32].weather[0].icon;

  var iconArray = [mondayIcon, tuesdayIcon, wednesdayIcon, thursdayIcon, fridayIcon];

  // background styling

  monday.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconArray[0]}@2x.png)`;

  tuesday.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconArray[1]}@2x.png)`;

  wednesday.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconArray[2]}@2x.png)`;

  thursday.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconArray[3]}@2x.png)`;

  friday.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconArray[4]}@2x.png)`;

}




