// fb37deb34ed0a161369c78079dba7788
var apiKey = "fb37deb34ed0a161369c78079dba7788"
var searchButton = document.querySelector("#submit")
function weatherForecast() {
    event.preventDefault()
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Ottawa&limit=10&appid=456382b69ba78bc0d18ae825d9b6baff')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

searchButton.addEventListener("click", weatherForecast)

// this is the first api call
//   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//   this is the second api call
//   api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// weatherForecast()