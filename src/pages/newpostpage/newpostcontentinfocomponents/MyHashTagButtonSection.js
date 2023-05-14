import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const MyHashTagButtonDiv = styled.div`
    width: 90%;
    min-height: 4.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const MyHashTagButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 0.3rem;
    background-color: white;
    border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
    color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
    :hover {
        border-color: #47a5fd;
        color: #47a5fd;
    }
`;

const MyHashTagButtonSection = ({ myHashtags }) => {
    //내 해시태그 버튼 클릭 상태 변수
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
        <MyHashTagButtonDiv>
            {myHashtags.map((data, idx) => (
                <MyHashTagButton
                    key={idx}
                    selected={selectedMyHashTagButtons.includes(data)}
                    onClick={() => handleMyHashTagButtonClick(data)}
                >
                    {data}
                </MyHashTagButton>
            ))}
        </MyHashTagButtonDiv>
    );
}

export default MyHashTagButtonSection;