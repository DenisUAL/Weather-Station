import React, { ReactNode, useEffect, useState } from 'react';
import './index.css';
import { getWeather } from '../../WeatherAPI/weatherAPI';

const Thermometer: React.FC = () => {
  const [temp, setTemp] = useState("0");
  const [weather, setWeather] = useState<any>({});

  // const getTemp: () => void = async () => {
  //   const weatherData = await getWeather();
  //   setWeather(weatherData);
  // }

  // useEffect(() => {
  //   getTemp();
  // }, [])

  const convertTempToHeight: (t: string) => string = (temp) => {
    if (parseFloat(temp) === 0) return "50%"
    return `${50 + parseFloat(temp)}%`
  }

  const drawScale: () => ReactNode[] = () => {
    const marks: ReactNode[] = [];
    for (let i = 0; i <= 20; i++) {
      if (i % 2 === 0) {
        marks.push(<div key={i} className='scale-mark-long' />)
      } else marks.push(<div key={i} className='scale-mark-short' />)
    }
    return marks;
  }

  const drawScaleDigits: () => ReactNode[] = () => {
    const scaleDigits: ReactNode[] = [];
    for (let i = 0; i <= 10; i++) {
      let deg = 50 - 10 * i;
      if (deg === 0) scaleDigits.push(<div key={i + "a"} className='scale-digit'>{deg}</div>)
      else if (deg > 0) scaleDigits.push(<div key={i + "a"} className='scale-digit above-zero'>{deg}</div>)
      else scaleDigits.push(<div key={i + "a"} className='scale-digit below-zero'>{deg}</div>)
    }
    return scaleDigits;
  }


  return (
    <div className='thermometer-container'>
      <div className='thermometer-body'>
        <div className='thermometer-tube'>
          <div style={{ height: weather.temp ? convertTempToHeight(weather.temp) : convertTempToHeight(temp) }} className='tube-inner'></div>
        </div>
        <div className='thermometer-ball'>
          <div className='temperature-text'>
            {weather.temp ? weather.temp : temp}
          </div>
        </div>
        <div className='scale-container'>
          {drawScale()}
        </div>
        <div className='scale-digits-container'>
          {drawScaleDigits()}
        </div>
      </div>
    </div>
  );
}

export default Thermometer;
