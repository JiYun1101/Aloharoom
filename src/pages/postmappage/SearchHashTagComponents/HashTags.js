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

const HashTags = () => {
    return (
        <HashSection>
            <HStack
                spacing={25} 
                style={TagTotalStyle}>
                <Tag>#해시태그1</Tag>
                <Tag>#해시태그2</Tag>
                <Tag>#해시태그3</Tag>
                <Tag>#해시태그4</Tag>
                <Tag>#해시태그5</Tag>
            </HStack>
        </HashSection>
    );
}


export default HashTags;