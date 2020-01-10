import getImageURL from "../api/getImageURL.js";
import renderBackground from "../view/renderBackground.js";

export default async function refreshBackground(){
    const url = await getImageURL();
    renderBackground(url);
};