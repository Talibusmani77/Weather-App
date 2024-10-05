import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "c9393865806c26efe980911c86ca61a3"
    let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        try{
            
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            console.log(err)
        }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city)
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
  return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
            <Button variant='contained' endIcon={<SearchIcon/>} type='submit'>Search</Button>
        </form>
    </div>
  )
}

export default SearchBox