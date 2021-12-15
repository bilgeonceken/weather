const {
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_ERROR,
  SET_ACTIVE_FORECAST,
} = require('../actionTypes');

const initialState = {
  isLoading: true,
  hasError: false,
  location: '',
  activeForecast: 0,
  weatherData: [],
};

const ForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_FORECAST_SUCCESS: {
      const {
        location,
        weatherData,
      } = action.payload;
      return {
        ...state,
        location,
        weatherData,
        activeForecast: 0,
        isLoading: false,
      };
    }
    case FETCH_FORECAST_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    case SET_ACTIVE_FORECAST: {
      const { order } = action.payload;
      return {
        ...state,
        activeForecast: order,
      };
    }
    default:
      return state;
  }
};

export default ForecastReducer;
