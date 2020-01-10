import mainData from "../mainData.js";

export default async function getNameCity(){
    const city = mainData.controls.searchInput.value ? mainData.controls.searchInput.value : mainData.location.city;
    const API_TOKEN = "c1b0ebeb07e84206b810edce757b2394";
    const URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_TOKEN}&pretty=1&no_annotations=1&language=${mainData.language}`;

    const data = await fetch(URL).then(res => res.json());
    const information = {
        city: data.results[0].components.state,
        country: data.results[0].components.country,
        location: [data.results[0].geometry.lat, data.results[0].geometry.lng],
    };
    mainData.nowTime = data.rate.reset;
    return information;
}