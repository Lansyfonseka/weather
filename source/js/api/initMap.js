import mainData from "../mainData.js";

export default function initMap(){
    const myMap = new ymaps.Map("map", {
        center: [+mainData.location.location[0], +mainData.location.location[1]],
        zoom: 11
    });
    const searchLocation = setMapLocation.bind(myMap);
    mainData.controls.buttonSearch.addEventListener("click", searchLocation);
};

async function setMapLocation(){
    if (mainData.controls.searchInput.value){
        const searchText = mainData.controls.searchInput.value;
        ymaps.geocode(searchText, {results:1}).then((res)=>{
            const firstGeoObject = res.geoObjects.get(0);
            const bounds = firstGeoObject.properties.get('boundedBy'); // Область видимости геообъекта.
            this.setBounds(bounds, {
                checkZoomRange: true
            });
        });
    }
    else {
        alert("Choose city");
    }
};