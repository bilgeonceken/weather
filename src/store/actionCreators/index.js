import { FETCH_FORECAST_REQUEST, FETCH_FORECAST_SUCCESS } from '../actionTypes';

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
