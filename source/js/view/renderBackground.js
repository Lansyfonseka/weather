import renderRefreshArrows from "../view/renderRefreshArrows.js";

export default function renderBackground(url) {
    renderRefreshArrows();
    document.body.style.background = `url(${url})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}