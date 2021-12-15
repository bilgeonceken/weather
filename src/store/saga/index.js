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
    main: { temp, temp_min: tempMin, temp_max: tempMax }, weather: [{ main: weather }],
    dt_txt: datetime,
  }) => {
    const time = datetime.split(' ')[1];
    const date = new Date(datetime);
    // possibly not the best way to get de-DE date format in english
    const readableDateString = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const [weekday, month, day] = readableDateString.replace(',', '').split(' ');
    const formattedDate = `${weekday} ${day}. ${month}`;
    return {
      temp: convertKtoC(temp),
      tempMin: convertKtoC(tempMin),
      tempMax: convertKtoC(tempMax),
      weather,
      location,
      time: time.match(/.{2}:.{2}/)[0],
      date: formattedDate,
    };
  });
  yield put(setForecastAction({ location, weatherData }));
}

export function* rootSagaFlow() {
  yield takeEvery(FETCH_FORECAST_REQUEST, watchFetchForecast);

  yield spawn(fetchForecastFlow);
}
