import mainData from "./mainData.js";
import HTMLData from "./HTMLData.js";

import initMap from "./api/initMap.js";
import getTime from "./api/getTime.js";
import getNameCity from "./api/getNameCity.js";
import getLocationUser from "./api/getLocationUser.js";

import initControls from "./controls/initControls.js";
import refreshBackground from "./controls/refreshBackground.js";
import processingWeather from "./controls/processingWeather.js";
import initMainData from "./controls/initMainData.js";

import renderWeather from "./view/renderWeather.js";
import renderLocation from "./view/renderLocation.js";
import renderHTML from "./view/renderHTML.js";

async function initFancyWeather(){
    if (!localStorage.language)
        localStorage.language = "en";
    if (!localStorage.temperature)
        localStorage.temperature = "C";

    mainData.language = localStorage.language;
    mainData.temperature = localStorage.temperature;

    renderHTML(HTMLData);
    refreshBackground();
    
    initMainData();
    initControls();
    
    if (!mainData.location)
        mainData.location = await getLocationUser();    
    
    ymaps.ready(initMap);
    
    mainData.location = await getNameCity();
    mainData.weather = await processingWeather();
    renderLocation(mainData.location.location);
    renderWeather(mainData.weather);
    getTime();
}

initFancyWeather();