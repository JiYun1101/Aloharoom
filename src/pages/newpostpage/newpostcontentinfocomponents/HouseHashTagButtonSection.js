import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import HoverHashTagButton from '../../HoverHashTagButton';

const HouseHashTagButtonDiv = styled.div`
  width: 90%;
  min-height: 4.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const HouseHashTagButtonSection = ({ myHomeHashtags }) => {
    const [selectedHouseHashTagButtons, setSelectedHouseHashTagButtons] = useState([]);
    const handleHouseHashTagButtonClick = (index) => {
        if (selectedHouseHashTagButtons.includes(index)) {
        setSelectedHouseHashTagButtons(
            selectedHouseHashTagButtons.filter((i) => i !== index)
        );
        } else {
        setSelectedHouseHashTagButtons([...selectedHouseHashTagButtons, index]);
        }
    };
    return (
        <HouseHashTagButtonDiv>
          {myHomeHashtags.map((data, idx) => (
            <HoverHashTagButton
              key={idx}
              selected={selectedHouseHashTagButtons.includes(data)}
              onClick={() => handleHouseHashTagButtonClick(data)}
            >
              {data}
            </HoverHashTagButton>
          ))}
      </HouseHashTagButtonDiv>
    );
}

export default HouseHashTagButtonSection