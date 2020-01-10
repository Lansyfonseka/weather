import processingWeather from "./processingWeather.js";
import mainData from "../mainData.js";
import getNameCity from "../api/getNameCity.js";
import getTime from "../api/getTime.js";
import renderLocation from "../view/renderLocation.js";
import renderWeather from "../view/renderWeather.js";

export default async function searchLocation(){
    if (mainData.controls.searchInput.value){
        clearInterval(mainData.timer);
        mainData.location = await getNameCity();
        mainData.weather = await processingWeather();
        renderWeather(mainData.weather);
        renderLocation(mainData.location.location);
        getTime();
    }    
}