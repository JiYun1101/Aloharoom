import React from "react";
import styled from "styled-components";
import HashTags from "./HashTags";
import Title from "./Title";

const HashTagTitleContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const HashTagTitle = () => {
    return (
        <HashTagTitleContainer>
            <Title/>
            <HashTags/>
        </HashTagTitleContainer>
    );
}

export default HashTagTitle;