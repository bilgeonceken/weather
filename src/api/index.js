// Fake promise to be able to test the frontend without running proxy
//
// import { mockResponseData } from '../utils/mockResponse';
//
// export const fetchForecast = () => {
//   return new Promise((res) => {
//     setTimeout(() => res(mockResponseData), 2000);
//   });
// };

const apiUrl = 'http://localhost:5000/getData';

export const fetchForecast = async () => {
  const response = await fetch(apiUrl);
  const jsonData = response.json();
  return jsonData;
};
