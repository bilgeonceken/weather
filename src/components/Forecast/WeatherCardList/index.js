import { arrayOf, bool, func, number, oneOf, shape, string } from 'prop-types';
import React from 'react';
import { WEATHER_TYPES } from '../../../utils/constants';
import ScrollableList from '../../ScrollableList';
import WeatherCard from './WeatherCard';

const WeatherCardList = ({ items, activeForecast, onWeatherCardClick }) => {
  return (
    <ScrollableList>
      {items.map((itemProps, key) => {
        return (
          <WeatherCard
            {...itemProps}
            key={itemProps.id}
            isActive={key === activeForecast}
            onClick={onWeatherCardClick}
          />
        );
      })}
    </ScrollableList>
  );
};

WeatherCardList.propTypes = {
  items: arrayOf(shape({
    time: string,
    weather: oneOf(Object.keys(WEATHER_TYPES)),
    temperature: number,
    isActive: bool,
    onClick: func,
    order: number,
  })),
  activeForecast: number,
  onWeatherCardClick: func,
};

WeatherCardList.defaultProps = {
  items: [],
  activeForecast: 0,
  onWeatherCardClick: (f) => f,
};

export default WeatherCardList;
