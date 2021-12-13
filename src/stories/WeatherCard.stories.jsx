import React from 'react';
import WeatherCard from '../components/WeatherCard';
import { WEATHER_TYPES } from '../utils/constants';

export const Clear = () => {
  return (
    <WeatherCard weather={WEATHER_TYPES.Clear} />
  );
};

export const Cloudy = () => {
  return (
    <WeatherCard weather={WEATHER_TYPES.Clouds} />
  );
};

export const Rainy = () => {
  return (
    <WeatherCard weather={WEATHER_TYPES.Rain} />
  );
};

export const Active = () => {
  return (
    <WeatherCard isActive weather={WEATHER_TYPES.Rain} />
  );
};

export default {
  title: 'Components/WeatherCard',
  component: WeatherCard,
};
