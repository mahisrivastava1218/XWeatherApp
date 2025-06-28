import React from 'react';
import { Stack } from "@mui/material";
import WeatherCards from "./WeatherCards/WeatherCards";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const[error,setError] = useState(false);
  const fetchWeather = (selectedCity) => {
    const key = '9390d7874f1749999e185547252806';
  fetch(`https://api.weatherapi.com/v1/current.json?key=5376e3fb125c4878b0691346252806&q=${encodeURIComponent(selectedCity.trim())}`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched weather:', data);
        setData(data);
      })
      .catch(err => console.error("Fetch failed:", err));
  };
 const handleClick = ()=>{
  if(data.length>0){
     setError(false);
  }else{
    setError(true);
  }
 }
  useEffect(() => {
    fetchWeather(city); // fetch on mount
  }, []);
  console.log(data);
  return (
    <Stack spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4 }}>
      {error && (
        alert("Failed to fetch weather data")
      )}
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
      
      {!error ? (
        <WeatherCards data={data} />
        ):(
          <p>Loading data...</p>
      )}
    </Stack>
  );
}

export default App;
