const { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_REQUEST, FETCH_FORECAST_ERROR } = require('../actionTypes');

const initialState = {
  isLoading: true,
  hasError: false,
  location: '',
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
    default:
      return state;
  }
};

export default ForecastReducer;
