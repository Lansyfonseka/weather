import mainData from "../mainData.js";
import getWeather from "../api/getWeather.js";

export default async function processingWeather() {
    const data = await getWeather();

    const currentlyWeather = {
        icon: data.currently.icon,
        temperature: Math.round(data.currently.temperature),
        humidity: Math.round(data.currently.humidity * 100),
        windSpeed: Math.round(data.currently.windSpeed),
        apparentTemperature: Math.round(data.currently.apparentTemperature)
    };
    const daily = data.daily.data;
    const dailyWeather = {
        0: {
            icon: daily[0].icon,
            temperatureMax: Math.round(daily[0].temperatureMax),
            temperatureMin: Math.round(daily[0].temperatureMin)
        },
        1: {
            icon: daily[1].icon,
            temperatureMax: Math.round(daily[1].temperatureMax),
            temperatureMin: Math.round(daily[1].temperatureMin)
        },
        2: {
            icon: daily[2].icon,
            temperatureMax: Math.round(daily[2].temperatureMax),
            temperatureMin: Math.round(daily[2].temperatureMin)
        }
    }
    return { currentlyWeather, dailyWeather };
}