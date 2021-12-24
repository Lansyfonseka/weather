import convertCelsiusToFahrenheit from "./convertCelsiusToFahrenheit.js";
import mainData from "../mainData.js";
import mapData from "../mapData.js";

export default function celsiusToFahrenheit() {
    mainData.temperature = "F";
    localStorage.temperature = mainData.temperature;
    mainData.controls.fahrenheit.classList.add("degree-active");
    mainData.controls.celsius.classList.remove("degree-active");

    const weather = mainData.weather;
    const lng = mainData.language;

    mainData.textContent.currentTemperature.textContent = `${convertCelsiusToFahrenheit(weather.currentlyWeather.temperature)}°`;
    mainData.textContent.currentFeels.textContent = `${mapData[lng].other[4]}: ${convertCelsiusToFahrenheit(weather.currentlyWeather.apparentTemperature)}°`;
    for (let key in weather.dailyWeather) {
        mainData.textContent.dailyTemperatureDay[key].textContent = `${convertCelsiusToFahrenheit(weather.dailyWeather[key].temperatureMax)}°`;
        mainData.textContent.dailyTemperatureNight[key].textContent = `${convertCelsiusToFahrenheit(weather.dailyWeather[key].temperatureMin)}°`;
    }
}