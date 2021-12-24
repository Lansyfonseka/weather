import getImageURL from "../api/getImageURL.js";
import renderBackground from "../view/renderBackground.js";

export default async function refreshBackground() {
    const url = await getImageURL();
    // const url = 'https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
    renderBackground(url);
};