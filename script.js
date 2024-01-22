const input = document.querySelector("#cityInput");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
    const city = input.value;
    const apiKey = '05c70397ea0ecd259bb8dc524ad5abeb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
               alert('City not found');
            } else {
                icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
                weather.textContent = data.weather[0].main;
                temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
                description.textContent = data.weather[0].description;
            }
        })
        .catch(error => console.log('Error fetching weather data:', error));
});

