export default function renderRefreshArrows(){
    const buttonRefresh = document.querySelector(".refresh");
    const refreshArrows = buttonRefresh.firstChild;
    refreshArrows.classList.add("rotate");
    setInterval(()=>{
        refreshArrows.classList.remove("rotate");
    },200);
}