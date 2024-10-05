import {React, useState} from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25,
    tempMin: 25,
    tempMax: 27,
    humidity: 47,
    feelsLike: 28,
    weather: "Dusty"
});

let updateInfo = (newInfo) => {
  setWeatherInfo(newInfo);
}
  return (
    <div className='main'>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp