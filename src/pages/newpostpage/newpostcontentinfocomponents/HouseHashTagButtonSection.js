import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const HouseHashTagButtonDiv = styled.div`
  width: 90%;
  min-height: 4.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const HouseHashTagButton = styled.button`
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  background-color: white;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const HouseHashTagButtonSection = ({ myHomeHashtags }) => {
    //집 해시태그 버튼 클릭 상태 변수
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
            <HouseHashTagButton
              key={idx}
              selected={selectedHouseHashTagButtons.includes(data)}
              onClick={() => handleHouseHashTagButtonClick(data)}
            >
              {data}
            </HouseHashTagButton>
          ))}
      </HouseHashTagButtonDiv>
    );
}

export default HouseHashTagButtonSection