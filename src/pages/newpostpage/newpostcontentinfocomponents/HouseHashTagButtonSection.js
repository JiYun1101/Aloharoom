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

const HouseHashTagButtonSection = () => {
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
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(1)}
                                onClick={() => handleHouseHashTagButtonClick(1)}
                            >
                              #비흡연자
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(2)}
                                onClick={() => handleHouseHashTagButtonClick(2)}
                            >
                              #역세권
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(3)}
                                onClick={() => handleHouseHashTagButtonClick(3)}
                            >
                              #남향
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(4)}
                                onClick={() => handleHouseHashTagButtonClick(4)}
                            >
                              #편의점 근처
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(5)}
                                onClick={() => handleHouseHashTagButtonClick(5)}
                            >
                              #조용한
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(6)}
                                onClick={() => handleHouseHashTagButtonClick(6)}
                            >
                              #비흡연자
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(7)}
                                onClick={() => handleHouseHashTagButtonClick(7)}
                            >
                              #역세권
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(8)}
                                onClick={() => handleHouseHashTagButtonClick(8)}
                            >
                              #남향
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(9)}
                                onClick={() => handleHouseHashTagButtonClick(9)}
                            >
                              #편의점 근처
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(10)}
                                onClick={() => handleHouseHashTagButtonClick(10)}
                            >
                              #조용한
                            </HouseHashTagButton>
      </HouseHashTagButtonDiv>
    );
}

export default HouseHashTagButtonSection