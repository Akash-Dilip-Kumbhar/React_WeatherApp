import React,{useState} from 'react'
import axios from 'axios';
export default function WeatherApp() {

    const[City,setCity]=useState("")
    const[WeatherData,setWeatherData]=useState(null)
    const[error,setError]=useState("")

    const handleChange=(e)=>{
     setCity(e.target.value);
    } 

    const API_KEY='142da84ceb182bc132e32e325f17bfd5';

    const getWeather=()=>{

       axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`)
      .then((response)=>setWeatherData(response.data))
      .catch((error)=>setError("fetching error"))
    }



  return (
    <div>
      <h2>Weather App</h2>

      <input type='text' id='city' placeholder='EnterCity' onChange={handleChange}/>
      <button onClick={getWeather}>Click here</button>

      <div>
  
      {
      WeatherData && (
        <div>
          <h2>{WeatherData.name}</h2>
          <p>Temperature:{WeatherData.main.temp}</p>
          <p>feels_like: {WeatherData.main.feels_like}°C</p>
          <p>Weather: {WeatherData.weather[0].description}</p>
          <p>Humidity: {WeatherData.main.humidity}%</p>
          <p>Wind Speed: {WeatherData.wind.speed} m/s</p>
        </div>
      )
      }
      
      
      </div>
    </div>
  )
}