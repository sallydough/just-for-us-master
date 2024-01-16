// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledAmbulanceIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const AmbulanceIcon = ({ size = 150 }) => {
  return (
<StyledAmbulanceIcon xmlns="http://www.w3.org/2000/svg" size={size} fill="#D72641" viewBox="0 0 24 24"><path d="M11 4V0h2v4h-2ZM6.575 5.425l-3-3L5 1l3 3l-1.425 1.425ZM6 18h3q.425 0 .713-.288T10 17q0-.425-.288-.712T9 16H6v2Zm9 0h3v-2h-3q-.425 0-.712.288T14 17q0 .425.288.713T15 18Zm2.275-6.75L20.75 7.8L19.7 6.75l-2.425 2.375l-.975-.975l-1.05 1.075l2.025 2.025ZM18 14q-2.075 0-3.537-1.463T13 9q0-2.075 1.463-3.537T18 4q2.075 0 3.538 1.463T23 9q0 2.075-1.463 3.538T18 14ZM4 23q-.425 0-.712-.288T3 22v-8l2.1-6q.15-.45.538-.725T6.5 7H9V5h3.275q-.6.85-.937 1.863T11 9H6.85l-1.475 4h6.9q1 1.425 2.5 2.213T18 16q.8 0 1.538-.162T21 15.325V22q0 .425-.288.713T20 23h-1q-.425 0-.712-.288T18 22v-1H6v1q0 .425-.288.713T5 23H4Z"/></StyledAmbulanceIcon>
  );
};

export default AmbulanceIcon;
