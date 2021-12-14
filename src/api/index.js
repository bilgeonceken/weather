import { mockResponseData } from '../utils/mockResponse';

export const fetchForecast = () => {
  return new Promise((res) => {
    setTimeout(() => res(mockResponseData), 2000);
  });
};
