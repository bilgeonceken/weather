import React from 'react';
import { render } from '@testing-library/react';
import App from '../../MockApp';

const initial = {
  weather: 'Clear',
  temp: '13°',
  location: 'Altstadt',
  childElementCount: 2,
}

describe('App', () => {
  it('should render initial weather', () => {
    const { container } = render(<App />);
    const weather = container.querySelectorAll('[data-testid="fcWeather"]')[0];
    expect(weather.textContent).toBe(initial.weather);
  });

  it('should render initial location', () => {
    const { container } = render(<App />);
    const location = container.querySelectorAll('[data-testid="fcLocation"]')[0];
    expect(location.textContent).toBe(initial.location);
  });

  it('should render temperature', () => {
    const { container } = render(<App />);
    const temp = container.querySelectorAll('[data-testid="fcTempCurrent"]')[0];
    expect(temp.textContent).toBe(initial.temp);
  });

  it('should render weather cards', () => {
    const { container } = render(<App />);
    const cardList = container.querySelectorAll('[data-testid="weatherCardList"]')[0];
    expect(cardList.childElementCount).toBe(initial.childElementCount);
  });
});
