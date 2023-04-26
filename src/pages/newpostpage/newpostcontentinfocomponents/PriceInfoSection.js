import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

const PriceInfoContainer = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  flex-direction: row;
`;

const PriceInfoBox = styled.div`
  width: ${ props => props.width || "0rem"};
  height: ${ props => props.height || "0rem"};
  display: flex;
  align-items: center;
`;

const PriceInfoInput = styled.input`
  width: ${props => props.width || "2rem"};
  height: ${props => props.height || "2rem"};
  border-width: 0.1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
`;

const PriceInfoSpan = styled.span`
  color: #47a5fd;
  font-size: ${props => props.fontSize || "1rem"};
  margin-right: ${props => props.marginRight || "0rem"};
`;

const ManageMentPriceCheckbox = styled.input`
  background-color: #47a5fd;
  margin-right: 0.5rem;
`;

const TradeTypeOptions = [
  {
    value: '월세',
    label: '월세',
  },
  {
    value: '전세',
    label: '전세',
  },
  {
    value: '매매',
    label: '매매',
  },
]

const PriceInfoSection = ({
    tradeType,
    setPrice,
    setTradeType,
    setMaintenance
}) => {
    const TradeTypeOnChange = (value) => {
      setTradeType(value);
    };
        //체크 박스 클릭시 활성화 되도록 하는 상태 변수
        const [maintenanceChecked, setMaintenanceChecked] = useState(false);
        const handleMaintenanceCheckboxChange = () => {
            setMaintenanceChecked(!maintenanceChecked);
        };
    return (
        <PriceInfoContainer>
          <PriceInfoBox width="50%" height="3rem">
            <PriceInfoInput width="5rem" height="2rem" type="text" onChange={(e) => { setPrice(e.target.value); }}/>
            <PriceInfoSpan fontSize="2rem">(</PriceInfoSpan>
            <Select
              showSearch
              placeholder="계약형태 선택"
              onChange={TradeTypeOnChange}
              options={TradeTypeOptions}
            />
            <PriceInfoSpan fontSize="2rem">)</PriceInfoSpan>
          </PriceInfoBox>
          <PriceInfoBox width="50%" height="3rem">
            <ManageMentPriceCheckbox type="checkbox" checked={maintenanceChecked} onChange={handleMaintenanceCheckboxChange}/>
            <PriceInfoSpan marginRight="2rem">관리비 별도</PriceInfoSpan>
            <PriceInfoInput width="8rem" height="2rem" type="text" disabled={!maintenanceChecked} onChange={(e) => { setMaintenance(e.target.value);}}/>
          </PriceInfoBox>
        </PriceInfoContainer>
    );
}

export default PriceInfoSection;