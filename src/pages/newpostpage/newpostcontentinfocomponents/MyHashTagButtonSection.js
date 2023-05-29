import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import HashTagButton from '../../HashTagButton';

const EmptyMyHashTagButtonDiv = styled.div`
    width: 90%;
    min-height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyHashTagButtonDiv = styled.div`
    width: 90%;
    min-height: 4.5vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const MyHashTagButtonSection = ({ myHashtags }) => {
    const [selectedMyHashTagButtons, setSelectedMyHashTagButtons] = useState([]);
    const handleMyHashTagButtonClick = (index) => {
        if (selectedMyHashTagButtons.includes(index)) {
        setSelectedMyHashTagButtons(
            selectedMyHashTagButtons.filter((i) => i !== index)
        );
        } else {
        setSelectedMyHashTagButtons([...selectedMyHashTagButtons, index]);
        }
    };
    return (
        <>
        {myHashtags.length === 0 ?
            <EmptyMyHashTagButtonDiv>
                <div style={{ color: "#bbbbbb"}}>설정된 내 해시태그가 존재하지 않습니다.</div>
            </EmptyMyHashTagButtonDiv>
        :
            <MyHashTagButtonDiv>
                {myHashtags.map((data, idx) => (
                    <HashTagButton
                        key={idx}
                        selected={selectedMyHashTagButtons.includes(data)}
                        onClick={() => handleMyHashTagButtonClick(data)}
                    >
                        {data}
                    </HashTagButton>
                ))}
            </MyHashTagButtonDiv>
        }
        
        </>
    );
}

export default MyHashTagButtonSection;