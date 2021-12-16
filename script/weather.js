const apiKey = "85b07079ea84aa0c1e2d7fd5f237f7d0";

function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendCall);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function sendCall(position) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let date = new Date();
            // get every other hour, to display the weather with 16:00, 18:00, 20:00 ... for 10 hours
            for (var i = 0; i < 6; i++) { 
                const formattedDate = `${date.getHours() < 10 ? '0'+date.getHours() : date.getHours() }:00`;
                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.hourly[0 * 2].weather[0]["icon"]}.svg`;

                const weatherDiv = `
                <div id="currentWeather">
                    <div class="weather-time">${formattedDate}</div>
                    <div class="city-temp">${Math.round(data.hourly[i * 2].temp)}<sup>°C</sup></div>
                    <figure style="margin: 0;">
                        <img class="city-icon" style="width: 30px;" src="${icon}" alt="${data.hourly[0 * 2].weather[0]["description"]}">
                    </figure>
                </div>`

                weather.insertAdjacentHTML('beforeEnd', weatherDiv)
                date.setHours(date.getHours() + 2);
            }
        })
        .catch(() => {
            console.log('error in fetch 😩')
        });

}

getLocationWeather();
