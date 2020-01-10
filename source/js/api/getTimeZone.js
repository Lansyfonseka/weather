import mainData from "../mainData.js";

export default async function getTimeZone(){
    const API_TOKEN = "LTTERDWSPFPY";
    const location = mainData.location.location;
    const URL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${API_TOKEN}&format=json&by=position&lat=${location[0]}&lng=${location[1]}`;

    const data = await fetch(URL).then(res => res.json());
    return data.gmtOffset;
}