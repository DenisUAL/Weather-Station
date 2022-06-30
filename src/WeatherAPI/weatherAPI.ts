import axios from "axios";
import { City } from "../App";

export type WeatherData2 = {
  "latitude": number,
  "longitude": number,
  "elevation": number,
  "generationtime_ms": number,
  "utc_offset_seconds": number,
  "hourly": {
    "surface_pressure": number[],
    "temperature_2m": number[],
    "time": string[],
    "relativehumidity_2m": number[]
  },
  "hourly_units": {
    "temperature_2m": string,
    "relativehumidity_2m": string,
    "time": string,
    "surface_pressure": string
  }
}

export type WeatherData = {
  "rh": number,
  "pres": number,
  "timezone"?: string,
  "country_code"?: string,
  "city_name"?: string,
  "temp": number,
}

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//   params: { lon: '30.523333', lat: '50.450001' },
//   headers: {
//     'X-RapidAPI-Key': 'e3eb268521msh35d6de6ae3ae314p1b3a98jsn41fd3fd940bb',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// };

// export const getWeather: (city: City) => Promise<WeatherData> = ({ lon, lat }) => {
//   return axios.request({ ...options, params: { lon, lat } }).then(function (response) {
//     return response.data.data[0];
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

const options = {
  method: 'GET',
  url: 'https://api.open-meteo.com/v1/forecast',
  params: { latitude: 50.0186, longitude: 32.99, hourly: "temperature_2m,relativehumidity_2m,surface_pressure" },
};

export const getWeather: (city: City) => Promise<WeatherData> = ({ lon, lat }) => {
  options.params.longitude = parseFloat(lon);
  options.params.latitude = parseFloat(lat);
  return axios.request(options).then(function (response) {
    const {
      surface_pressure,
      relativehumidity_2m,
      temperature_2m
    } = response.data.hourly;

    const currentDate = new Date();
    const currentHour: number = currentDate.getHours();

    const result: WeatherData = {
      rh: relativehumidity_2m[currentHour],
      temp: temperature_2m[currentHour],
      pres: surface_pressure[currentHour]
    }

    return result;
  })
}
