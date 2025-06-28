import React from 'react';
import { Stack } from "@mui/material";
import WeatherCards from "./WeatherCards/WeatherCards";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const[error,setError] = useState(false);
  const fetchWeather = (city) => {
    const key = 'bf92d1d2e2974ed49ae103858252806';
  fetch(`https://api.weatherapi.com/v1/current.json?key=bf92d1d2e2974ed49ae103858252806&q=${city}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
          // ✅ Check for error inside async then block
      if (data && data.location && data.current) {
        setError(false);
      } else {
        setError(true);
      }
      })
      .catch(err => console.error("Fetch failed:", err));
  };
 const handleClick = ()=>{
  fetchWeather(city);
 }
  console.log(data);
  // console.log(data.current.temp_c,data.humidity,data.current.condition.text,data.wind_kph)
  return (
    <Stack spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4 }}>
    
      <input
        value={city}
        type='text'
        onChange={(e) => setCity(e.target.value)}
        style={{padding:"10px"}}
        placeholder="Enter city name"
      />

      <button variant="contained" onClick={handleClick}>
        Search
      </button>
      
      {data && data.current ? (
        <WeatherCards data={{Temperature:data.current.temp_c,Humidity:data.current.humidity,Condition:data.current.condition.text,WindSpeed:data.current.wind_kph}}/>
        ):(
          <p>Loading data...</p>
          
      )}
        {error && (
        alert("Failed to fetch weather data")
      )}
    </Stack>
  );
}

export default App;
