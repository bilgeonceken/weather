export const getForecastsSelector = (state) => state.forecast;
export const getActiveForecast = ({ forecast: { weatherData, activeForecast } }) => {
  return weatherData[activeForecast];
};
