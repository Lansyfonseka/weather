import mainData from "../mainData.js";
import mapData from "../mapData.js";
import convertCelsiusToFahrenheit from "../controls/convertCelsiusToFahrenheit.js";

export default function renderWeather(weather){
    const lng = mainData.language;

    if (mainData.temperature === "F"){
        mainData.textContent.currentTemperature.textContent = `${convertCelsiusToFahrenheit(weather.currentlyWeather.temperature)}°`;
        mainData.textContent.currentFeels.textContent = `${mapData[lng].other[4]}: ${convertCelsiusToFahrenheit(weather.currentlyWeather.apparentTemperature)}°`;
        for (let key in weather.dailyWeather){
            mainData.textContent.dailyTemperatureDay[key].textContent = `${convertCelsiusToFahrenheit(weather.dailyWeather[key].temperatureMax)}°`;
            mainData.textContent.dailyTemperatureNight[key].textContent = `${convertCelsiusToFahrenheit(weather.dailyWeather[key].temperatureMin)}°`;
        }  
    }

    if (mainData.temperature === "C"){
        mainData.textContent.currentTemperature.textContent = `${weather.currentlyWeather.temperature}°`;
        mainData.textContent.currentFeels.textContent = `${mapData[lng].other[4]}: ${weather.currentlyWeather.apparentTemperature}°`;
        for (let key in weather.dailyWeather){
            mainData.textContent.dailyTemperatureDay[key].textContent = `${weather.dailyWeather[key].temperatureMax}°`;
            mainData.textContent.dailyTemperatureNight[key].textContent = `${weather.dailyWeather[key].temperatureMin}°`;
        }  
    }

    mainData.textContent.locationCity.textContent = mainData.location.city;
    mainData.textContent.locationCountry.textContent = mainData.location.country;
    mainData.textContent.currentDate.textContent = "";

    mainData.textContent.currentShortWeather.textContent = mapData[lng].weather[weather.currentlyWeather.icon];
    mainData.textContent.currentIcon.src = `./source/images/weather/${weather.currentlyWeather.icon}.svg`;
    
    mainData.textContent.currentWind.textContent = `${mapData[lng].other[5]}: ${weather.currentlyWeather.windSpeed}${mapData.en.other[6]}`;
    mainData.textContent.currentHumidity.textContent = `${mapData[lng].other[7]}: ${weather.currentlyWeather.humidity}`;
    
    for (let key in weather.dailyWeather){
        mainData.textContent.dailyIcon[key].src = `./source/images/weather/${weather.dailyWeather[key].icon}.svg`;
    }
}