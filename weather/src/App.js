import React, { useEffect, useState } from 'react';
import { Stack, Button } from "@mui/material";
import WeatherCards from "./WeatherCards/WeatherCards";

function App() {
  const [city, setCity] = useState("Pune");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = (selectedCity) => {
    const key = '3664bdc0237a4118a1e54805252806';
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${selectedCity}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
          setData(null); // clear previous data if any
        } else {
          setData(data);
          setError(false);
        }
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        setError(true);
        setData(null);
      });
  };

  const handleClick = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  useEffect(() => {
    fetchWeather(city); // fetch on initial mount
  }, []);

  return (
    <Stack spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4 }}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
        placeholder="Enter city name"
      />

      <Button variant="contained" onClick={handleClick}>
        Search
      </Button>
      {error ? (
        alert("Failed to fetch weather data. Please try another city")
      ):null}
      {data ? (
        <WeatherCards data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </Stack>
  );
}

export default App;
