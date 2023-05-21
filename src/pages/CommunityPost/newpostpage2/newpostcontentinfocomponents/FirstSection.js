import React from "react";
import styled from "styled-components";
import { DatePicker } from 'antd';
import dayjs from "dayjs";

const FirstInfoDiv = styled.div`
    width: 90%;
    height: 5vh;
    display: flex;
    flex-direction: row;
`;

const FirstInfoBox = styled.div`
    width: 60%;
    height: 5vh;
    display: flex;
    align-items: center;
`;

const RoomMatePriceInput = styled.input`
    width: 5.5vw;
    height: 3.5vh;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const RoomMatePriceSpan = styled.span`
    margin-left: 0.5vw;
    color: #47a5fd;
    font-weight: ${props => props.fontWeight};
`;

const FirstSection = ({
    startDate,
    rent,
    setStartDate,
    setRent
}) => {
    const dateFormat = 'YYYY-MM-DD';
    //입주 가능 날짜 설정 함수
    const startDateOnChange = date => {
        setStartDate(date.format('YYYY-MM-DD'));
    };
    console.log('First Section rendered');
    console.log('startDate ', startDate);
    return (
        <FirstInfoDiv>
            <FirstInfoBox>
                <DatePicker 
                    value={startDate !== "" ? dayjs(startDate) : undefined}
                    format={dateFormat}
                    onChange={startDateOnChange}
                />
            </FirstInfoBox>
            <FirstInfoBox>
                <RoomMatePriceInput 
                    value={rent}
                    type="text" 
                    onChange={(e) => { setRent(e.target.value);}}
                />
                <RoomMatePriceSpan fontWeight="600">만원</RoomMatePriceSpan>
            </FirstInfoBox>
        </FirstInfoDiv>
    );
}

export default FirstSection;