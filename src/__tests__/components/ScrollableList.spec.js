import React from 'react';
import { render } from '@testing-library/react';
import ScrollableList from '../../components/ScrollableList';

const dummyData = ['first', 'second'];
const renderDummyChildren = () => dummyData.map((data, key) => (<div key={key} >{data}</div>));

describe('ScrollableList', () => {
  it('should render children', () => {
    const { container } = render(<ScrollableList>{renderDummyChildren()}</ScrollableList>);
    const list = container.getElementsByTagName('ul')[0];
    expect(list.childElementCount).toBe(dummyData.length);
  });
});
