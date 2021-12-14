import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ForecastReducer from './reducers/forecast';
import { rootSagaFlow } from './saga';

const rootReducer = combineReducers({
  forecast: ForecastReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(
  sagaMiddleware,
);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(middlewares));

sagaMiddleware.run(rootSagaFlow);
export default store;
