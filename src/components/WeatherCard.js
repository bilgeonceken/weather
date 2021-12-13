import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import styled from 'styled-components';
import { weatherDataMap, WEATHER_TYPES } from '../utils/constants';

const ScWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 400px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-radius: 6px;
  background: ${({ isActive }) => (isActive ? '#51557A' : '#3B3F69')};

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
    color: #fff;
  }

  .timestamp {
    margin: 0;
    width: 100%;
    line-height: 56px;
    color: #A8AABD;
    font-size: 47.78px;
    text-align: center;
  }
`;

const WeatherCard = ({
  time, weather, temperature, isActive,
}) => {
  const { icon, text } = weatherDataMap[weather];
  return (
    <ScWeatherCard isActive={isActive}>
      <span className="timestamp">{time}</span>
      <img alt={`${text} Icon`} src={icon} />
      <p>{`${temperature}°`}</p>
    </ScWeatherCard>
  );
};

WeatherCard.propTypes = {
  time: string,
  weather: oneOf(Object.keys(WEATHER_TYPES)),
  temperature: string,
  isActive: bool,
};

WeatherCard.defaultProps = {
  time: '00:00',
  weather: WEATHER_TYPES.Clear,
  temperature: '6',
  isActive: false,
};

export default WeatherCard;
