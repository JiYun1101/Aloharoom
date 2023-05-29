import React from 'react'
import styled from 'styled-components';
import { Select } from 'antd';

const RoomCountTypeFlatInfoContainer = styled.div`
  width: 90%;
  height: 5vh;
  display: flex;
  flex-direction: row;
`;
const RoomCountTypeFlatInfoBox = styled.div`
  width: ${ props => props.width || "0rem"};
  height: 4.5vh;
  display: flex;
  align-items: center;
`;

const RoomCountTypeFlatInput = styled.input`
  width: ${props => props.width || "0rem"};
  height: 3.5vh;
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
    value: 'villa',
    label: '주택',
  },
  {
    value: 'officetel',
    label: '오피스텔',
  },
  {
    value: 'apartment',
    label: '아파트',
  },
]

const RoomCountTypeFlatInfoSection = ({
  roomCount,
  homeType,
  flat,
  floor,
  totalFloor,
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

  return (
    <RoomCountTypeFlatInfoContainer>
      <RoomCountTypeFlatInfoBox width="25%">
      <Select
        showSearch
        placeholder="방 개수 선택"
        value={roomCount === "" ? undefined : roomCount}
        onChange={RoomCountOnChange}
        options={RoomTypeOptions}
        style={{ width: 100 }}
      />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="25%">
        <Select
          showSearch
          value={homeType === "" ? undefined : homeType}
          placeholder="주거 형태 선택"
          onChange={HomeTypeOnChange}
          options={HouseTypeOptions}
          style={{ width: 100 }}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4vw" 
          value={totalFloor}
          onChange={(e) => { setTotalFloor(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4vw" 
          value={floor}
          onChange={(e) => { setFloor(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
      <RoomCountTypeFlatInfoBox width="16%">
        <RoomCountTypeFlatInput 
          type="text" 
          width="4vw" 
          value={flat}
          onChange={(e) => { setFlat(e.target.value)}}
        />
      </RoomCountTypeFlatInfoBox>
    </RoomCountTypeFlatInfoContainer>
  );
};

export default RoomCountTypeFlatInfoSection;