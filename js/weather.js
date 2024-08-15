const apiKey = '662a02f77028e10e54139df0535ce5f9'; //OpenWeather API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='; // Corrected URL

const searchBox = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        console.log(data);
        
        // const temperature = Math.round(data.main.temp) + "°C";
        const temperature = data.main.temp + "°C";
        const weatherDescription = data.weather[0].description; // Get the weather description
        const weatherIconCode = data.weather[0].icon; // Get the weather icon code

        // Combine temperature and description into a single string
        const weatherSummary = `${temperature} <br> ${weatherDescription}`;

        // Update the HTML with the weather summary
        document.querySelector(".temp").innerHTML = weatherSummary;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        // Determine the correct icon based on the icon code
        if (weatherIconCode.includes("d")) {
            // It's daytime
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            } else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }
        } else {
            // It's nighttime
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds-night.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear-night.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain-night.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle-night.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist-night.png";
            } else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        getWeather(city);
    }
});
