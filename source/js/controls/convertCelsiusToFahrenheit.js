export default function convertCelsiusToFahrenheit(celsius){
    const fahrenheit = (celsius*1.8)+32;
    return Math.round(fahrenheit);
}