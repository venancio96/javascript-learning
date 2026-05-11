function showWeatherDetails(event){
    event.preventDefault();
    const city= document.getElementById('city').value;
        const apiKey = '';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
            const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;

        })
        .catch(error =>{
            console.error('error ferching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Faield to fetch weather. please try again'</p>`;
        })    
    }
    document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);

