import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from './components/Tabs';
import WeatherDisplay from './components/WeatherDisplay';
import CitySearch from './components/CitySearch';

const API_KEY = '482944e26d320a80bd5e4f23b3de7d1f';

const cities = [
  { name: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729 },
  { name: 'Beijing', lat: 39.9042, lon: 116.4074 },
  { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 }
];

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData(selectedCity.lat, selectedCity.lon);
  }, [selectedCity]);

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
        params: {
          lat,
          lon,
          exclude: 'minutely',
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <Tabs cities={cities} onSelect={setSelectedCity} />
      <button onClick={() => fetchWeatherData(selectedCity.lat, selectedCity.lon)}>Refresh</button>
      {loading ? <p>Loading...</p> : <WeatherDisplay data={weatherData} city={selectedCity.name} />}
      <CitySearch onCitySelect={(city) => setSelectedCity(city)} />
    </div>
  );
}

export default App;
