import React from "react";
import styled from "styled-components";
import { Tag, HStack } from '@chakra-ui/react';

const HashSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const TagTotalStyle = {
    marginRight : "2rem",
    fontWeight : "800"
}

const HashTagButton = styled.button`
    background-color: white;
    width: 7.5rem;
    height: 2rem;
    border: 2px solid #bbbbbb;
    border-radius: 1rem;
    color: #bbbbbb;
    font-weight: 500;
    font-size: 1.2rem;
`;

const HashTags = () => {
    return (
        <HashSection>
            <HStack
                spacing={10} 
                style={TagTotalStyle}>
                <HashTagButton>#주차가능</HashTagButton>
                <HashTagButton>#주변 편의점</HashTagButton>
                <HashTagButton>#공원</HashTagButton>
                <HashTagButton>#층간소음</HashTagButton>
                <HashTagButton>#남향</HashTagButton>
            </HStack>
        </HashSection>
    );
}


export default HashTags;