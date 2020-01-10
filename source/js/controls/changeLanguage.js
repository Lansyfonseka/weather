import mainData from "../mainData.js";
import mapData from "../mapData.js";
import renderWeather from "../view/renderWeather.js";
import renderLocation from "../view/renderLocation.js";
import getNameCity from "../api/getNameCity.js";

export default async function changeLanguage(){
    const language = mainData.controls.language.value;
    switch(language){
        case "eng":
            mainData.language = "en";
            localStorage.language = mainData.language;
            break;
        case "rus":
            mainData.language = "ru";
            localStorage.language = mainData.language;
            break;
        case "blr":
            mainData.language = "be";
            localStorage.language = mainData.language;
            break;
    }

    mainData.controls.buttonSearch.textContent = `${mapData[mainData.language].other[0]}`;
    mainData.controls.searchInput.placeholder = `${mapData[mainData.language].other[1]}`;

    mainData.location = await getNameCity();
    renderLocation(mainData.location.location);
    renderWeather(mainData.weather);
}