import mainData from "../mainData.js";

export default function initMainData() {
    mainData.controls = {};
    mainData.controls.buttonSearch = document.querySelector(".search--button");
    mainData.controls.buttonRefresh = document.querySelector(".refresh");
    mainData.controls.language = document.querySelector(".language");
    mainData.controls.fahrenheit = document.querySelector(".fahrenheit");
    mainData.controls.celsius = document.querySelector(".celsius");
    mainData.controls.searchInput = document.querySelector(".search--input");
    mainData.controls.microphone = document.querySelector(".search--microphone");
    mainData.controls.informationLongitude = document.querySelector(".longitude");
    mainData.controls.informationLatitude = document.querySelector(".latitude");

    mainData.textContent = {};
    mainData.textContent.locationCity = document.querySelector(".information--location-city");
    mainData.textContent.locationCountry = document.querySelector(".information--location-country");
    mainData.textContent.currentDate = document.querySelector(".information--date");

    mainData.textContent.currentShortWeather = document.querySelector(".information--short");
    mainData.textContent.currentTemperature = document.querySelector(".information--current-temperature");
    mainData.textContent.currentIcon = document.querySelector(".information--current-icon");

    mainData.textContent.currentFeels = document.querySelector(".information--detail-feels");
    mainData.textContent.currentWind = document.querySelector(".information--detail-wind");
    mainData.textContent.currentHumidity = document.querySelector(".information--detail-humidity");

    mainData.textContent.weekDay = document.querySelectorAll(".information--daily-week_day");
    mainData.textContent.dailyIcon = document.querySelectorAll(".information--daily-icon");
    mainData.textContent.dailyTemperatureDay = document.querySelectorAll(".information--daily-day");
    mainData.textContent.dailyTemperatureNight = document.querySelectorAll(".information--daily-night");
}