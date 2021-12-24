import mainData from "../mainData.js";
import mapData from "../mapData.js";

export default function renderLocation(coordinates){
    const latitude = coordinates[0].toFixed(4);
    const longitude = coordinates[1].toFixed(4);
    
    if (mainData.location.location[0] < 0)
        mainData.controls.informationLatitude.textContent = `${mapData[mainData.language].other[2]}: ${latitude.slice(0,3)}°${latitude.slice(4,6)}'${latitude.slice(6,8)}"`;
    else 
        mainData.controls.informationLatitude.textContent = `${mapData[mainData.language].other[2]}: ${latitude.slice(0,2)}°${latitude.slice(3,5)}'${latitude.slice(5,7)}"`;
    
    if (mainData.location.location[1] < 0)
        mainData.controls.informationLongitude.textContent = `${mapData[mainData.language].other[3]}: ${longitude.slice(0,3)}°${longitude.slice(4,6)}'${longitude.slice(6,8)}"`;
    else 
        mainData.controls.informationLongitude.textContent = `${mapData[mainData.language].other[3]}: ${longitude.slice(0,2)}°${longitude.slice(3,5)}'${longitude.slice(5,7)}"`;
};