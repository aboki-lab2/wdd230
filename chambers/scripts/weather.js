let currentTemp = document.querySelector("#current-temperature");
let windVelocityBox = document.querySelector(".windVelocity");
let windChill = document.querySelector(".windChill");
let weatherIcon = document.querySelector("#weather-icon");
let figcaption = document.querySelector('#fig-caption');
const url = `https://api.openweathermap.org/data/2.5/weather?q=Mendoza&units=Imperial&appid=411161a5aa5688d0384164c4c6f8e3a0`;

function calculateWindChill(windVelocity, temperature){
   return (35.74 + (0.6215 * temperature) - (35.75 * (windVelocity**0.16)) + (0.4275 * temperature * (windVelocity**0.16)));
}

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    
    }
   apiFetch();
    
    function displayResults(weatherdata){

        currentTemp.innerHTML = ``;
        currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
        
        const windSpeed = parseFloat(weatherdata.wind.speed);
        const currentTemperatureF = parseFloat(weatherdata.main.temp);
        
        
        let windChillFactor= calculateWindChill(windSpeed, currentTemperatureF)
        let result = null;
    
        if (currentTemperatureF <= 50 && windSpeed > 3){
            result = windChillFactor.toFixed(2);
        }else{
            result = "N/A"; 
        }
        
        const icon = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
        const description = weatherdata.weather[0].main;
        weatherIcon.setAttribute('src', icon);
        weatherIcon.setAttribute('alt', description);

        windVelocityBox.textContent = windSpeed;
        figcaption.textContent = description;
        windChill.textContent = `${result} F°`;
    }