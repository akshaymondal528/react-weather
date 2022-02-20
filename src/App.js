import React, { useState } from 'react';
import InputCity from './components/InputCity';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

const App = () => {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  const inputOnChange = event => {
    setInput(event.target.value);
  };
  const inputOnSubmit = e => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=12cd299759d96b7632dd42f83d61edc2`;

    fetch(url)
      .then(response => response.json())
      .then(data => setData(Math.round(data.main.temp - 273)))
      .catch(error => console.log(error));

    setInput('');
  };

  return (
    <React.Fragment>
      <div className="weather_section">
        <div className="weather">
          <InputCity
            value={input}
            onChange={inputOnChange}
            onSubmit={inputOnSubmit}
          />
        </div>
        <div className="weather">
          <WeatherDetails getData={data} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
