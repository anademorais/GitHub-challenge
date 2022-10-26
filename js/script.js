let now = new Date();

let currentDate = document.querySelector("#date");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
currentDate.innerHTML = `${day}</br>${hours}:${minutes}`;

function newCity(event) {
	event.preventDefault();
	let searchCity = document.querySelector("#search-city");
	let h1 = document.querySelector("h1");
	h1.innerHTML = `${searchCity.value}`;
}
let typeCity = document.querySelector("#type-city");
typeCity.addEventListener("submit", newCity);

//new
function showTemperature(response) {
	console.log(response);
	document.querySelector("#search-city").innerHTML = response.data.name;
	document.querySelector("#current-temperature").innerHTML = `${Math.round(
		response.data.main.temp
	)}°C `;
	document.querySelector("#description").innerHTML =
		response.data.weather[0].description;
}

function submitting(event) {
	event.preventDefault();
	let searchCity = document.querySelector("#search-city");
	let h1 = document.querySelector("h1");
	h1.innerHTML = `${searchCity.value}`;
	let units = "metric";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e91d8831d4722ffce7b07417a253b9dc&units=${units} `;

	axios.get(apiUrl).then(showTemperature);
}

let formSearch = document.querySelector("#type-city");
formSearch.addEventListener("submit", submitting);

//
function findLocation(position) {
	let apiKey = "a5acb752426cd8188485c35694980e3a";
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	let unit = "metric";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
	axios.get(`${apiUrl}`).then(showTemperature);
}

function getCurrentPosition(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(findLocation);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
