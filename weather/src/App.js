import React from 'react';
import { Stack, Select, MenuItem, Button } from "@mui/material";
import WeatherCards from "./WeatherCards/WeatherCards";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Pune");
  const [data, setData] = useState(null);
  const[error,setError] = useState(false);
  const fetchWeather = (selectedCity) => {
    const key = '3664bdc0237a4118a1e54805252806';
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${selectedCity}`)
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
