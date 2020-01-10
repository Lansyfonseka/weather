const HTMLData = `<header>
<div class="container">
    <div class="switches">
        <button class="refresh"><img src="./source/images/return.svg" alt=""></button>
        <select name="language" class="language">
            <option value="eng">ENG</option>
            <option value="rus">RUS</option>
            <option value="blr">BLR</option>
        </select>
        <div class="degree">
            <button class="celsius">&#8451;</button>
            <button class="fahrenheit">&#8457;</button>
        </div>
    </div>
    <div class="search">
        <input type="text" placeholder="" class="search--input">
        <button class="search--microphone"><img src="./source/images/microphone.svg" alt="microphone"></button>
        <button class="search--button"></button>
    </div>
</div>
</header>
<main>
<div class="container">
    <div class="information">
        <div class="information--location">
            <h3 class="information--location-city"></h3>
            <p  class="information--location-country"></p>
        </div>
        <div class="information--date"></div>
        <div class="information--short"></div>
        <div class="information--current">
            <span class="information--current-temperature"></span>
            <img alt="weather" class="information--current-icon">
        </div>
        <div class="information--detail">
            <span class="information--detail-feels"></span>
            <span  class="information--detail-wind"></span>
            <span  class="information--detail-humidity"></span>
        </div>
        <div class="information--daily">
            <div>
                <p class="information--daily-week_day"></p>
                <img alt="weather" class="information--daily-icon">
                <span class="information--daily-day"></span>
                <span class="information--daily-night"></span>
            </div>
            <div>
                <p class="information--daily-week_day"></p>
                <img alt="weather" class="information--daily-icon">
                <span class="information--daily-day"></span>
                <span class="information--daily-night"></span>
            </div>
            <div>
                <p class="information--daily-week_day"></p>
                <img alt="weather" class="information--daily-icon">
                <span class="information--daily-day"></span>
                <span class="information--daily-night"></span>
            </div>
        </div>
    </div>
    <div class="map">
        <div id="map"></div>
        <p class="latitude"></p>
        <p class="longitude"></p>
    </div>
</div>
</main>`;

export default HTMLData;