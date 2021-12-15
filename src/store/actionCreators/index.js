import { FETCH_FORECAST_REQUEST, FETCH_FORECAST_SUCCESS, SET_ACTIVE_FORECAST } from '../actionTypes';

export const fetchForecastAction = () => {
  return {
    type: FETCH_FORECAST_REQUEST,
  };
};

export const setForecastAction = (payload) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload,
  };
};

export const setActiveForecastAction = (payload) => {
  return {
    type: SET_ACTIVE_FORECAST,
    payload,
  };
};
