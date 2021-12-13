import React from 'react';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h1 data-testid="dummyRoot">
        Weather App
      </h1>
    </div>
  );
};

export default App;
