export const getForecastsSelector = (state) => state.forecast;
export const getActiveForecastSelector = ({ forecast: { weatherData, activeForecast } }) => {
  return weatherData[activeForecast] || {};
};
