import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const GuaranteeContainer = styled.div`
    margin-top: 1vh;
    width: 90%;
    height: 4.5vh;
    display: flex;
    flex-direction: row;
`;

const GuaranteeBox = styled.div`
    width: ${props => props.width || "0rem"};
    height: 4.5vh;
`;

const GuaranteePriceCheckbox = styled.input`
    background-color: #47a5fd;
    margin-right: 0.5vw;
`;

const GuaranteeSpan = styled.span`
    //color: #47a5fd;
    font-size: 1rem;
    margin-right: 2vw;
    font-weight: ${props => props.fontWeight};
`;

const GuaranteeInputText = styled.input`
    width: 7.5vw;
    height: 3.5vh;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const GuaranteeSection = ({ 
    deposit, 
    openChatUrl,
    setDeposit,
    setOpenChatUrl
}) => {
    const [depositChecked, setDepositChecked] = useState(false);
    const handleDepositCheckboxChange = () => {
        setDepositChecked(!depositChecked);
    };
    return (
        <GuaranteeContainer>
            <GuaranteeBox width="50%">
                <Input 
                    size='large'
                    style={{ width: "17vw"}}
                    value={openChatUrl}
                    onChange={(e) => {setOpenChatUrl(e.target.value);}}
                />
            </GuaranteeBox>
            <GuaranteeBox width="50%">
                <GuaranteePriceCheckbox type="checkbox" checked={(deposit !== null) ? true : depositChecked} onChange={handleDepositCheckboxChange}/>
                <GuaranteeSpan fontWeight="600">보증금 별도</GuaranteeSpan>
                <GuaranteeInputText value={deposit} type="text" disabled={(deposit !== null) ? false : !depositChecked} onChange={(e) => { setDeposit(e.target.value);}}/>
            </GuaranteeBox>
        </GuaranteeContainer>
    );
}

export default GuaranteeSection;