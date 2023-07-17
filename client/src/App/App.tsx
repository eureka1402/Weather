import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { appStore } from '../store';
import type { AppStore } from '../types/AppStore';
import OneCard from '../components/OneCard/OneCard';
import './style.css';
import HourWeather from '../components/HourWeather';
import { Space } from 'antd';

function App(): JSX.Element {
  const getWeather = appStore((store: AppStore) => store.getWeather);
  const weather = appStore((store: AppStore) => store.weather);
  const weatherImages = appStore((store: AppStore) => store.weatherImg);
  const weatherState = appStore((store: AppStore) => store.weatherState);
  const windDirections = appStore((store: AppStore) => store.windDirections);
  const lat = appStore((store: AppStore) => store.lat);
  const long = appStore((store: AppStore) => store.long);
  useEffect(getWeather, [lat, long]);




  return (
    <div className="App">
      <Navbar />
        <HourWeather />
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <h1 style={{color:'black'}}>Погода в городе {weather?.geo_object.locality.name}</h1>
      </Space>
      <div className="card-container">
        {weather?.forecasts.map((el, i) => (
          <OneCard
            key={el.date}
            src={weatherImages[el.parts[weatherState].condition]}
            date={el.date}
            icon={el.parts[weatherState].icon}
            temp_min={el.parts[weatherState].temp_min}
            temp_max={el.parts[weatherState].temp_max}
            temp_avg={el.parts[weatherState].temp_avg}
            wind_speed={el.parts[weatherState].wind_speed}
            wind_dir={windDirections[el.parts[weatherState].wind_dir]}
            humidity={el.parts[weatherState].humidity}
            pressure={el.parts[weatherState].pressure_mm}
            index={i}
            hours={el.hours}
          />
        ))}
      </div>
    </div>
  );
}

export default App;