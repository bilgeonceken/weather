import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getActiveForecast } from '../../store/selectors';
import { weatherDataMap } from '../../utils/constants';

const ScHeader = styled.div`
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
`;

const Header = () => {
  const { temp, tempMin, tempMax, weather, date, location } = useSelector(getActiveForecast);
  const weatherConstants = weatherDataMap[weather] || {};
  const { text: weatherText, icon: weatherIcon } = weatherConstants;
  return (
    <ScHeader>
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
    </ScHeader>
  );
};

export default Header;
