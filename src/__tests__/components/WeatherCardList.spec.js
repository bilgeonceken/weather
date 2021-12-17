import React from 'react';
import { render } from '@testing-library/react';
import WeatherCardList from '../../components/Forecast/WeatherCardList';

const dummyItems = [
  {
    "id": "1487246400",
    "order": 0,
    "temperature": 13,
    "tempMin": 8,
    "tempMax": 13,
    "weather": "Clear",
    "location": "Altstadt",
    "time": "12:00",
    "date": "Thursday 16. February"
  },
  {
    "id": "1487257200",
    "order": 1,
    "temperature": 12,
    "tempMin": 8,
    "tempMax": 12,
    "weather": "Clear",
    "location": "Altstadt",
    "time": "15:00",
    "date": "Thursday 16. February"
  }
]
describe('WeatherCardList', () => {
  it('should render weather cards with given item list', () => {
    const { container } = render(<WeatherCardList items={dummyItems} />);
    const cardList = container.getElementsByTagName('ul')[0];
    expect(cardList.childElementCount).toBe(dummyItems.length);

    const cards = cardList.querySelectorAll('[data-testid="weatherCard"]');
    expect(cards.length).toBe(dummyItems.length);
  });
});
