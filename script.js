//Feature #1: In your project, display the current date and time using JavaScript: Tuesday 16:00
let todayDay = document.querySelector("#today");
let now = new Date();
let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
let day = days[now.getDay()];
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${minutes}`;
}

let time = `${hours}:${minutes}`;
console.log(minutes);
todayDay.innerHTML = `${day} ${time} Local time`;
//console.log(todayDay);
//WEATHER API #2
function showTemp(response) {
  let cityTemp = Math.round(response.data.main.temp);
  console.log(response);
  let currentTemp = document.querySelector("#searchWeather");
  currentTemp.innerHTML = `${cityTemp}C°`;
}

//Feature #2: Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function searching(event) {
  event.preventDefault();
  let input = document.querySelector("#searchInput");
  console.log(input.value);
  let city = document.querySelector("#cityName");
  city.innerHTML = `${input.value}`;
  //WEATHER API #1
  let apiKey = "7f49da17ae8de3da1886c2c886574334";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", searching);

//Bonus Feature::Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
function convertCelcius() {
  let todayTemp = document.querySelector(".temperature");
  console.log(todayTemp);
  todayTemp.innerHTML = `66°F`;
}
function convertFahrenheit() {
  let todayTemp = document.querySelector(".temperature");
  console.log(todayTemp);
  todayTemp.innerHTML = `35°C`;
}

let fahren = document.querySelector("#FARENHEIT");
fahren.addEventListener("click", convertCelcius);
let celc = document.querySelector("#CELCIUS");
celc.addEventListener("click", convertFahrenheit);

//GEOLOCATION  /// IS NOT TOTALLY WORKING YET
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let APIkey = "7f49da17ae8de3da1886c2c886574334";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
  console.log(apiURL);
  console.log(position);
  axios.get(apiURL).then(showTemp);
  //let localCity= document.querySelector("#cityName");
  //localCity.innerHTML= ;
}
function getCurrentPosition(position) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#localWeather");
button.addEventListener("click", getCurrentPosition);
