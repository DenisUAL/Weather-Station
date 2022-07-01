import React, { ReactNode } from 'react'
import { City } from '../../App';
import AutocompleteInput from '../../AutocompleteInput';
import { WeatherData } from '../../WeatherAPI/weatherAPI';
import "./index.css"

const convertTempToHeight: (temp: number) => string = (temp) => {
  if (temp === undefined) return `${14 + -7.5 * 1.8}`;
  if (temp > 47.5) return `${14 + 47.5 * 1.8}`; // max displayable temperature
  if (temp < -7.5) return `${14 + -7.5 * 1.8}`; // min displayable temperature
  const height = `${14 + temp * 1.8}`;
  return height;
}

const convertPressure: (pres: number) => string = (pres) => {
  if (pres === undefined) return "-180"
  let mmHg = pres / 1.333;
  if (mmHg > 820) mmHg = 820; // max displayable pressure
  if (mmHg < 680) mmHg = 680; // min displayable pressure
  const presDeg = (mmHg - 700) / 100 * 60 - 30
  return `${presDeg}`;
}

const convertHumidity: (hum: number) => string = (hum) => {
  if (hum === undefined || hum < 0 || hum > 100) return "0"
  const humDeg = hum / 100 * -60 + 30
  return `${humDeg}`;
}

interface BarometerProps {
  optionClickHandler: (city: City) => void;
  weather: WeatherData;
  cityName: string;
}

const Barometer: React.FC<BarometerProps> = ({ weather, cityName, optionClickHandler }) => {
  //----------------- Humidity
  const drawHumidityDialMarks: () => ReactNode[] = () => {
    const marks: ReactNode[] = [];
    for (let i = 0; i <= 20; i++) {
      const deg: number = -30 + 3 * i;
      marks.push(<div key={i} className='scale-mark-hum' style={{ transform: `rotate(${deg}deg) translateX(calc(var(--baro-width) / 3.1))` }} />)
    }
    return marks;
  }

  const drawHumidityDialDigits: () => ReactNode[] = () => {
    const digits: ReactNode[] = [];
    for (let i = 0; i <= 2; i++) {
      const deg: number = -30 + 30 * i;
      const digit = 100 - 50 * i;
      digits.push(<div key={i} className='scale-digit-hum' style={{ transform: `rotate(${deg}deg) translateX(calc(var(--baro-width) / 2.7)) rotate(${-1 * deg}deg)` }} >{digit}</div>)
    }
    return digits;
  }

  const drawHumLabels: () => ReactNode[] = () => {
    const labels = ["волого", "нормально", "сухо"]
    return labels.map((label) => {
      return <div key={label} className='hum-label'>{label}</div>
    })
  }
  //--------------------------

  //----------------- Temperature
  const drawTemperatureScaleMarks: () => ReactNode[] = () => {
    const marks: ReactNode[] = [];
    for (let i = 0; i <= 40; i++) {
      marks.push(<div key={i} className='scale-mark-temp' />)
    }
    return marks;
  }

  const drawTemperatureScaleDigits: () => ReactNode[] = () => {
    const digits: ReactNode[] = [];
    for (let i = 0; i <= 4; i++) {
      const digit = i === 4 ? "00" : 40 - 10 * i;
      digits.push(<div key={i} className='scale-digit-temp' style={{ transform: `translateY(calc(var(--baro-width) * 0.0435 * ${i}))` }} >{digit}</div>)
    }
    return digits;
  }
  //--------------------------

  //----------------- Pressure
  const drawPressureDialMarks: () => ReactNode[] = () => {
    const marks: ReactNode[] = [];
    for (let i = 0; i <= 20; i++) {
      const deg: number = -150 - 3 * i;
      marks.push(<div key={i} className='scale-mark-pres' style={{ transform: `rotate(${deg}deg) translateX(calc(var(--baro-width) / 3.1)) rotate(180deg)` }} />)
    }
    return marks;
  }

  const drawPressureDialDigits: () => ReactNode[] = () => {
    const digits: ReactNode[] = [];
    for (let i = 0; i <= 2; i++) {
      const deg: number = -150 - 30 * i;
      const digit = 800 - 50 * i;
      digits.push(<div key={i} className='scale-digit-pres' style={{ transform: `rotate(${deg}deg) translateX(calc(var(--baro-width) / 2.7)) rotate(${-1 * deg}deg)` }} >{digit}</div>)
    }
    return digits;
  }

  const drawPresLabels: () => ReactNode[] = () => {
    const labels = ["високий", "нормальний", "низький"]
    return labels.map((label, index) => {
      return <div key={label} className='pres-label'>{label}</div>
    })
  }
  //------------------------

  return (
    <div className='barometer-container'>
      <div className='barometer-body'>
        <div className='barometer-screen'>
          <div className='temp-unit'>°C</div>
          <div className="city-name">{cityName}</div>
          <AutocompleteInput optionClickHandler={optionClickHandler} />
          <div className='humidity-dial'>
            <div className='hum-labels'>
              {drawHumLabels()}
            </div>
            <div className='hum-dial-label'>
              відн. вологість, %
            </div>
            <div className='dial-numbers-hum'>
              {drawHumidityDialMarks()}
              {drawHumidityDialDigits()}
            </div>
            <div className='hum-hand-axis'></div>
            <div className='hum-hand animated' style={{ transform: `translateX(calc(var(--baro-width) / -50)) rotate(${convertHumidity(weather.rh)}deg)` }}><div className='hum-hand-arrow'></div></div>

          </div>
          <img className='logo-img' src="Kyiv_skyline.png" alt="riga-logo" />
          <div className='logo-text'>Ukraine</div>
          <div className='therm-container'>
            <div className='therm-scale-container'>
              {drawTemperatureScaleMarks()}
              {drawTemperatureScaleDigits()}
            </div>
            <div className='therm-tube'>
              <div className='therm-line animated' style={{ height: `${convertTempToHeight(weather.temp)}%` }}></div>
            </div>
          </div>
          <div className='pressure-dial'>
            <div className='pres-labels'>
              {drawPresLabels()}
            </div>
            <div className='pres-dial-label'>
              атм. тиск, мм рт. ст.
            </div>
            <div className='dial-numbers-pres'>
              {drawPressureDialMarks()}
              {drawPressureDialDigits()}
            </div>
            <div className='pres-hand-axis'></div>
            <div className='pres-hand animated' style={{ transform: `translateX(calc(var(--baro-width) / 50)) rotate(${convertPressure(weather.pres)}deg)` }}><div className='pres-hand-arrow'></div></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Barometer;
