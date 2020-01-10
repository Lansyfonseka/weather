import mainData from "../mainData.js";
import mapData from "../mapData.js";
import checkNumberTime from "../controls/checkNumberTime.js";

export default function renderTime(time){
    const lng = mainData.language;
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    mainData.textContent.currentDate.textContent = `${mapData[lng].shortWeek[day]} ${date} ${mapData[lng].month[month]} ${checkNumberTime(hours)}:${checkNumberTime(minutes)}:${checkNumberTime(seconds)}`;
    
    const nextDay = new Date(time.getTime());
    nextDay.setDate(date+1);
    mainData.textContent.weekDay[0].textContent = `${mapData[lng].week[nextDay.getDay()]}`;
    nextDay.setDate(date+2);
    mainData.textContent.weekDay[1].textContent = `${mapData[lng].week[nextDay.getDay()]}`;
    nextDay.setDate(date+3);
    mainData.textContent.weekDay[2].textContent = `${mapData[lng].week[nextDay.getDay()]}`;
}