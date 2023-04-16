import React, { useState } from 'react'
import styled from 'styled-components';

const RoomCountTypeFlatInfoDiv = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  flex-direction: row;
`;

const RoomCountInfoDiv = styled.div`
  width: 40%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const RoomCountButton = styled.button`
  width: 6rem;
  height: 2rem;
  font-size: 1.2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  background-color: white;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  margin-right: 0.5rem;
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const TypeInfoDiv = styled.div`
  width: 40%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const TypeInfoButton = styled.button`
  width: 6rem;
  height: 2rem;
  font-size: 1.2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  background-color: white;
  margin-right: 0.5rem;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const FlatInfoDiv = styled.div`
  width: 20%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const FlatInfoInput = styled.input`
  width: 5rem;
  height: 2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 0.3rem;
`;

const RoomCountTypeFlatInfoSection = ({setRoomCount, setHomeType, setFlat}) => {
    //방 개수 버튼 클릭 상태 변수
    const [selectedRoomCountButton, setSelectedRoomCountButton] = useState(null);
    const handleRoomCountButtonClick = (buttonIndex) => {
        setSelectedRoomCountButton(buttonIndex);
    };
    //주거형태 버튼 클릭 상태 변수
    const [selectedTypeInfoButton, setSelectedTypeInfoButton] = useState(null);
    const handleTypeInfoButton = (buttonIndex) => {
        setSelectedTypeInfoButton(buttonIndex);
    };

  return (
    <RoomCountTypeFlatInfoDiv>
                            <RoomCountInfoDiv>
                                <RoomCountButton 
                                    selected={selectedRoomCountButton === 0} 
                                    onClick={() => {
                                        handleRoomCountButtonClick(0);
                                        setRoomCount("1");
                                    }}
                                >
                                    원 룸
                                </RoomCountButton>
                                <RoomCountButton 
                                    selected={selectedRoomCountButton === 1} 
                                    onClick={() => {
                                        handleRoomCountButtonClick(1);
                                        setRoomCount("2");
                                    }}
                                >
                                    투-쓰리룸
                                </RoomCountButton>
                            </RoomCountInfoDiv>
                            <TypeInfoDiv>
                                <TypeInfoButton
                                    selected={selectedTypeInfoButton === 0}
                                    onClick={() => {
                                        handleTypeInfoButton(0);
                                        setHomeType("오피스텔");
                                    }}
                                >
                                    오피스텔
                                </TypeInfoButton>
                                <TypeInfoButton
                                    selected={selectedTypeInfoButton === 1}
                                    onClick={() => {
                                        handleTypeInfoButton(1);
                                        setHomeType("아파트")
                                    }}
                                >
                                    아파트
                                </TypeInfoButton>
                            </TypeInfoDiv>
                            <FlatInfoDiv>
                                <FlatInfoInput type="text" onChange={(e) => { setFlat(e.target.value)}}/>
                            </FlatInfoDiv>
                        </RoomCountTypeFlatInfoDiv>
  );
};

export default RoomCountTypeFlatInfoSection;