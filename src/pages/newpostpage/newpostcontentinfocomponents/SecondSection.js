import React from 'react'
import styled from 'styled-components';
import { Slider } from 'antd';

const SecondInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const SecondInfoBox = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    border-style: solid;
`;

const SecondSection = () => {
    const marks = {
        0: '0°C',
        20: '20°C',
        40: '40°C',
        60: '60°C',
        80: '80°C',
        100: {
            style: {
                color: 'red',
            },
            label: <strong>100°C</strong>,
        },
    };
    return (
        <Slider marks={marks} defaultValue={20}/>
    );
}

export default SecondSection;