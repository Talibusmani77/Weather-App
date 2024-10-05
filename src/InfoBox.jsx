import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function InfoBox({info}) {

  const HOT = "/images/hot-weather.jpg"
  const RAINY = "/images/cloud.avif"
  const COLD = "/images/cold-weather.jpg"
  
  return (
    <div className='InfoBox'>
      <h1>Weather Info : {info.weather}</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={info.humidity > 80 ? RAINY : info.temp < 15 ? COLD : HOT}
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='city-name'>
          {info.city.toUpperCase()} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Min. Temperature : {info.tempMin}&deg;C</p>
          <p>Max. Temperature : {info.tempMax}&deg;C</p>
          <p>Humidity : {info.humidity}%</p>
          <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox