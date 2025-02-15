import React, { useState } from "react";
import axios from "axios";


function WheatherApp2() {
  const [City, setCity] = useState("");
  const [WheatherData, setWheatherData] = useState(null);



  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const API_KEY="0cb398b6e81132cd9fb907bc35d48bbd";

const getWhether=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`)
    .then((response)=>setWheatherData(response.data))
    .catch((error)=>console.log(error));
}

// const getWhether=()=>{
//     axios
// .get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`
//     )
//     .then((response)=>setWheatherData(response.data))
//     .catch((error)=>console.log(error));
// }

  return (
    <>
      <h3>WheatherApp2</h3>
      <input type="text" onChange={handleCity} />
      <br /> <br />
      <button type="button" onClick={getWhether}>
        Check Wheather
      </button>


      {
      WheatherData && (
        <div>
          <h2>{WheatherData.name}</h2>
          <p>Temperature:{WheatherData.main.temp}</p>
          <p>feels_like: {WheatherData.main.feels_like}°C</p>
          <p>Weather: {WheatherData.weather[0].description}</p>
          <p>Humidity: {WheatherData.main.humidity}%</p>
          <p>Wind Speed: {WheatherData.wind.speed} m/s</p>
        </div>
      )
      }
    </>
  );
}

export default WheatherApp2;
