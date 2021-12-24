import mainData from "../mainData.js";

export default function searchLocation(){
    if (event.key === "Enter"){
        const eventClick = new Event("click");
        mainData.controls.buttonSearch.dispatchEvent(eventClick);
    }    
};