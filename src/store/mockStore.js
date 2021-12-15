// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';
import { mockState } from './mockState';

const mockStore = configureStore();

export const store = mockStore(mockState);
