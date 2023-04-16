import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const PriceInfoDiv = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  flex-direction: row;
`;

const PriceInputSelectDiv = styled.div`
  width: 55%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 5rem;
  height: 2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
`;

const PriceSpan = styled.span`
  color: #47a5fd;
  font-size: 1.2rem;
`;

const PriceSelect = styled.select`
  width: 150px;
  height: 35px;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
`;

const PriceOption = styled.option`
  color: black;
`;

const ManageMentDiv = styled.div`
  width: 45%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const ManageMentPriceCheckbox = styled.input`
  background-color: #47a5fd;
  margin-right: 0.5rem;
`;

const ManageMentSpan = styled.span`
  color: #47a5fd;
  font-size: 1rem;
  margin-right: 2rem;
`;

const MangeMentInputText = styled.input`
  width: 8rem;
  height: 2rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 0.3rem;
`;

const PriceInfoSection = ({
    tradeType,
    setPrice,
    setTradeType,
    setMaintenance
}) => {
        //체크 박스 클릭시 활성화 되도록 하는 상태 변수
        const [maintenanceChecked, setMaintenanceChecked] = useState(false);
        const handleMaintenanceCheckboxChange = () => {
            setMaintenanceChecked(!maintenanceChecked);
        };
    return (
        <PriceInfoDiv>
          <PriceInputSelectDiv>
            <PriceInput type="text" onChange={(e) => { setPrice(e.target.value); }}/>
            <PriceSpan>(</PriceSpan>
            <PriceSelect value={tradeType} onChange={(e) => { setTradeType(e.target.value)}}>
              <PriceOption value="월세">월세</PriceOption>
              <PriceOption value="전세">전세</PriceOption>
              <PriceOption value="매매">매매</PriceOption>
            </PriceSelect>
            <PriceSpan>)</PriceSpan>
          </PriceInputSelectDiv>
          <ManageMentDiv>
            <ManageMentPriceCheckbox type="checkbox" checked={maintenanceChecked} onChange={handleMaintenanceCheckboxChange}/>
            <ManageMentSpan>관리비 별도</ManageMentSpan>
            <MangeMentInputText type="text" disabled={!maintenanceChecked} onChange={(e) => { setMaintenance(e.target.value);}}/>
          </ManageMentDiv>
        </PriceInfoDiv>
    );
}

export default PriceInfoSection;