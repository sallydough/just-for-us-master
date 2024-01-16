// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledChevronRightIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const ChevronRightIcon = ({ size = 150 }) => {
  return (
<StyledChevronRightIcon xmlns="http://www.w3.org/2000/svg" width="320" height="512" viewBox="0 0 320 512"><path fill="#2D3E5F" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256L73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></StyledChevronRightIcon>  );
};

export default ChevronRightIcon;
