import React from 'react'
import styled from 'styled-components';
import { Slider } from 'antd';
import { useParams } from 'react-router-dom';

const SecondInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;
const marks = {
    20: '20',
    25: '25',
    30: '30',
    35: '35',
    40: '40',
    45: '45',
    50: '50',
    55: '55',
    60: '60',
    65: '65',
};

const SecondSection = ({ageRange, setAgeRange}) => {
    return (
        <SecondInfoDiv>
            <div style={{width: '35vw'}}>
                <Slider range 
                    value={ageRange}
                    marks={marks} 
                    included={true} 
                    min={20} 
                    max={65} 
                    //배열의 형태로 받아와짐
                    onChange={(value) => { setAgeRange(value); }}
                />
            </div>
        </SecondInfoDiv>
    );
}

export default SecondSection;