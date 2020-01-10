export default async function getLocationUser(){
    const API_TOKEN = "3fab45faab3551";
    const URL = `https://ipinfo.io/json?token=${API_TOKEN}`;

    const data = await fetch(URL).then(res => res.json());
    const location = data.loc.split(",");
    const locationNumber = {
        location: [+location[0], +location[1]],
        city: data.city
    };
    return locationNumber;
}