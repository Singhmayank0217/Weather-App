const API_KEY = "9812096470b033631ed3d6532f1cfc01";
const weatherId = document.querySelector("#weather");

async function getWeather() {
    console.log('hello');
    let city = 'indore';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    // weatherId.innerText = data.main.temp_min;
    weatherId.innerText = data?.main?.temp_min;
}
getWeather();
