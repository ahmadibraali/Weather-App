//http://api.weatherapi.com/v1/current.json?key=642336a3d9c3baca25d8bebe594147c7&q=London

//key=0b724daeb5904886ace151353232809
const apiKey = "0b724daeb5904886ace151353232809";
const apiUrl = `http://api.weatherapi.com/v1/current.json?aqi=no&key=0b724daeb5904886ace151353232809&q=`;
const searchBox = document.querySelector(".search input");
const btnSearch = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weath = document.querySelector(".weather");
function checkWeather(city) {
  //   const response = await fetch(apiKey + `&key=${apiKey}`);
  //   var data = await response.json();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl + `${city}`);
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.response);
      console.log(data);

      document.querySelector(".city").innerHTML = data.location.name;
      document.querySelector(".temp").innerHTML = data.current.temp_c + ` °c`;
      document.querySelector(".humidity").innerHTML =
        data.current.humidity + `%`;
      document.querySelector(".wind").innerHTML =
        data.current.wind_kph + " Km/H - " + data.current.wind_dir;
      var cond = data.current.condition.text.toLowerCase();
      weatherIcon.src = "images/" + cond + ".png";
      weath.style.display = "block";
    } else {
      weath.style.display = "none";
      document.querySelector(".error").style.display = "block";
    }
  });
}

btnSearch.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
//checkWeather();
