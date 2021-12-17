import React from 'react';
import {
  bool, oneOf, string, number, func,
} from 'prop-types';
import styled from 'styled-components';
import { weatherDataMap, WEATHER_TYPES } from '../../../utils/constants';
import { indigo30, indigo70, indigo80, bgBlue, white } from '../../../styles/colors';

const ScWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 212px;
  height: 400px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-radius: 6px;
  background: ${({ isActive }) => (isActive ? indigo70 : bgBlue)};

  &:hover {
    background: ${({ isActive }) => (isActive ? indigo70 : indigo80)};;
  }

  img {
    width: 120px;
    margin: 32px 0;
  }

  p {
    margin: 0;
    width: 100%;
    font-size: 82px;
    line-height: 96px;
    text-align: center;
    color: ${white};
  }

  .timestamp {
    margin: 0;
    width: 100%;
    line-height: 56px;
    color: ${indigo30};
    font-size: 47.78px;
    text-align: center;
  }
`;

const WeatherCard = ({
  time, weather, temperature, isActive, onClick, order,
}) => {
  const { icon, text } = weatherDataMap[weather];
  const handleClick = () => onClick(order);
  return (
    <ScWeatherCard
      onClick={handleClick}
      isActive={isActive}
      data-testid="weatherCard"
    >
      <span className="timestamp">{time}</span>
      <img alt={`${text} Icon`} src={icon} />
      <p>{`${temperature}°`}</p>
    </ScWeatherCard>
  );
};

WeatherCard.propTypes = {
  time: string,
  weather: oneOf(Object.keys(WEATHER_TYPES)),
  temperature: number,
  isActive: bool,
  onClick: func,
  order: number,
};

WeatherCard.defaultProps = {
  time: '00:00',
  weather: WEATHER_TYPES.Clear,
  temperature: 6,
  isActive: false,
  onClick: (f) => f,
  order: 0,
};

export default WeatherCard;
