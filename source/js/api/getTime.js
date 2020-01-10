import getTimeZone from "./getTimeZone.js";
import renderTime from "../view/renderTime.js";
import mainData from "../mainData.js";

export default async function getTime(){
    const GTMOffset = await getTimeZone();
    const GTMHours = GTMOffset/3600;
    const date = new Date();
    date.setHours(date.getUTCHours()+GTMHours);

    mainData.timer = setInterval(()=>{
        renderTime(date);
        date.setSeconds(date.getSeconds()+1);
    },1000);
}