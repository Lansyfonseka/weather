import mainData from "../mainData.js";

export default function initMicrophone(){
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en";
    let word = "";
    
    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");
            word = transcript;
    });

    recognition.addEventListener("end", () => {
        mainData.controls.searchInput.value = word;
        const eventClick = new Event("click");
        mainData.controls.buttonSearch.dispatchEvent(eventClick);
    });
    recognition.start();
}