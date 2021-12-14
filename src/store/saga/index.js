import {
  put, spawn, takeEvery, call,
} from 'redux-saga/effects';
import { fetchForecast } from '../../api';
import { fetchForecastAction, setForecastAction } from '../actionCreators';
import { FETCH_FORECAST_REQUEST } from '../actionTypes';

export function* fetchForecastFlow() {
  yield put(fetchForecastAction());
}

export function* watchFetchForecast() {
  const { city: { name: location }, list } = yield call(fetchForecast);
  const convertKtoC = (temperature) => Math.floor(temperature - 273.15);
  const weatherData = list.map(({
    main: { temp, temp_min: tempMin, temp_max: tempMax }, weather: { main: weather },
  }) => {
    return {
      temp: convertKtoC(temp),
      tempMin: convertKtoC(tempMin),
      tempMax: convertKtoC(tempMax),
      weather,
      location,
    };
  });
  yield put(setForecastAction({ location, weatherData }));
}

export function* rootSagaFlow() {
  yield takeEvery(FETCH_FORECAST_REQUEST, watchFetchForecast);

  yield spawn(fetchForecastFlow);
}
