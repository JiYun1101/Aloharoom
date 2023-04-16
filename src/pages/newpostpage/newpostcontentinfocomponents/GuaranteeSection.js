import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const GuaranteeDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const GuaranteeEmptyDiv = styled.div`
    width: 55%;
    height: 3rem;
`;

const GuaranteeCheckBoxDiv = styled.div`
    width: 45%;
    height: 3rem;
`;

const GuaranteePriceCheckbox = styled.input`
    background-color: #47a5fd;
    margin-right: 0.5rem;
`;

const GuaranteeSpan = styled.span`
    color: #47a5fd;
    font-size: 1rem;
    margin-right: 2rem;
`;

const GuaranteeInputText = styled.input`
    width: 8rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const GuaranteeSection = ({ setDeposit }) => {
    const [depositChecked, setDepositChecked] = useState(false);
    const handleDepositCheckboxChange = () => {
        setDepositChecked(!depositChecked);
    };
    return (
        <GuaranteeDiv>
            <GuaranteeEmptyDiv/>
            <GuaranteeCheckBoxDiv>
                <GuaranteePriceCheckbox type="checkbox" checked={depositChecked} onChange={handleDepositCheckboxChange}/>
                <GuaranteeSpan>보증금 별도</GuaranteeSpan>
                <GuaranteeInputText type="text" disabled={!depositChecked} onChange={(e) => { setDeposit(e.target.value);}}/>
            </GuaranteeCheckBoxDiv>
        </GuaranteeDiv>
    );
}

export default GuaranteeSection;