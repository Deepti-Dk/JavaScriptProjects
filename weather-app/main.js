const locationInput = document.getElementById('cityName');
const inputClick = document.getElementById('inputClick');
const cityName = document.getElementById('cityHeading');

const temperatureList = document.getElementById('ul1');
const humidWindSpeedList = document.getElementById('ul2');
const sunsetSunriseList = document.getElementById('ul3');

const a = document.querySelector('a');

const getData = () => {
  if (locationInput.value) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=5cbedac812ea27f9a9bba697fb664e22`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        cityName.innerHTML = data.name;

        const img = document.getElementById('icon');
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const description = document.getElementById('description');
        description.innerHTML = data.weather[0].main;

        let li = document.createElement('li');
        li.innerHTML = 'Temp: ' + (data.main.temp - 273).toFixed(2) + '&#8451';
        temperatureList.appendChild(li);

        li = document.createElement('li');
        li.innerHTML =
          'Feels like: ' + (data.main.feels_like - 273).toFixed(2) + '&#8451';
        temperatureList.appendChild(li);

        li = document.createElement('li');
        li.innerHTML = 'Humidity: ' + data.main.humidity + '%';
        humidWindSpeedList.appendChild(li);
        li = document.createElement('li');
        li.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s';
        humidWindSpeedList.appendChild(li);

        li = document.createElement('li');
        let myTime = new Date(data.sys.sunrise * 1000);
        li.innerHTML =
          'Sunrise: ' + myTime.getHours() + ':' + myTime.getMinutes();
        sunsetSunriseList.appendChild(li);
        li = document.createElement('li');
        myTime = new Date(data.sys.sunset * 1000);
        li.innerHTML =
          'Sunset: ' + myTime.getHours() + ':' + myTime.getMinutes();
        sunsetSunriseList.appendChild(li);
        a.href = `https://www.openstreetmap.org/#map=18/${data.coord.lat}/${data.coord.lon}`;
        a.textContent = 'Click here for the location map';
      });
  } else {
    alert('Please enter the city name');
  }
};

inputClick.addEventListener('click', getData);
