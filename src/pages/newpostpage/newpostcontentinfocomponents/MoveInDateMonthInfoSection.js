import React from "react";
import styled from "styled-components";
import { DatePicker } from 'antd';

const MoveInDateMonthInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const MoveInDateInfoDiv = styled.div`
    width: 60%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const MoveInDateMonthInfoSection = ({startDateOnChange}) => {
    return (
        <MoveInDateMonthInfoDiv>
            <MoveInDateInfoDiv>
                <DatePicker onChange={startDateOnChange}/>
            </MoveInDateInfoDiv>
        </MoveInDateMonthInfoDiv>
    );
}

export default MoveInDateMonthInfoSection;