import React from 'react';

import { Provider } from 'react-redux';

import Forecast from './components/Forecast';
import { store } from './store/mockStore';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Forecast />
      </div>
    </Provider>
  );
};

export default App;
