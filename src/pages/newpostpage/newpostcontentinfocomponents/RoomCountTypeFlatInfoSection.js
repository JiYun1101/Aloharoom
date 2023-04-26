import React from 'react'
import styled from 'styled-components';
import { Select } from 'antd';

const RoomCountTypeFlatInfoContainer = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  flex-direction: row;
`;
const RoomCountTypeFlatInfoBox = styled.div`
  width: ${ props => props.width || "0rem"};
  height: 3rem;
  display: flex;
  align-items: center;
`;

const RoomCountTypeFlatInput = styled.input`
  width: ${props => props.width || "0rem"}};
  height: 2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 0.3rem;
`;

const RoomTypeOptions = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
]

const HouseTypeOptions = [
  {
    value: '주택',
    label: '주택',
  },
  {
    value: '오피스텔',
    label: '오피스텔',
  },
  {
    value: '아파트',
    label: '아파트',
  },
]

const RoomCountTypeFlatInfoSection = ({
  setRoomCount,
  setHomeType,
  setFlat,
  setFloor,
  setTotalFloor
}) => {

  const RoomCountOnChange = roomCount => {
    setRoomCount(roomCount);
  }

  const HomeTypeOnChange = homeType => {
    setHomeType(homeType);
  }

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <RoomCountTypeFlatInfoContainer>
      <RoomCountTypeFlatInfoBox width="25%">
      <Select
        showSearch
        placeholder="방 개수 선택"
        onChange={RoomCountOnChange}
        options={RoomTypeOptions}
      />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="25%">
        <Select
          showSearch
          placeholder="주거 형태 선택"
          onChange={HomeTypeOnChange}
          options={HouseTypeOptions}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4rem" 
          onChange={(e) => { setTotalFloor(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4rem" 
          onChange={(e) => { setFloor(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4rem" 
          onChange={(e) => { setFlat(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
    </RoomCountTypeFlatInfoContainer>
  );
};

export default RoomCountTypeFlatInfoSection;