import refreshBackground from "./refreshBackground.js";
import clickSearchLocation from "./clickSearchLocation.js";
import searchLocation from "./searchLocation.js";
import changeLanguage from "./changeLanguage.js";
import celsiusToFahrenheit from "./celsiusToFahrenheit.js";
import fahrenheitToCelsius from "./fahrenheitToCelsius.js";
import initMicrophone from "./initMicrophone.js";
import mainData from "../mainData.js";
import mapData from "../mapData.js";

export default function initControls(){    
    mainData.controls.buttonSearch.textContent = `${mapData[mainData.language].other[0]}`;
    mainData.controls.searchInput.placeholder = `${mapData[mainData.language].other[1]}`;

    switch(mainData.language){
        case "en":
            mainData.controls.language.selectedIndex = 0;
            break;
        case "ru":
            mainData.controls.language.selectedIndex = 1;
            break;
        case "be":
            mainData.controls.language.selectedIndex = 2;
            break;
    }

    if (mainData.temperature == "C")
        mainData.controls.celsius.classList.toggle("degree-active");

    if (mainData.temperature == "F")
        mainData.controls.fahrenheit.classList.toggle("degree-active");

    mainData.controls.buttonRefresh.addEventListener("click", refreshBackground);
    mainData.controls.searchInput.addEventListener("keydown", clickSearchLocation);
    mainData.controls.buttonSearch.addEventListener("click", searchLocation);
    mainData.controls.language.addEventListener("change", changeLanguage);
    mainData.controls.fahrenheit.addEventListener("click", celsiusToFahrenheit);
    mainData.controls.celsius.addEventListener("click", fahrenheitToCelsius);
    mainData.controls.microphone.addEventListener("click", initMicrophone);
};