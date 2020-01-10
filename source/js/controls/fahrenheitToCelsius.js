import mainData from "../mainData.js";
import mapData from "../mapData.js";

export default function fahrenheitToCelsius(){
    mainData.temperature = "C";
    localStorage.temperature = mainData.temperature;
    mainData.controls.fahrenheit.classList.toggle("degree-active");
    mainData.controls.celsius.classList.toggle("degree-active");
    
    const weather =  mainData.weather;
    const lng = mainData.language;

    mainData.textContent.currentTemperature.textContent = `${weather.currentlyWeather.temperature}°`;
    mainData.textContent.currentFeels.textContent = `${mapData[lng].other[4]}: ${weather.currentlyWeather.apparentTemperature}°`;
    for (let key in weather.dailyWeather){
        mainData.textContent.dailyTemperatureDay[key].textContent = `${weather.dailyWeather[key].temperatureMax}°`;
        mainData.textContent.dailyTemperatureNight[key].textContent = `${weather.dailyWeather[key].temperatureMin}°`;
    }  
}