import React, { ReactNode, useState, useEffect, PropsWithChildren } from 'react'
import './index.css'
import cities from '../WeatherAPI/ua'
import { City } from '../App';

interface OptionProps {
  onClick: React.ReactEventHandler;
  name: string;
}

const AutocompleteOption: React.FC<OptionProps> = (props) => {
  return <div onClick={props.onClick} className='option'>{props.name}</div>
}

const AutocompleteInput: React.FC<{ optionClickHandler: (city: City) => void }> = ({ optionClickHandler }) => {
  const [hints, setHints] = useState<City[]>([]);
  const [value, setValue] = useState<string>("")

  const handleInput: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
    if (e.currentTarget.value === "") {
      setHints([])
      return;
    }
    const nameHints: City[] = [];
    setHints([]);
    cities.forEach(city => {
      if (city.name.toLowerCase().startsWith(e.currentTarget.value.toLowerCase())) {
        nameHints.push(city)
      }
    });
    setHints(nameHints)

  }

  return (
    <div className='input-container'>
      <input type="text" value={value} onChange={handleInput} />
      <div className='options'>
        {hints.map((hint) => {
          return <AutocompleteOption name={hint.name} key={hint.name + hint.lat} onClick={() => {
            setHints([])
            setValue("")
            optionClickHandler(hint)
          }}
          />
        })}
      </div>
    </div>
  )
}
export default AutocompleteInput;
