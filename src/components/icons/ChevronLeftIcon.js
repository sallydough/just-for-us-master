// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledChevronLeftIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const ChevronLeftIcon = ({ size = 150 }) => {
  return (
<StyledChevronLeftIcon xmlns="http://www.w3.org/2000/svg" width="320" height="512" viewBox="0 0 320 512"><path fill="#2D3E5F" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256L246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></StyledChevronLeftIcon>  );
};

export default ChevronLeftIcon;
