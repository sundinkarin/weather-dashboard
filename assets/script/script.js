// fb37deb34ed0a161369c78079dba7788
var apiKey = "fb37deb34ed0a161369c78079dba7788"
var searchButton = document.querySelector("#submit")
var rightColumn = document.querySelector(".rightColumn")

function weatherForecast() {
    event.preventDefault()
    var cityInput = document.querySelector("#city").value
    console.log(cityInput)
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&limit=10&appid=456382b69ba78bc0d18ae825d9b6baff')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayTodaysWeather(data)
            var lat = data[0].lat
            console.log(lat)
            var lon = data[0].lon
            console.log(lon)
            actualWeather(lat, lon)
        });
}

function actualWeather(latParam, lonParam) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latParam + '&lon=' + lonParam + '&appid=456382b69ba78bc0d18ae825d9b6baff')
        .then((response) => response.json())
        .then((data) => console.log(data));

}
function displayTodaysWeather(dataParameter) {
    var currentDate = new Date().toLocaleDateString()
    rightColumn.innerHTML = ""
    var cityNameEl = document.createElement("p")
    cityNameEl.innerHTML = dataParameter[0].name + " " + currentDate
    rightColumn.appendChild(cityNameEl)
    var tempToday = document.createElement("p")
    // tempToday.innerHTML = 
}

searchButton.addEventListener("click", weatherForecast)

// this is the first api call
//   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//   this is the second api call
//   api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// weatherForecast()