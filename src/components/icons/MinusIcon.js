// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledMinusIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const MinusIcon = ({ size = 150 }) => {
  return (
    <StyledMinusIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 256 256"><path fill="#2D3E5F" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z"/></StyledMinusIcon>
  );
};

export default MinusIcon;