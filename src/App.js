import React from 'react';
import Forecast from './components/Forecast';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Forecast />
    </div>
  );
};

export default App;
