import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveForecastSelector, getForecastsSelector } from '../../store/selectors';
import { setActiveForecastAction } from '../../store/actionCreators';
import Header from './Header';
import WeatherCardList from './WeatherCardList';

const ScForecast = styled.div`
  padding-top: 96px;
`;

const Forecast = () => {
  const dispatch = useDispatch();
  const {
    activeForecast: activeForecastOrder, weatherData, isLoading,
  } = useSelector(getForecastsSelector);
  const activeForecast = useSelector(getActiveForecastSelector);

  const handleWeatherCardClick = (order) => dispatch(setActiveForecastAction({ order }));

  if (isLoading) return (<div>Loading</div>);
  return (
    <ScForecast>
      <Header {...activeForecast} />
      <WeatherCardList
        items={weatherData}
        activeForecast={activeForecastOrder}
        onWeatherCardClick={handleWeatherCardClick}
      />
    </ScForecast>
  );
};

export default Forecast;
