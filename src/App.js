import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Forecast from './components/Forecast';
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
