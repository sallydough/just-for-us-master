// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledPlusIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const PlusIcon = ({ size = 150 }) => {
  return (
    <StyledPlusIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 256 256"><path fill="#2D3E5F" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"/></StyledPlusIcon>
  );
};

export default PlusIcon;
