import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('should render dummy header', () => {
    const { container } = render(<App />);
    const dummyHeader = container.querySelectorAll('[data-testid="dummyRoot"]')[0];
    expect(dummyHeader.textContent).toBe('Weather App')
  });
});
