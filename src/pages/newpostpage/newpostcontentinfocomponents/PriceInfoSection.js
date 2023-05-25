import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

const PriceInfoContainer = styled.div`
  width: 90%;
  height: 5vh;
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
  font-size: ${props => props.fontSize || "1rem"};
  margin-right: ${props => props.marginRight || "0rem"};
  font-weight: ${props => props.fontWeight};
`;

const ManageMentPriceCheckbox = styled.input`
  background-color: #47a5fd;
  margin-right: 0.5vw;
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
    price,
    tradeType,
    maintenance,
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
          <PriceInfoBox width="50%" height="5vh">
            <PriceInfoInput value={price} width="5vw" height="3.5vh" type="text" onChange={(e) => { setPrice(e.target.value); }}/>
            <PriceInfoSpan fontSize="2rem">(</PriceInfoSpan>
            <Select
              showSearch
              placeholder="계약형태 선택"
              value={tradeType === "" ? undefined : tradeType}
              onChange={TradeTypeOnChange}
              options={TradeTypeOptions}
              style={{ width: 130 }}
            />
            <PriceInfoSpan fontSize="2rem">)</PriceInfoSpan>
          </PriceInfoBox>
          <PriceInfoBox width="50%" height="5vh">
            <ManageMentPriceCheckbox type="checkbox" checked={maintenance !== "" ?  true : maintenanceChecked} onChange={handleMaintenanceCheckboxChange}/>
            <PriceInfoSpan marginRight="2vw" fontWeight="600">관리비 별도</PriceInfoSpan>
            <PriceInfoInput value={maintenance} width="7.5vw" height="3.5vh" type="text" disabled={maintenance !== "" ?  false : !maintenanceChecked} onChange={(e) => { setMaintenance(e.target.value);}}/>
          </PriceInfoBox>
        </PriceInfoContainer>
    );
}

export default PriceInfoSection;