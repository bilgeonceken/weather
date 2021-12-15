import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import WeatherCard from '../WeatherCard';
import { weatherDataMap } from '../../utils/constants';
import { getActiveForecast, getForecastsSelector } from '../../store/selectors';
import { setActiveForecastAction } from '../../store/actionCreators';

const ScForecast = styled.div`
  color: white;

  .mainWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .fcUpper {
      display: flex;
      justify-content: space-between;
      flex-basis: 100%;
      max-width: 1627px;
      padding: 30px 20px 0 20px;

      .fcIcon {
        max-width: 328px;
      }

      .fcCenter {
        display: flex;
        flex-direction: column;
        max-width: 448px;
        width: 100%;

        .fcDataUpper {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          font-size: 47.78px;
          color: #A8AABD;
        }

        .fcTempCurrent {
          font-size: 246.512px;
          font-weight: 700;
          text-align: center;
        }
      }

      .fcRight {
        display: flex;
        flex-direction: column;

        .fcLocation {
          font-size: 47.78px;
          color: #A8AABD;
        }

        .fcDate {
          font-size: 99.068px;
          max-width: 530px;
        }
      }
    }

    .fcLower {
      max-height: 410px;
      margin-top: 126px;
      display: flex;
      overflow-x: auto;

      &::-webkit-scrollbar {
        width: 0;
      }

      div:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
`;

const Forecast = () => {
  const dispatch = useDispatch();

  const { activeForecast, weatherData, isLoading } = useSelector(getForecastsSelector);
  const { temp, tempMin, tempMax, weather, date, location } = useSelector(getActiveForecast);
  const weatherConstants = weatherDataMap[weather] || {};
  const { text: weatherText, icon: weatherIcon } = weatherConstants;

  const handleWeatherCardClick = (order) => dispatch(setActiveForecastAction({ order }));
  if (isLoading) return (<div>Loading</div>);
  return (
    <ScForecast>
      <div className="mainWrapper">
        <div className="fcUpper">
          <img className="fcIcon" alt={`${weatherText} Icon`} src={weatherIcon} />
          <div className="fcCenter">
            <div className="fcDataUpper">
              <div className="fcWeather">{weather}</div>
              <div className="fcHighLow">{`${tempMin}°/${tempMax}°`}</div>
            </div>
            <div className="fcTempCurrent">
              {`${temp}°`}
            </div>
          </div>
          <div className="fcRight">
            <div className="fcLocation">{location}</div>
            <div className="fcDate">{date}</div>
          </div>
        </div>
        <div className="fcLower">
          {weatherData.map(({ temp, time, weather, id, order }, key) => {
            return (
              <WeatherCard
                key={id}
                order={order}
                temperature={temp}
                time={time}
                weather={weather}
                isActive={key === activeForecast}
                onClick={handleWeatherCardClick}
              />
            );
          })}
        </div>
      </div>
    </ScForecast>
  );
};

export default Forecast;
