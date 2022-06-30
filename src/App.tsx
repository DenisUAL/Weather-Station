import React, { useEffect, useState } from 'react';
import './App.css';
import Barometer from './Weather instruments/Barometer';
import { getWeather, WeatherData } from './WeatherAPI/weatherAPI';

export interface City {
  name: string;
  lon: string;
  lat: string;
}

const defaultCity: City = { name: 'Kyiv', lon: '30.5236', lat: '50.4500' }

const saveSelectedCity: (city: City) => void = (city) => {
  localStorage.setItem("cityName", JSON.stringify(city));
}

const readSelectedCity: () => City = () => {
  const savedCity = localStorage.getItem("cityName");
  return JSON.parse(`${savedCity}`);
}

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(readSelectedCity() || defaultCity)
  const [weather, setWeather] = useState<WeatherData>({
    rh: 0,
    pres: 750,
    timezone: "",
    country_code: "",
    city_name: "",
    temp: 0,
  })

  const getTemp: (city: City) => void = async (city) => {
    const latestWeather = await getWeather(city);
    setWeather(latestWeather);
  }

  useEffect(() => {
    saveSelectedCity(selectedCity);
    getTemp(selectedCity);
  }, [selectedCity])

  return (
    <div className="App">
      <Barometer optionClickHandler={(city) => setSelectedCity(city)} cityName={selectedCity.name} weather={weather} />
    </div>
  );
}

export default App;
