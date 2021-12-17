import React from 'react';
import { arrayOf, elementType, node, oneOfType } from 'prop-types';
import Styled from 'styled-components';

const ScScrollableList = Styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
`;

const ScrollableList = ({ children }) => {
  return (
    <ScScrollableList>
      {children}
    </ScScrollableList>
  );
};

ScrollableList.propTypes = {
  children: oneOfType([
    elementType,
    arrayOf([elementType]),
    node,
    arrayOf([node]),
  ]),
};

ScrollableList.defaultProps = {
  children: null,
};

export default ScrollableList;
