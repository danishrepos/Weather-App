const key = "00c6cccdf21220d91f2568a81e29690e";
const input = document.getElementById("input");

let motherBox = document.getElementById("mother-box");
let forecast = document.querySelectorAll(".weathertext");
let img = document.querySelectorAll(".icon");

let skiesbg = document.querySelectorAll(".skies");
let weatherBox = document.querySelectorAll(".weather-box");
let backbg = document.getElementById("weather-container");

let displayDay = document.querySelectorAll(".day");

let farenheit = document.querySelector(".farenheit");
let celsius = document.querySelector(".celsius");
let unit = "imperial";

input.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        motherBox.style.visibility = "visible";
        getWeather();
    }
});


async function getWeather() {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&mode=json&APPID=${key}`;
    let response = await axios.get(api)
    let counter = 0


    for (let i = 0; i < 40; i += 8) {
        let icon = response.data.list[i].weather[0].icon;
        let temp = Math.floor(response.data.list[i].main.temp);
        let hi = Math.floor(response.data.list[i].main.temp_max);
        let lo = Math.floor(response.data.list[i].main.temp_min);

        let week = new Date();
        let weekday = new Array(11);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[7] = "Sunday";
        weekday[8] = "Monday";
        weekday[9] = "Tuesday";
        weekday[10] = "Wednesday";


        let day = weekday[week.getDay() + counter];

        displayDay[counter].innerHTML = `${day}`;
        // same as    forecast[i].innerHTML = temp + '<br>' + hi + '<br>' + lo + '<br>';
        forecast[counter].innerHTML = `${temp}°<br> HI: ${hi}<br> LO: ${lo}`;

        let iconsUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        img[counter].src = iconsUrl;

        forecast[counter].appendChild(img[counter]);


        //referenced icon images from https://openweathermap.org/weather-conditions
        if (icon === "01d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/clearsky_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/clearsky_big.jpeg')"
        }
        if (icon === "01n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/clearsky_small.jpeg')";
            backbg.style.backgroundImage = "url('img/nightimg/clearsky_big.jpeg')"
        }
        if (icon === "02d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/fewclouds_small.jpeg')";
            backbg.style.backgroundImage = "url('img/dayimg/fewclouds_big.jpeg')"
        }
        if (icon === "02n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/fewclouds_small.jpg')";
            backbg.style.backgroundImage = "url('img/nightimg/fewclouds_big.jpeg')"
        }
        if (icon === "03d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/scatteredclouds_small.jpeg')";
            backbg.style.backgroundImage = "url('img/dayimg/scatteredclouds_big.jpeg')"
        }
        if (icon === "03n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/scatteredclouds_small.jpeg')";
            backbg.style.backgroundImage = "url('img/nightimg/scatteredclouds_big.png')"
        }
        if (icon === "04d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/brokenclouds_small.jpeg')";
            backbg.style.backgroundImage = "url('img/dayimg/brokenclouds_big.jpeg')"
        }
        if (icon === "04n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/brokenclouds_small.png')";
            backbg.style.backgroundImage = "url('img/nightimg/brokenclouds_big.jpg')"
        }
        if (icon === "09d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/showerrain_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/showerrain_big.jpeg')"
        }
        if (icon === "09n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/showerrain_small.jpg')";
            backbg.style.backgroundImage = "url('img/nightimg/showerrain_big.jpg')"
        }
        if (icon === "10d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/rain_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/rain_big.jpeg')"
        }
        if (icon === "10n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/rain_small.jpg')";
            backbg.style.backgroundImage = "url('img/nightimg/rain_big.png')"
        }
        if (icon === "11d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/thunderstorm_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/thunderstorm_big.jpg')"
        }
        if (icon === "11n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/thunderstorm_small.jpg')";
            backbg.style.backgroundImage = "url('img/nightimg/thunderstorm_big.jpg')"
        }
        if (icon === "13d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/snow_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/snow_big.jpeg')"
        }
        if (icon === "13n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/snow_small.jpeg')";
            backbg.style.backgroundImage = "url('img/nightimg/snow_big.jpg')"
        }
        if (icon === "50d") {
            weatherBox[counter].style.backgroundImage = "url('img/dayimg/mist_small.jpg')";
            backbg.style.backgroundImage = "url('img/dayimg/mist_big.jpg')"
        }
        if (icon === "50n") {
            weatherBox[counter].style.backgroundImage = "url('img/nightimg/mist_small.jpg')";
            backbg.style.backgroundImage = "url('img/nightimg/mist_big.jpg')"
        }

        counter++
    }
}
















farenheit.addEventListener("click", async function () {
    unit = "imperial";
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&mode=json&APPID=${key}`;
    let response = await axios.get(api)
    let counter = 0


    for (let i = 0; i < 40; i += 8) {
        let icon = response.data.list[i].weather[0].icon;
        let temp = Math.floor(response.data.list[i].main.temp);
        let hi = Math.floor(response.data.list[i].main.temp_max);
        let lo = Math.floor(response.data.list[i].main.temp_min);


        // same as    forecast[i].innerHTML = temp + '<br>' + hi + '<br>' + lo + '<br>';
        forecast[counter].innerHTML = `${temp}°<br> HI: ${hi}<br> LO: ${lo}`;

        let iconsUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        img[counter].src = iconsUrl;

        forecast[counter].appendChild(img[counter]);

        counter++
    }
})

celsius.addEventListener("click", async function () {
    unit = "metric";
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&mode=json&APPID=${key}`;
    let response = await axios.get(api)
    let counter = 0


    for (let i = 0; i < 40; i += 8) {
        let icon = response.data.list[i].weather[0].icon;
        let temp = Math.floor(response.data.list[i].main.temp);
        let hi = Math.floor(response.data.list[i].main.temp_max);
        let lo = Math.floor(response.data.list[i].main.temp_min);


        // same as    forecast[i].innerHTML = temp + '<br>' + hi + '<br>' + lo + '<br>';
        forecast[counter].innerHTML = `${temp}°<br> HI: ${hi}<br> LO: ${lo}`;

        let iconsUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        img[counter].src = iconsUrl;

        forecast[counter].appendChild(img[counter]);

        counter++
    }
})