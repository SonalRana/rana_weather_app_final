import React from 'react';
import styled from "styled-components";

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 10px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function Tabs({ cities, onSelect }) {
  return (
    <div>
      {cities.map(city => (
        
        <Tab key={city.name} onClick={() => onSelect(city)}>
          {city.name}

        </Tab>
      ))}
    </div>
  );
}

export default Tabs;