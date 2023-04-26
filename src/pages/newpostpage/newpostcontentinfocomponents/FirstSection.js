import React from "react";
import styled from "styled-components";
import { DatePicker } from 'antd';

const FirstInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const FirstInfoBox = styled.div`
    width: 60%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const RoomMatePriceInput = styled.input`
    width: 6rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const RoomMatePriceSpan = styled.span`
    margin-left: 0.5rem;
    color: #47a5fd;
`;

const FirstSection = ({startDateOnChange, setRent}) => {
    return (
        <FirstInfoDiv>
            <FirstInfoBox>
                <DatePicker onChange={startDateOnChange}/>
            </FirstInfoBox>
            <FirstInfoBox>
                <RoomMatePriceInput 
                    type="text" 
                    onChange={(e) => { setRent(e.target.value);}}
                />
                <RoomMatePriceSpan>만원</RoomMatePriceSpan>
            </FirstInfoBox>
        </FirstInfoDiv>
    );
}

export default FirstSection;