export default function renderHTML(content){
    const container = document.createElement("div");
    container.innerHTML = content;
    document.body.appendChild(container);
}