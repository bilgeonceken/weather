import React from 'react';
import styled from 'styled-components';
import { number, oneOf, string } from 'prop-types';
import { weatherDataMap, WEATHER_TYPES } from '../../utils/constants';
import { indigo30, white } from '../../styles/colors';

const ScHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 146px;
  margin-bottom: 144px;
  height: 344px;
  width: 100%;
  color: ${white};

  article {
    display: flex;

    img {
      max-width: 328px;
    }

    &.left {
      display: flex;
      justify-content: space-between;
      max-width: 919px;
      width: 100%;
      margin-right: 142px;

      .temp {
        display: flex;
        flex-direction: column;

        &-upper {
          display: flex;
          justify-content: space-between;
          width: 448px;
          color: ${indigo30};
        }

        &-lower {
          font-weight: 700;
          font-size: 246.51px;
          text-align: center;
        }
      }
    }

    &.right {
      max-width: 566px;
      height: 344px;
      width: 100%;

      .data {
        display: flex;
        flex-direction: column;

        &-upper {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 32px;
          color: ${indigo30};
        }

        &-lower {
          font-weight: 700;
          text-align: left;

          p {
            font-size: 99.07px;
          }
        }
      }
    }
  }

`;

const Header = ({ temperature, tempMin, tempMax, weather, date, location }) => {
  const weatherConstants = weatherDataMap[weather] || {};
  const { text: weatherText, icon: weatherIcon } = weatherConstants;
  const [weekday, day, month] = date.split(' ');
  return (
    <ScHeader>
      <article className="left">
        <img alt={`${weatherText} Icon`} src={weatherIcon} />
        <div className="temp">
          <div className="temp-upper">
            <p className="temp-weather">{weather}</p>
            <p className="temp-highlow">{`${tempMin}° / ${tempMax}°`}</p>
          </div>
          <div className="temp-lower">
            {`${temperature}°`}
          </div>
        </div>
      </article>
      <article className="right">
        <div className="data">
          <div className="data-upper">
            <p className="data-location">{location}</p>
          </div>
          <div className="data-lower">
            <p>{weekday}</p>
            <p>{`${day} ${month}`}</p>
          </div>
        </div>
      </article>
    </ScHeader>
  );
};

Header.propTypes = {
  temperature: number,
  tempMin: number,
  tempMax: number,
  weather: oneOf(Object.keys(WEATHER_TYPES)),
  date: string,
  location: string,
};

Header.defaultProps = {
  temperature: 0,
  tempMin: 0,
  tempMax: 0,
  weather: WEATHER_TYPES.Clouds,
  date: '',
  location: '',
};

export default Header;
