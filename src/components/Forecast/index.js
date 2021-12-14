import React from 'react';
import styled from 'styled-components';
import { weatherDataMap, WEATHER_TYPES } from '../../utils/constants';
import WeatherCard from '../WeatherCard';

const ScForecast = styled.div`
  color: white;

  .mainWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5% 0;
    .fcUpper {
      display: flex;
      justify-content: space-between;
      flex-basis: 100%;
      max-width: 1627px;

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
          max-width: 566px;
        }
      }
    }

    .fcLower {
      max-height: 410px;
      margin-top: 156px;
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
  // dummyData
  const weatherType = WEATHER_TYPES.Clear;
  const { text, icon } = weatherDataMap[weatherType];
  const location = 'Munich';
  const date = 'Thursday 28. March';

  return (
    <ScForecast>
      <div className="mainWrapper">
        <div className="fcUpper">
          <img className="fcIcon" alt={`${text} Icon`} src={icon} />
          <div className="fcCenter">
            <div className="fcDataUpper">
              <div className="fcWeather">{text}</div>
              <div className="fcHighLow">{`${'12'}°/${'17'}°`}</div>
            </div>
            <div className="fcTempCurrent">
              {`${'12'}°`}
            </div>
          </div>
          <div className="fcRight">
            <div className="fcLocation">{location}</div>
            <div className="fcDate">{date}</div>
          </div>
        </div>
        <div className="fcLower">
          <WeatherCard />
          <WeatherCard isActive />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
    </ScForecast>
  );
};

export default Forecast;
