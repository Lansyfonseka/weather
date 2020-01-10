import getURL from "./getURL.js";

export default async function getImageURL(){    
    const API_TOKEN = "4038fc7d538bf2c45797967cf174301b07a08006f3b52cee663f524f28daba6e";
    const URL = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${API_TOKEN}`;
    
    const data = await fetch(URL).then(res => res.json());
    const urlImage = getURL(data);
    return urlImage;      
}