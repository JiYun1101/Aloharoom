import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const MyHashTagButtonDiv = styled.div`
    width: 90%;
    height: 4.5rem;
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

const MyHashTagButtonSection = () => {
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
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(1)}
                                onClick={() => handleMyHashTagButtonClick(1)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(2)}
                                onClick={() => handleMyHashTagButtonClick(2)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(3)}
                                onClick={() => handleMyHashTagButtonClick(3)}
                            >
                                #남향
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(4)}
                                onClick={() => handleMyHashTagButtonClick(4)}
                            >
                                #조용한
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(5)}
                                onClick={() => handleMyHashTagButtonClick(5)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(6)}
                                onClick={() => handleMyHashTagButtonClick(6)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(7)}
                                onClick={() => handleMyHashTagButtonClick(7)}
                            >
                                #남향
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(8)}
                                onClick={() => handleMyHashTagButtonClick(8)}
                            >
                                #조용한
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(9)}
                                onClick={() => handleMyHashTagButtonClick(9)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(10)}
                                onClick={() => handleMyHashTagButtonClick(10)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(11)}
                                onClick={() => handleMyHashTagButtonClick(11)}
                            >
                                #남향
                            </MyHashTagButton>
                        </MyHashTagButtonDiv>
    );
}

export default MyHashTagButtonSection;