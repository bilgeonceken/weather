import sinon from 'sinon';
import { runSaga } from 'redux-saga'
import * as api from '../api'
import { FETCH_FORECAST_REQUEST } from '../store/actionTypes';
import { fetchForecastFlow, watchFetchForecast } from '../store/saga'
import { mockResponseData, mockStateGeneratedFromMockResponseData } from '../utils/mockResponse'

describe('watchFetchForecast', () => {
  it('should call api and generate correct data', () => {
    const dispatched = [];
    sinon.stub(api, 'fetchForecast').callsFake(() => mockResponseData);

    runSaga({
      dispatch: action => dispatched.push(action),
    }, watchFetchForecast);

    expect(api.fetchForecast.calledOnce).toBe(true);
    expect(dispatched[0].payload).toEqual(mockStateGeneratedFromMockResponseData);
  })
})

describe('fetchForecastFlow', () => {
  it('should should dispatch fetchForecastAction', () => {
    const dispatched = [];

    runSaga({
      dispatch: action => dispatched.push(action),
    }, fetchForecastFlow);

    expect(dispatched[0].type).toBe(FETCH_FORECAST_REQUEST);
  })
})
