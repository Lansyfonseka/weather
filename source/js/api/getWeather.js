import mainData from "../mainData.js";

export default async function getWeather() {
    const latitude = mainData.location.location[0].toFixed(4);
    const longitude = mainData.location.location[1].toFixed(4);
    const API_TOKEN = "f46917c915960a0babc0ffe9378482a5";
    const proxy = "https://evening-basin-27448.herokuapp.com/";
    const URL = `https://api.darksky.net/forecast/${API_TOKEN}/${latitude},${longitude}?units=si`;
    const data = await fetch(proxy + URL).then(res => res.json());
    return data;
}