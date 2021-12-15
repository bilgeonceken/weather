import ForecastReducer from './reducers/forecast';

const initialState = {
  isLoading: false,
  hasError: false,
  location: 'Altstadt',
  activeForecast: 0,
  weatherData: [
    {
      id: '1487246400',
      order: 0,
      temp: 13,
      tempMin: 8,
      tempMax: 13,
      weather: 'Clear',
      location: 'Altstadt',
      time: '12:00',
      date: 'Thursday 16. February',
    },
    {
      id: '1487257200',
      order: 1,
      temp: 12,
      tempMin: 8,
      tempMax: 12,
      weather: 'Clear',
      location: 'Altstadt',
      time: '15:00',
      date: 'Thursday 16. February',
    },
  ],
};

export const mockState = {
  forecast: ForecastReducer(initialState, {}),
};

export default (state) => {
  return {
    ...mockState,
    ...state,
  };
};
